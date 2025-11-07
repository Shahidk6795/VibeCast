import React, { useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext"; 

import pritamImg from "../../assets/images/pritam.jpeg";
import YeTuneKyaKiyaImg from "../../assets/images/Ye_Tune_Kya_Kiya.jpg";
import JaraSaImg from "../../assets/images/Jara_Sa.jpg";
import TumSeHeeImg from "../../assets/images/Tum_Se_Hee.jpg";
import ShayadImg from "../../assets/images/Shayad.jpg";
import ItneSeBaatHaiImg from "../../assets/images/Itne_Se_Baat_Hai.jpg";
import TeraHoneLagaHuImg from "../../assets/images/Tera_Hone_Laga_Hu.jpg";
import TerePyaarMeImg from "../../assets/images/Tere_Pyaar_Me.jpg";
import WhatJhumkaImg from "../../assets/images/What_Jhumka.jpg";
import LutPutGayaImg from "../../assets/images/Lut_Put_Gaya.jpg";
import TuEMeraImg from "../../assets/images/Tu_E_Mera.jpg";
import KesariyaImg from "../../assets/images/Kesariya.jpg";
import O_MahiImg from "../../assets/images/O_Mahi.jpg";
import KhairiyatImg from "../../assets/images/Khairiyat.jpg";
import TuChahiyeImg from "../../assets/images/Tu_Chahiye.jpg";
import MaiRangSharbatonKaImg from "../../assets/images/Mai_Rang_Sharbaton_Ka.jpg";

import YeTuneKyaKiya from "../../assets/music/Ye_Tune_Kya_Kiya.mp3";
import JaraSa from "../../assets/music/Jara_Sa.mp3";
import TumSeHee from "../../assets/music/Tum_Se_Hee.mp3";
import Shayad from "../../assets/music/Shayad.mp3";
import ItneSeBaatHai from "../../assets/music/Itne_Se_Baat_Hai.mp3";
import TeraHoneLagaHu from "../../assets/music/Tera_Hone_Laga_Hu.mp3";
import TerePyaarMe from "../../assets/music/Tere_Pyaar_Me.mp3";
import WhatJhumka from "../../assets/music/What_Jhumka.mp3";
import LutPutGaya from "../../assets/music/Lut_Put_Gaya.mp3";
import TuEMera from "../../assets/music/Tu_E_Mera.mp3";
import Kesariya from "../../assets/music/Kesariya.mp3";
import O_Mahi from "../../assets/music/O_Mahi.mp3";
import Khairiyat from "../../assets/music/Khairiyat.mp3";
import TuChahiye from "../../assets/music/Tu_Chahiye.mp3";
import MaiRangSharbatonKa from "../../assets/music/Mai_Rang_Sharbaton_Ka.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Pritam = () => {
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
    { name: "Ye tune kya kiya", path: YeTuneKyaKiya, image: YeTuneKyaKiyaImg, durationDisplay: "4:03", artist: "Pritam, Javed Bashir" },
    { name: "Jara sa", path: JaraSa, image: JaraSaImg, durationDisplay: "3:45", artist: "Pritam, KK" },
    { name: "Tum se hee", path: TumSeHee, image: TumSeHeeImg, durationDisplay: "4:12", artist: "Pritam, Mohit Chauhan" },
    { name: "Shayad", path: Shayad, image: ShayadImg, durationDisplay: "3:58", artist: "Pritam, Arijit Singh" },
    { name: "Itne se baat hai", path: ItneSeBaatHai, image: ItneSeBaatHaiImg, durationDisplay: "3:36", artist: "Pritam, Arijit Singh, Antara Mitra" },
    { name: "Tera hone laga hu", path: TeraHoneLagaHu, image: TeraHoneLagaHuImg, durationDisplay: "4:05", artist: "Pritam, Atif Aslam, Alisha Chinai" },
    { name: "Tere pyaar me", path: TerePyaarMe, image: TerePyaarMeImg, durationDisplay: "3:50", artist: "Pritam, Arijit Singh" },
    { name: "What jhumka", path: WhatJhumka, image: WhatJhumkaImg, durationDisplay: "3:30", artist: "Pritam, Arijit Singh, Jonita Gandhi" },
    { name: "Lut Put Gaya", path: LutPutGaya, image: LutPutGayaImg, durationDisplay: "3:40", artist: "Pritam, Arijit Singh" },
    { name: "Tu Hi Mera", path: TuEMera, image: TuEMeraImg, durationDisplay: "4:00", artist: "Pritam, Shafqat Amanat Ali" },
    { name: "Kesariya", path: Kesariya, image: KesariyaImg, durationDisplay: "3:35", artist: "Pritam, Arijit Singh" },
    { name: "O mahi", path: O_Mahi, image: O_MahiImg, durationDisplay: "3:55", artist: "Pritam, Arijit Singh" },
    { name: "Khairiyat", path: Khairiyat, image: KhairiyatImg, durationDisplay: "4:20", artist: "Pritam, Arijit Singh" },
    { name: "Tu chahiye", path: TuChahiye, image: TuChahiyeImg, durationDisplay: "3:48", artist: "Pritam, Atif Aslam" },
    { name: "Mai rang sharbaton ka", path: MaiRangSharbatonKa, image: MaiRangSharbatonKaImg, durationDisplay: "4:10", artist: "Pritam, Atif Aslam, Chinmayi Sripada" },
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
            src={pritamImg}
            alt="Pritam"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Pritam</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              15 songs • Bollywood’s soul of melody.
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

export default Pritam;