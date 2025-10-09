import React, { useState } from "react";

const ArtistModal = ({ artist, onClose }) => {
  const [currentSong, setCurrentSong] = useState(null);

  if (!artist) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-black/90 rounded-2xl p-6 w-11/12 md:w-3/4 max-h-[90vh] overflow-y-auto relative">
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex flex-col items-center mb-4">
          <img
            src={artist.image}
            alt={artist.name}
            className="h-32 w-32 rounded-full mb-2 object-cover"
          />
          <h2 className="text-2xl font-bold text-white">{artist.name}</h2>
        </div>
        <div className="flex flex-col gap-2">
          {artist.songs.map((song, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-2 rounded-lg hover:bg-white/10 cursor-pointer"
              onClick={() => setCurrentSong(song.path)}
            >
              <span className="text-white">{song.name}</span>
              <button className="text-cyan-400 hover:text-cyan-300">Play</button>
            </div>
          ))}
        </div>
        {currentSong && (
          <audio
            src={currentSong}
            controls
            autoPlay
            className="w-full mt-4 rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default ArtistModal;
