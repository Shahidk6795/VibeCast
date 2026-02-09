import React, { createContext, useState, useRef, useEffect, useCallback } from "react";

// This allows any component in the app to access player data without passing props.
export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  


  // Playlist State: Stores the array of song objects.
  // Uses "Lazy Initialization" (function inside useState) to read LocalStorage only once on startup.
  const [playlist, setPlaylist] = useState(() => {
    const saved = localStorage.getItem("vibe_playlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Current Song Index: Tracks which song in the playlist is active.
  const [currentSongIndex, setCurrentSongIndex] = useState(() => {
    const saved = localStorage.getItem("vibe_index");
    return saved ? parseInt(saved) : 0;
  });

  // Volume State: Persists user's volume preference (0.0 to 1.0).
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem("vibe_volume");
    return saved ? parseFloat(saved) : 1;
  });

  // Initial Time Ref: Stores the timestamp to resume from. 
  // We use a useRef here instead of state to prevent unnecessary re-renders during playback.
  const initialTimeRef = useRef(
    parseFloat(localStorage.getItem("vibe_time")) || 0
  );

  // Playback States
  const [isPlaying, setIsPlaying] = useState(false); 
  const [miniPlayerVisible, setMiniPlayerVisible] = useState(false);
  const [duration, setDuration] = useState(0); // Total length of song in seconds
  const [progress, setProgress] = useState(0); // Current position in seconds
  
  const [isShuffle, setIsShuffle] = useState(false);
  const [shuffledQueue, setShuffledQueue] = useState([]);
  
  // Audio Reference: The actual HTML5 Audio element that plays the music.
  const audioRef = useRef(new Audio());
  
  // Automatically saves progress to LocalStorage whenever state changes.
  useEffect(() => {
    localStorage.setItem("vibe_playlist", JSON.stringify(playlist));
    localStorage.setItem("vibe_index", currentSongIndex);
    localStorage.setItem("vibe_volume", volume);
  }, [playlist, currentSongIndex, volume]);

  // Handles loading the song into the Audio element when the song index changes.
  useEffect(() => {
    if (playlist.length > 0 && playlist[currentSongIndex]) {
      const song = playlist[currentSongIndex];
      const audio = audioRef.current;

      if (audio.src !== song.path) {
        audio.src = song.path;
        audio.load();

        //  saved time if page was reloaded
        if (initialTimeRef.current > 0) {
          audio.currentTime = initialTimeRef.current;
          initialTimeRef.current = 0;
        } else {
          audio.currentTime = 0;
        }

        // Auto-play logic if the player was already running
        if (isPlaying) {
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise.catch(e => {
                if (e.name !== 'AbortError') console.log("Playback interrupted:", e);
            });
          }
        }
      }
    }
  }, [playlist, currentSongIndex]);

  // Syncs the React 'isPlaying' state with the imperative Audio API
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio.src) return;

    if (isPlaying) {
      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => { if (e.name !== 'AbortError') console.error(e) });
        }
      }
    } else {
      if (!audio.paused) audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Uses Fisher-Yates algorithm to create a random array of indices
  const generateShuffleQueue = (length) => {
    const indices = Array.from({ length }, (_, i) => i);
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  };

  const toggleShuffle = () => {
    if (!isShuffle) {
      setShuffledQueue(generateShuffleQueue(playlist.length));
    } else {
      setShuffledQueue([]);
    }
    setIsShuffle((prev) => !prev);
  };

  const nextSong = useCallback(() => {
    if (!playlist.length) return;

    let nextIndex;
    // If Shuffle is ON, pick from the randomized queue
    if (isShuffle && shuffledQueue.length > 0) {
      const currentQueueIndex = shuffledQueue.indexOf(currentSongIndex);
      const nextQueueIndex = (currentQueueIndex + 1) % shuffledQueue.length;
      nextIndex = shuffledQueue[nextQueueIndex];
    } else {
      // Normal sequential playback
      nextIndex = (currentSongIndex + 1) % playlist.length;
    }

    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  }, [playlist, currentSongIndex, isShuffle, shuffledQueue]);

  const prevSong = useCallback(() => {
    if (!playlist.length) return;

    let prevIndex;
    if (isShuffle && shuffledQueue.length > 0) {
      const currentQueueIndex = shuffledQueue.indexOf(currentSongIndex);
      const prevQueueIndex = (currentQueueIndex - 1 + shuffledQueue.length) % shuffledQueue.length;
      prevIndex = shuffledQueue[prevQueueIndex];
    } else {
      prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    }

    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  }, [playlist, currentSongIndex, isShuffle, shuffledQueue]);

  // We use a Ref for nextSong to ensure the event listener always has the latest function 
  // without needing to remove/add listeners on every render.
  const nextSongRef = useRef(nextSong);
  useEffect(() => { nextSongRef.current = nextSong; }, [nextSong]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      localStorage.setItem("vibe_time", audio.currentTime);
    };

    const handleLoadedMetadata = () => setDuration(audio.duration);
    
    // when song ends, call the latest nextSong function
    const handleEnded = () => nextSongRef.current();

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore shortcuts if user is typing in a form
      if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

      const audio = audioRef.current;
      if (!audio) return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          if (audio.src) setIsPlaying((prev) => !prev);
          break;
        case "ArrowRight":
          audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
          setProgress(audio.currentTime);
          break;
        case "ArrowLeft":
          audio.currentTime = Math.max(0, audio.currentTime - 5);
          setProgress(audio.currentTime);
          break;
        case "ArrowUp":
          e.preventDefault();
          setVolume((prev) => Math.min(1, prev + 0.1));
          break;
        case "ArrowDown":
          e.preventDefault();
          setVolume((prev) => Math.max(0, prev - 0.1));
          break;
        case "KeyM":
          setVolume((prev) => (prev > 0 ? 0 : 1));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // primary function to start a new playlist
  const playPlaylist = (songs, startIndex, autoPlay = true) => {
    setPlaylist(songs);
    setCurrentSongIndex(startIndex);
    setIsPlaying(autoPlay);
    setMiniPlayerVisible(true);
    initialTimeRef.current = 0;

    if (isShuffle) {
      setShuffledQueue(generateShuffleQueue(songs.length));
    }
  };

  const playPause = () => setIsPlaying(!isPlaying);

  const seekSong = (time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setProgress(time);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        playlist,
        currentSongIndex,
        isPlaying,
        miniPlayerVisible,
        duration,
        progress,
        playPlaylist,
        playPause,
        nextSong,
        prevSong,
        setMiniPlayerVisible,
        isShuffle, 
        toggleShuffle,
        seekSong,
        volume,
        setVolume
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};