import React, { createContext, useState, useRef, useEffect, useCallback } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [miniPlayerVisible, setMiniPlayerVisible] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  
  const [volume, setVolume] = useState(1); 

  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (playlist.length > 0 && playlist[currentSongIndex]) {
      const song = playlist[currentSongIndex];
      audioRef.current.src = song.path;
      audioRef.current.load();
    }
  }, [playlist, currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.error("Audio playback failed:", e));
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, playlist, currentSongIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const nextSong = useCallback(() => {
    if (!playlist.length) return;

    let nextIndex;
    if (isShuffle) {
      if (playlist.length === 1) {
        nextIndex = 0;
      } else {
        do {
          nextIndex = Math.floor(Math.random() * playlist.length);
        } while (nextIndex === currentSongIndex);
      }
    } else {
      nextIndex = (currentSongIndex + 1) % playlist.length;
    }

    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  }, [playlist, currentSongIndex, isShuffle]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => setProgress(audio.currentTime);
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
  };

  const playPause = () => {
    if (!audioRef.current.src) return;
    setIsPlaying(!isPlaying);
  };

  const prevSong = () => {
    if (!playlist.length) return;
    const prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const toggleShuffle = () => {
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