import React, { createContext, useState, useRef, useEffect } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [miniPlayerVisible, setMiniPlayerVisible] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => setProgress(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (playlist.length) {
        const nextIndex = (currentSongIndex + 1) % playlist.length;
        setCurrentSongIndex(nextIndex);
        audio.src = playlist[nextIndex].path;
        audio.play();
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [playlist, currentSongIndex]);

  // ✅ show MiniPlayer on artist click, no auto play
  const playPlaylist = (songs, startIndex, autoPlay = false) => {
    setPlaylist(songs);
    setCurrentSongIndex(startIndex);
    setMiniPlayerVisible(true);

    const audio = audioRef.current;
    audio.src = songs[startIndex].path;

    if (autoPlay) {
      audio.play();
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const playPause = () => {
    const audio = audioRef.current;
    if (!audio.src) return;

    if (isPlaying) audio.pause();
    else audio.play();

    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    if (!playlist.length) return;
    const nextIndex = (currentSongIndex + 1) % playlist.length;
    setCurrentSongIndex(nextIndex);
    const audio = audioRef.current;
    audio.src = playlist[nextIndex].path;
    audio.play();
    setIsPlaying(true);
  };

  const prevSong = () => {
    if (!playlist.length) return;
    const prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(prevIndex);
    const audio = audioRef.current;
    audio.src = playlist[prevIndex].path;
    audio.play();
    setIsPlaying(true);
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
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
