import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import shreyaImg from "../../assets/images/shreya.jpeg";

import TereBinaImg from "../../assets/images/Tere_Bina.jpg";
import PyaarKiEkKahaniImg from "../../assets/images/Pyaar_Ki_Ek_Kahani.jpg";
import AgarTumMilJaoImg from "../../assets/images/Agar_Tum_Mil_Jao.jpg";
import SaansImg from "../../assets/images/Saans.jpg";
import BalmaImg from "../../assets/images/Balma.jpg";
import TeriMeriImg from "../../assets/images/Teri_Meri.jpg";
import NagadaSangDholImg from "../../assets/images/Nagada_Sang_Dhol.jpg";
import TeriOreImg from "../../assets/images/Teri_Ore.jpg";
import SaathiyaImg from "../../assets/images/Saathiya.jpg";
import ChikniChameliImg from "../../assets/images/Chikni_Chameli.jpg";
import DeewaniMastaniImg from "../../assets/images/Deewani_Mastani.jpg";
import SunRahaHaiImg from "../../assets/images/Sun_Raha_Hai.jpg";
import ManwaLaageImg from "../../assets/images/Manwa_Laage.jpg";
import KaiseMujheImg from "../../assets/images/Kaise_Mujhe.jpg";
import TereMastMastImg from "../../assets/images/Tere_Mast_Mast_Do_Nain.jpg";
import DagabaazReImg from "../../assets/images/Dagabaaz_Re.jpg";

import TereBina from "../../assets/music/Tere_Bina.mp3";
import PyaarKiEkKahani from "../../assets/music/Pyaar_Ki_Ek_Kahani.mp3";
import AgarTumMilJao from "../../assets/music/Agar_Tum_Mil_Jao.mp3";
import Saans from "../../assets/music/Saans.mp3";
import Balma from "../../assets/music/Balma.mp3";
import TeriMeri from "../../assets/music/Teri_Meri.mp3";
import NagadaSangDhol from "../../assets/music/Nagada_Sang_Dhol.mp3";
import TeriOre from "../../assets/music/Teri_Ore.mp3";
import Saathiya from "../../assets/music/Saathiya.mp3";
import ChikniChameli from "../../assets/music/Chikni_Chameli.mp3";
import DeewaniMastani from "../../assets/music/Deewani_Mastani.mp3";
import SunRahaHai from "../../assets/music/Sun_Raha_Hai.mp3";
import ManwaLaage from "../../assets/music/Manwa_Laage.mp3";
import KaiseMujhe from "../../assets/music/Kaise_Mujhe.mp3";
import TereMastMast from "../../assets/music/Tere_Mast_Mast_Do_Nain.mp3";
import DagabaazRe from "../../assets/music/Dagabaaz_Re.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const ShreyaGhoshal = () => {
  const navigate = useNavigate();

  const {
    playPlaylist,
    playPause,
    isPlaying,
    currentSongIndex,
    playlist,
    miniPlayerVisible,
    duration,
    progress,
    setMiniPlayerVisible,
  } = useContext(PlayerContext);

  const songs = [
    { name: "Tere Bina", path: TereBina, image: TereBinaImg, durationDisplay: "4:05", artist: "A.R. Rahman, Shreya Ghoshal" },
    { name: "Pyaar Ki Ek Kahani", path: PyaarKiEkKahani, image: PyaarKiEkKahaniImg, durationDisplay: "4:30", artist: "Sonu Nigam, Shreya Ghoshal" },
    { name: "Agar Tum Mil Jao", path: AgarTumMilJao, image: AgarTumMilJaoImg, durationDisplay: "4:40", artist: "Shreya Ghoshal" },
    { name: "Saans", path: Saans, image: SaansImg, durationDisplay: "5:23", artist: "Shreya Ghoshal, Mohit Chauhan" },
    { name: "Balma", path: Balma, image: BalmaImg, durationDisplay: "3:30", artist: "Shreya Ghoshal, Sriram" },
    { name: "Teri Meri", path: TeriMeri, image: TeriMeriImg, durationDisplay: "5:20", artist: "Rahat Fateh Ali Khan, Shreya Ghoshal" },
    { name: "Nagada Sang Dhol", path: NagadaSangDhol, image: NagadaSangDholImg, durationDisplay: "4:33", artist: "Shreya Ghoshal, Osman Mir" },
    { name: "Teri Ore", path: TeriOre, image: TeriOreImg, durationDisplay: "5:38", artist: "Rahat Fateh Ali Khan, Shreya Ghoshal" },
    { name: "Saathiya", path: Saathiya, image: SaathiyaImg, durationDisplay: "5:12", artist: "Ajay-Atul, Shreya Ghoshal" },
    { name: "Chikni Chameli", path: ChikniChameli, image: ChikniChameliImg, durationDisplay: "5:03", artist: "Shreya Ghoshal" },
    { name: "Deewani Mastani", path: DeewaniMastani, image: DeewaniMastaniImg, durationDisplay: "5:40", artist: "Shreya Ghoshal" },
    { name: "Sun Raha Hai", path: SunRahaHai, image: SunRahaHaiImg, durationDisplay: "6:30", artist: "Shreya Ghoshal" },
    { name: "Manwa Laage", path: ManwaLaage, image: ManwaLaageImg, durationDisplay: "4:30", artist: "Arijit Singh, Shreya Ghoshal" },
    { name: "Kaise Mujhe", path: KaiseMujhe, image: KaiseMujheImg, durationDisplay: "6:01", artist: "Benny Dayal, Shreya Ghoshal" },
    { name: "Tere Mast Mast Do Nain", path: TereMastMast, image: TereMastMastImg, durationDisplay: "5:59", artist: "Rahat Fateh Ali Khan, Shreya Ghoshal" },
    { name: "Dagabaaz Re", path: DagabaazRe, image: DagabaazReImg, durationDisplay: "4:48", artist: "Rahat Fateh Ali Khan, Shreya Ghoshal" },
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
          background-image: linear-gradient(to bottom, #ec4899, #121212);
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
            src={shreyaImg}
            alt="Shreya Ghoshal"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Shreya Ghoshal</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              16 songs • Melody Queen of India.
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

export default ShreyaGhoshal;