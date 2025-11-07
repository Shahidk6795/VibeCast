import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import yoYoImg from "../../assets/images/yo_yo_honey.jpg";
import BlueEyesImg from "../../assets/images/Blue_Eyes.jpg";
import DesiKalakaarImg from "../../assets/images/Desi_Kalakaar.jpg";
import LungiDanceImg from "../../assets/images/Lungi_Dance.jpg";
import CharBottleImg from "../../assets/images/Char_Bottle.jpg";
import BrownRangImg from "../../assets/images/Brown_Rang.jpg";
import AngrejiBeatImg from "../../assets/images/Angreji_Beat.jpg";
import PartyAllNightImg from "../../assets/images/Party_All_Night.jpg";
import AaoRajaImg from "../../assets/images/Aao_Raja.jpg";
import HighHeelsImg from "../../assets/images/High_Heels.jpg";
import LocaaImg from "../../assets/images/Locaa.jpg";
import MakhnaImg from "../../assets/images/Makhna.jpg";
import DilChoriImg from "../../assets/images/Dil_Chori.jpg";
import OneBottleDownImg from "../../assets/images/One_Bottle_Down.jpg";

import BlueEyes from "../../assets/music/Blue_Eyes.mp3";
import DesiKalakaar from "../../assets/music/Desi_Kalakaar.mp3";
import LungiDance from "../../assets/music/Lungi_Dance.mp3";
import CharBottle from "../../assets/music/Char_Bottle.mp3";
import BrownRang from "../../assets/music/Brown_Rang.mp3";
import AngrejiBeat from "../../assets/music/Angreji_Beat.mp3";
import PartyAllNight from "../../assets/music/Party_All_Night.mp3";
import AaoRaja from "../../assets/music/Aao_Raja.mp3";
import HighHeels from "../../assets/music/High_Heels.mp3";
import Locaa from "../../assets/music/Locaa.mp3";
import Makhna from "../../assets/music/Makhna.mp3";
import DilChori from "../../assets/music/Dil_Chori.mp3";
import OneBottleDown from "../../assets/music/One_Bottle_Down.mp3";


const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const YoYoHoney = () => {
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
    { name: "Blue Eyes", path: BlueEyes, image: BlueEyesImg, durationDisplay: "3:43", artist: "Yo Yo Honey Singh" },
    { name: "Desi Kalakaar", path: DesiKalakaar, image: DesiKalakaarImg, durationDisplay: "4:00", artist: "Yo Yo Honey Singh" },
    { name: "Lungi Dance", path: LungiDance, image: LungiDanceImg, durationDisplay: "3:58", artist: "Yo Yo Honey Singh" },
    { name: "Char Bottle Vodka", path: CharBottle, image: CharBottleImg, durationDisplay: "4:09", artist: "Yo Yo Honey Singh" },
    { name: "Brown Rang", path: BrownRang, image: BrownRangImg, durationDisplay: "3:42", artist: "Yo Yo Honey Singh" },
    { name: "Angreji Beat", path: AngrejiBeat, image: AngrejiBeatImg, durationDisplay: "3:58", artist: "Yo Yo Honey Singh, Gippy Grewal" },
    { name: "Party All Night", path: PartyAllNight, image: PartyAllNightImg, durationDisplay: "3:54", artist: "Yo Yo Honey Singh" },
    { name: "Aao Raja", path: AaoRaja, image: AaoRajaImg, durationDisplay: "4:34", artist: "Yo Yo Honey Singh, Neha Kakkar" },
    { name: "High Heels", path: HighHeels, image: HighHeelsImg, durationDisplay: "3:32", artist: "Yo Yo Honey Singh, Jaz Dhami" },
    { name: "Loca", path: Locaa, image: LocaaImg, durationDisplay: "3:30", artist: "Yo Yo Honey Singh" },
    { name: "Makhna", path: Makhna, image: MakhnaImg, durationDisplay: "3:25", artist: "Yo Yo Honey Singh, Neha Kakkar, Singhsta" },
    { name: "Dil Chori", path: DilChori, image: DilChoriImg, durationDisplay: "3:47", artist: "Yo Yo Honey Singh, Simar Kaur, Ishers" },
    { name: "One Bottle Down", path: OneBottleDown, image: OneBottleDownImg, durationDisplay: "3:45", artist: "Yo Yo Honey Singh" },
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
            src={yoYoImg}
            alt="Yo Yo Honey Singh"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Yo Yo Honey Singh</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              13 songs • The best collection of his hit tracks.
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

export default YoYoHoney;