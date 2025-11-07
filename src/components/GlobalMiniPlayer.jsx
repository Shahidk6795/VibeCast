import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContext";

const GlobalMiniPlayer = () => {
  const {
    playlist,
    currentSongIndex,
    isPlaying,
    playPause,
    nextSong,
    prevSong,
    progress,
    duration,
    miniPlayerVisible, // This is not used in the JSX, but kept from your code
  } = useContext(PlayerContext);

  // ✅ Fix 1: Ensure window focuses when mini player becomes visible (so space works instantly)
  useEffect(() => {
    if (miniPlayerVisible && playlist.length) {
      window.focus();
    }
  }, [miniPlayerVisible, playlist]);

  if (!playlist.length) return null;

  const formatTime = (sec) => {
    if (!sec) return "0:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // Get the current song object to avoid repeating playlist[currentSongIndex]
  const currentSong = playlist[currentSongIndex];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-gray-900/95 backdrop-blur-md z-50 flex items-center justify-between px-6 shadow-2xl border-t border-gray-800">
      {/* Left: Song Info */}
      <div className="flex items-center w-1/4 min-w-[200px]">
        <img
          src={currentSong.image}
          alt={currentSong.name}
          className="w-14 h-14 object-cover rounded mr-4 shadow-lg"
        />
        <div className="flex flex-col truncate">
          <span className="font-semibold text-white truncate">
            {currentSong.name}
          </span>
          <span className="text-xs text-gray-400">
            {currentSong.artist || "Unknown Artist"}
          </span>
        </div>
      </div>

      {/* Center: Controls + Progress */}
      <div className="flex flex-col items-center w-1/2 max-w-lg">
        <div className="flex gap-6 mb-1 items-center">
          {/* Prev Button */}
          <button
            onClick={prevSong}
            className="text-gray-300 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6z" />
            </svg>
          </button>

          {/* ✅ Spotify Green Play/Pause Button */}
          <button
            onClick={playPause}
            className="w-10 h-10 rounded-full bg-[#1db954] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Next Button */}
          <button
            onClick={nextSong}
            className="text-gray-300 hover:text-white transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6h2v12h-2zm-8.5 6L17 6v12l-8.5-6z" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full flex items-center gap-2 text-xs text-gray-400">
          <span>{formatTime(progress)}</span>
          <div className="w-full h-1 bg-gray-700 rounded-full">
            <div
              className="h-1 bg-[#1db954] rounded-full"
              style={{ width: `${(progress / (duration || 1)) * 100}%` }} // Added || 1 to prevent NaN
            ></div>
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right: Empty Placeholder (for future volume / queue) */}
      <div className="w-1/4 flex justify-end items-center pr-4"></div>
    </div>
  );
};

export default GlobalMiniPlayer;