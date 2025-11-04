import React, { createContext, useState, useRef, useEffect, useCallback } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [miniPlayerVisible, setMiniPlayerVisible] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(new Audio());

  // --- Centralized Logic ---

  // 1. This effect loads the song when the playlist or index changes
  useEffect(() => {
    if (playlist.length > 0 && playlist[currentSongIndex]) {
      const song = playlist[currentSongIndex];
      audioRef.current.src = song.path;
      // We don't play here, we just load
    }
  }, [playlist, currentSongIndex]);

  // 2. This effect handles playing or pausing when `isPlaying` state changes
  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      // We wait for the 'canplay' event to ensure the song is ready
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.error("Audio playback failed:", e));
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, playlist, currentSongIndex]); // Re-run if song changes while playing

  // 3. This effect handles audio event listeners (progress, duration, ending)
  const nextSong = useCallback(() => {
    if (!playlist.length) return;
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); // Always play on next
  }, [playlist, currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => setProgress(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", nextSong); // Call the 'nextSong' function

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", nextSong);
    };
  }, [nextSong]); // Only re-attach if nextSong function changes

  // --- Player Control Functions ---

  // ✅ This function now *only* sets the state.
  // The useEffects above will handle the rest.
  const playPlaylist = (songs, startIndex, autoPlay = true) => { // <-- Default to TRUE
    setPlaylist(songs);
    setCurrentSongIndex(startIndex);
    setIsPlaying(autoPlay); // Set the *intent* to play
    setMiniPlayerVisible(true);
  };

  // ✅ This function just toggles the isPlaying state.
  const playPause = () => {
    if (!audioRef.current.src) {
      // If no song is loaded, play the first from the current list
      if (playlist.length > 0) {
        setIsPlaying(true);
      }
      return;
    }
    setIsPlaying(!isPlaying);
  };

  const prevSong = () => {
    if (!playlist.length) return;
    const prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true); // Always play on prev
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
        nextSong, // 'nextSong' is now consistent
        prevSong,
        setMiniPlayerVisible,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};