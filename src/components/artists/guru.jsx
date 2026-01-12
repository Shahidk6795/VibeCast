import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import guruImg from "../../assets/images/guru.jpeg";

import HighRatedGabruImg from "../../assets/images/High_Rated_Gabru.jpg";
import LahoreImg from "../../assets/images/Lahore.jpg";
import SuitSuitImg from "../../assets/images/Suit_Suit.jpg";
import PatolaImg from "../../assets/images/Patola.jpg";
import BanJaRaniImg from "../../assets/images/Ban_Ja_Rani.jpg";
import MadeInIndiaImg from "../../assets/images/Made_In_India.jpg";
import IshareTereImg from "../../assets/images/Ishare_Tere.jpg";
import SlowlySlowlyImg from "../../assets/images/Slowly_Slowly.jpg";
import NaachMeriRaniImg from "../../assets/images/Naach_Meri_Rani.jpg";
import DanceMeriRaniImg from "../../assets/images/Dance_Meri_Rani.jpg";
import SurmaSurmaImg from "../../assets/images/Surma_Surma.jpg";
import MorniBankeImg from "../../assets/images/Morni_Banke.jpg";
import KaunNachdiImg from "../../assets/images/Kaun_Nachdi.jpg";
import BabyGirlImg from "../../assets/images/Baby_Girl.jpg";
import LagdiLahoreDiImg from "../../assets/images/Lagdi_Lahore_Di.jpg";

import HighRatedGabru from "../../assets/music/High_Rated_Gabru.mp3";
import Lahore from "../../assets/music/Lahore.mp3";
import SuitSuit from "../../assets/music/Suit_Suit.mp3";
import Patola from "../../assets/music/Patola.mp3";
import BanJaRani from "../../assets/music/Ban_Ja_Rani.mp3";
import MadeInIndia from "../../assets/music/Made_In_India.mp3";
import IshareTere from "../../assets/music/Ishare_Tere.mp3";
import SlowlySlowly from "../../assets/music/Slowly_Slowly.mp3";
import NaachMeriRani from "../../assets/music/Naach_Meri_Rani.mp3";
import DanceMeriRani from "../../assets/music/Dance_Meri_Rani.mp3";
import SurmaSurma from "../../assets/music/Surma_Surma.mp3";
import MorniBanke from "../../assets/music/Morni_Banke.mp3";
import KaunNachdi from "../../assets/music/Kaun_Nachdi.mp3";
import BabyGirl from "../../assets/music/Baby_Girl.mp3";
import LagdiLahoreDi from "../../assets/music/Lagdi_Lahore_Di.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const GuruRandhawa = () => {
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const songs = [
    { name: "High Rated Gabru", path: HighRatedGabru, image: HighRatedGabruImg, durationDisplay: "3:34", artist: "Guru Randhawa" },
    { name: "Lahore", path: Lahore, image: LahoreImg, durationDisplay: "3:16", artist: "Guru Randhawa" },
    { name: "Suit Suit", path: SuitSuit, image: SuitSuitImg, durationDisplay: "3:10", artist: "Guru Randhawa, Arjun" },
    { name: "Patola", path: Patola, image: PatolaImg, durationDisplay: "3:06", artist: "Guru Randhawa, Bohemia" },
    { name: "Ban Ja Rani", path: BanJaRani, image: BanJaRaniImg, durationDisplay: "3:46", artist: "Guru Randhawa" },
    { name: "Made in India", path: MadeInIndia, image: MadeInIndiaImg, durationDisplay: "3:25", artist: "Guru Randhawa" },
    { name: "Ishare Tere", path: IshareTere, image: IshareTereImg, durationDisplay: "3:10", artist: "Guru Randhawa, Dhvani Bhanushali" },
    { name: "Slowly Slowly", path: SlowlySlowly, image: SlowlySlowlyImg, durationDisplay: "3:26", artist: "Guru Randhawa, Pitbull" },
    { name: "Naach Meri Rani", path: NaachMeriRani, image: NaachMeriRaniImg, durationDisplay: "3:30", artist: "Guru Randhawa, Nikhita Gandhi" },
    { name: "Dance Meri Rani", path: DanceMeriRani, image: DanceMeriRaniImg, durationDisplay: "3:42", artist: "Guru Randhawa, Zahrah S Khan" },
    { name: "Surma Surma", path: SurmaSurma, image: SurmaSurmaImg, durationDisplay: "3:24", artist: "Guru Randhawa, Jay Sean" },
    { name: "Morni Banke", path: MorniBanke, image: MorniBankeImg, durationDisplay: "3:18", artist: "Guru Randhawa, Neha Kakkar" },
    { name: "Kaun Nachdi", path: KaunNachdi, image: KaunNachdiImg, durationDisplay: "3:02", artist: "Guru Randhawa, Neeti Mohan" },
    { name: "Baby Girl", path: BabyGirl, image: BabyGirlImg, durationDisplay: "3:23", artist: "Guru Randhawa, Dhvani Bhanushali" },
    { name: "Lagdi Lahore Di", path: LagdiLahoreDi, image: LagdiLahoreDiImg, durationDisplay: "3:35", artist: "Guru Randhawa, Tulsi Kumar" },
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
          /* Electric Purple for Guru Randhawa */
          background-image: linear-gradient(to bottom, #7c3aed, #121212);
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
            src={guruImg}
            alt="Guru Randhawa"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Guru Randhawa</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              15 songs • High Rated Gabru.
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

export default GuruRandhawa;