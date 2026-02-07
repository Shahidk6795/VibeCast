import React, { createContext, useState, useRef, useEffect, useCallback } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  
  const [playlist, setPlaylist] = useState(() => {
      const saved = localStorage.getItem("vibe_playlist");
      return saved ? JSON.parse(saved) : [];
  });

  const [currentSongIndex, setCurrentSongIndex] = useState(() => {
      const saved = localStorage.getItem("vibe_index");
      return saved ? parseInt(saved) : 0;
  });

  const [initialTime, setInitialTime] = useState(() => {
      const saved = localStorage.getItem("vibe_time");
      return saved ? parseFloat(saved) : 0;
  });

  const [volume, setVolume] = useState(() => {
      const saved = localStorage.getItem("vibe_volume");
      return saved ? parseFloat(saved) : 1;
  });

  const [isPlaying, setIsPlaying] = useState(false); 
  const [miniPlayerVisible, setMiniPlayerVisible] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const [isShuffle, setIsShuffle] = useState(false);
  const [shuffledQueue, setShuffledQueue] = useState([]);
  
  const audioRef = useRef(new Audio());

  useEffect(() => {
    localStorage.setItem("vibe_playlist", JSON.stringify(playlist));
    localStorage.setItem("vibe_index", currentSongIndex);
    localStorage.setItem("vibe_volume", volume);
  }, [playlist, currentSongIndex, volume]);

  useEffect(() => {
    if (playlist.length > 0 && playlist[currentSongIndex]) {
      const song = playlist[currentSongIndex];
      const audio = audioRef.current;

      if (audio.src !== song.path) {
          audio.src = song.path;
          audio.load();
          
          if (initialTime > 0) {
              audio.currentTime = initialTime;
              setInitialTime(0); 
          } else {
              audio.currentTime = 0;
          }

          if (isPlaying) {
              const playPromise = audio.play();
              if (playPromise !== undefined) {
                  playPromise.catch(e => console.log("Playback interrupted:", e));
              }
          }
      }
    }
  }, [playlist, currentSongIndex, initialTime, isPlaying]); 

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
        if (audio.paused) {
             const playPromise = audio.play();
             if (playPromise !== undefined) {
                 playPromise.catch(e => console.error("Play error:", e));
             }
        }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
        return;
      }

      const audio = audioRef.current;
      if (!audio) return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          if (audio.src) setIsPlaying(prev => !prev);
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
          setVolume(prev => Math.min(1, prev + 0.1));
          break;

        case "ArrowDown":
          e.preventDefault();
          setVolume(prev => Math.max(0, prev - 0.1));
          break;

        case "KeyM":
          setVolume(prev => (prev > 0 ? 0 : 1));
          break;
          
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []); 

  const generateShuffleQueue = (length) => {
    const indices = Array.from({ length }, (_, i) => i);
    for (let i = length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  };

  const nextSong = useCallback(() => {
    if (!playlist.length) return;

    let nextIndex;
    if (isShuffle && shuffledQueue.length > 0) {
        const currentQueueIndex = shuffledQueue.indexOf(currentSongIndex);
        const nextQueueIndex = (currentQueueIndex + 1) % shuffledQueue.length;
        nextIndex = shuffledQueue[nextQueueIndex];
    } else {
        nextIndex = (currentSongIndex + 1) % playlist.length;
    }

    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
    setInitialTime(0);
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
    setInitialTime(0);
  }, [playlist, currentSongIndex, isShuffle, shuffledQueue]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
        setProgress(audio.currentTime);
        localStorage.setItem("vibe_time", audio.currentTime);
    };

    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", nextSong);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", nextSong);
    };
  }, [nextSong]);

  const playPlaylist = (songs, startIndex, autoPlay = true) => {
    setPlaylist(songs);
    setCurrentSongIndex(startIndex);
    setIsPlaying(autoPlay);
    setMiniPlayerVisible(true);
    setInitialTime(0);

    if (isShuffle) {
        setShuffledQueue(generateShuffleQueue(songs.length));
    }
  };

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => {
    if (!isShuffle) {
        setShuffledQueue(generateShuffleQueue(playlist.length));
    } else {
        setShuffledQueue([]);
    }
    setIsShuffle((prev) => !prev);
  };

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