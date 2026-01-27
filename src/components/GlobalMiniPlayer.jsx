import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { Shuffle, SkipBack, Play, Pause, SkipForward, Volume2, VolumeX } from "lucide-react"; // I recommend installing lucide-react for cleaner icons

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
    miniPlayerVisible,
    seekSong,
    isShuffle,
    toggleShuffle,
    volume,
    setVolume
  } = useContext(PlayerContext);

  useEffect(() => {
    if (miniPlayerVisible && playlist.length) {
      window.focus();
    }
  }, [miniPlayerVisible, playlist]);

  if (!playlist.length) return null;

  const formatTime = (sec) => {
    if (!sec || isNaN(sec)) return "0:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const currentSong = playlist[currentSongIndex];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black/95 backdrop-blur-md z-50 flex items-center justify-between px-6 shadow-2xl border-t border-gray-800">
      
      <div className="hidden md:flex items-center w-[30%] min-w-[200px]">
        <img
          src={currentSong.image}
          alt={currentSong.name}
          className="w-14 h-14 object-cover rounded mr-4 shadow-lg animate-pulse-slow"
        />
        <div className="flex flex-col truncate">
          <span className="font-semibold text-white truncate hover:underline cursor-pointer">
            {currentSong.name}
          </span>
          <span className="text-xs text-gray-400 hover:text-white transition">
            {currentSong.artist || "Unknown Artist"}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center w-full md:w-[40%] max-w-lg">
        
        <div className="flex items-center gap-6 mb-2">
          <button 
            onClick={toggleShuffle} 
            className={`transition ${isShuffle ? "text-[#1db954]" : "text-gray-400 hover:text-white"}`}
            title="Shuffle"
          >
            <Shuffle className="w-4 h-4" />
          </button>

          <button onClick={prevSong} className="text-gray-300 hover:text-white transition">
            <SkipBack className="w-5 h-5" fill="currentColor" />
          </button>

          <button
            onClick={playPause}
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          <button onClick={nextSong} className="text-gray-300 hover:text-white transition">
            <SkipForward className="w-5 h-5" fill="currentColor" />
          </button>
        </div>

        <div className="w-full flex items-center gap-2 text-xs text-gray-400 font-mono">
          <span className="w-10 text-right">{formatTime(progress)}</span>
          
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={progress}
            onChange={(e) => seekSong(Number(e.target.value))}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-[#1db954] hover:h-1.5 transition-all"
          />
          
          <span className="w-10">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-end w-[30%] pr-4 gap-2">
        <button onClick={() => setVolume(volume === 0 ? 1 : 0)}>
           {volume === 0 ? (
             <VolumeX className="w-5 h-5 text-gray-400" />
           ) : (
             <Volume2 className="w-5 h-5 text-gray-400" />
           )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white hover:accent-[#1db954]"
        />
      </div>

    </div>
  );
};

export default GlobalMiniPlayer;