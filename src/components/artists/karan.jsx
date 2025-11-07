import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import karanImg from "../../assets/images/karan_aujla.jpg";
import ForAReasonImg from "../../assets/images/For_A_Reason.jpg";
import ChittaKurtaImg from "../../assets/images/Chitta_Kurta.jpg";
import DontWorryImg from "../../assets/images/Dont_Worry.jpg";
import HintImg from "../../assets/images/Hint.jpg";
import JhanjarImg from "../../assets/images/Jhanjar.jpg";
import NeendeinImg from "../../assets/images/Neendein.jpg";
import GangstaImg from "../../assets/images/Gangsta.jpg";
import KyaBaatAaImg from "../../assets/images/Kya_Baat_Aa.jpg";
import SheeshImg from "../../assets/images/Sheesh.jpg";

import ForAReason from "../../assets/music/For_A_Reason.mp3";
import ChittaKurta from "../../assets/music/Chitta_Kurta.mp3";
import DontWorry from "../../assets/music/Dont_Worry.mp3";
import Hint from "../../assets/music/Hint.mp3";
import Jhanjar from "../../assets/music/Jhanjar.mp3";
import Neendein from "../../assets/music/Neendein.mp3";
import Gangsta from "../../assets/music/Gangsta.mp3";
import KyaBaatAa from "../../assets/music/Kya_Baat_Aa.mp3";
import Sheesh from "../../assets/music/Sheesh.mp3";


const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const KaranAujla = () => {
  const navigate = useNavigate();

  const {
    playPlaylist,
    playPause,
    isPlaying,
    currentSongIndex,
    playlist,
    duration,
    progress,
    setMiniPlayerVisible,
  } = useContext(PlayerContext);

  const songs = [
    { name: "For A Reason", path: ForAReason, image: ForAReasonImg, durationDisplay: "4:15", artist: "Karan Aujla" },
    { name: "Chitta Kurta", path: ChittaKurta, image: ChittaKurtaImg, durationDisplay: "3:50", artist: "Karan Aujla" },
    { name: "Don't Worry", path: DontWorry, image: DontWorryImg, durationDisplay: "4:02", artist: "Karan Aujla ft. Gurlez Akhtar" },
    { name: "Hint", path: Hint, image: HintImg, durationDisplay: "3:45", artist: "Karan Aujla" },
    { name: "Jhanjar", path: Jhanjar, image: JhanjarImg, durationDisplay: "4:10", artist: "Karan Aujla" },
    { name: "Neendein", path: Neendein, image: NeendeinImg, durationDisplay: "3:55", artist: "Karan Aujla" },
    { name: "Gangsta", path: Gangsta, image: GangstaImg, durationDisplay: "4:05", artist: "Karan Aujla" },
    { name: "Kya Baat Aa", path: KyaBaatAa, image: KyaBaatAaImg, durationDisplay: "3:50", artist: "Karan Aujla" },
    { name: "Sheesh", path: Sheesh, image: SheeshImg, durationDisplay: "3:58", artist: "Karan Aujla" },
  ];

  
  const handlePlayPause = () => {
    if (!playlist.length || playlist[0].name !== songs[0].name) {
      playPlaylist(songs, 0);
    } else {
      playPause();
    }
    setMiniPlayerVisible(true);
  };

  const selectSong = (index) => {
    playPlaylist(songs, index, true);
    setMiniPlayerVisible(true);
  };

  const goBack = () => {
    navigate("/");
  };
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        handlePlayPause();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playlist, handlePlayPause]);


  return (
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black">
      <style jsx="true">{`
        .spotify-header {
          background-image: linear-gradient(to bottom, #1db954, #121212);
        }
        .spotify-green {
          background-color: #1db954;
        }
        .clear-bg-on-hover:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .clear-bg-active {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .clear-bg-strip {
          background-color: rgba(18, 18, 18, 0.1);
        }
        .cinematic-overlay,
        .fog-layer {
          display: none;
        }
      `}</style>

      <div className="w-full h-80 pt-16 relative spotify-header z-10 shadow-lg">
        <button
          onClick={goBack}
          className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-30"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img
            src={karanImg}
            alt="Karan Aujla"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Karan Aujla</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              9 songs • The best collection of his hit tracks.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24">
        <div className="max-w-5xl mx-auto relative z-20">
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full spotify-green text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            >
              {isPlaying && playlist.length && playlist[0].name === songs[0].name ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 pl-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button className="ml-4 text-gray-400 font-semibold hover:text-white transition">
              SHUFFLE
            </button>
          </div>

          <div className="grid grid-cols-[16px_48px_1fr_60px] gap-4 py-2 border-b border-gray-700/50 text-gray-400 text-xs uppercase font-semibold mb-2 clear-bg-strip">
            <div>#</div>
            <div></div>
            <div>Title</div>
            <div className="text-right">Time</div>
          </div>

          {songs.map((song, idx) => (
            <div
              key={idx}
              onClick={() => selectSong(idx)}
              className={`grid grid-cols-[16px_48px_1fr_60px] items-center gap-4 px-2 py-2 rounded-md cursor-pointer transition duration-200 clear-bg-on-hover ${
                playlist.length && playlist[currentSongIndex]?.name === song.name
                  ? "clear-bg-active text-white"
                  : "text-gray-400"
              }`}
            >
              <div className="font-medium text-sm text-center">
                {playlist.length &&
                playlist[currentSongIndex]?.name === song.name &&
                isPlaying ? (
                  <span className="text-spotify-green">
                    <svg
                      className="w-4 h-4 mx-auto"
                      fill="#1db954"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z" />
                    </svg>
                  </span>
                ) : (
                  idx + 1
                )}
              </div>
              <img
                src={song.image}
                alt={song.name}
                className="w-12 h-12 object-cover rounded shadow-md"
              />
              <div className="flex flex-col truncate">
                <span className="text-base font-semibold truncate">
                  {song.name}
                </span>
                <span className="text-sm font-light text-gray-400">
                  {song.artist}
                </span>
              </div>
              <div className="text-right text-sm text-gray-400">
                {playlist.length &&
                playlist[currentSongIndex]?.name === song.name
                  ? formatTime(duration)
                  : song.durationDisplay}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default KaranAujla;