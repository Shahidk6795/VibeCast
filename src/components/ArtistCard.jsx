import React, { useState, useRef, useEffect } from "react";

const ArtistCard = ({ artist }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // When song ends, play next one
    audio.onended = () => {
      const nextIndex = (currentSongIndex + 1) % artist.songs.length;
      setCurrentSongIndex(nextIndex);
      audio.src = artist.songs[nextIndex].path;
      audio.play();
    };
  }, [currentSongIndex, artist.songs]);

  const handlePlayAll = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.src = artist.songs[currentSongIndex].path;
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handlePlaySong = (index) => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentSongIndex(index);
    audio.src = artist.songs[index].path;
    audio.play();
    setIsPlaying(true);
  };

  return (
    <div className="min-w-[180px] bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-4 flex flex-col items-center justify-center text-center hover:scale-105 hover:shadow-[0_0_15px_rgb(0,255,255)] transition-transform cursor-pointer">
      <img
        src={artist.image}
        alt={artist.name}
        className="h-24 w-24 rounded-full mb-2 object-cover border-2 border-transparent hover:border-cyan-400 transition-all"
      />
      <span className="text-white/90 font-medium mb-2">{artist.name}</span>
      
      {/* Play All Button */}
      <button
        onClick={handlePlayAll}
        className="px-4 py-1 bg-cyan-500 rounded-lg text-white text-sm hover:scale-105 transition-transform mb-2"
      >
        {isPlaying ? "Pause All" : "Play All"}
      </button>

      {/* Toggle Playlist */}
      <button
        onClick={() => setShowPlaylist(!showPlaylist)}
        className="text-white/70 text-xs hover:underline mb-2"
      >
        {showPlaylist ? "Hide Playlist" : "Show Playlist"}
      </button>

      {/* Playlist */}
      {showPlaylist && (
        <div className="flex flex-col gap-1 w-full max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-black/20">
          {artist.songs.map((song, idx) => (
            <div
              key={idx}
              className={`px-2 py-1 text-white text-sm rounded cursor-pointer hover:bg-cyan-500/30 ${
                idx === currentSongIndex ? "bg-cyan-500/50" : ""
              }`}
              onClick={() => handlePlaySong(idx)}
            >
              {song.name}
            </div>
          ))}
        </div>
      )}

      <audio ref={audioRef} />
    </div>
  );
};

export default ArtistCard;
