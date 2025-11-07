import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import emiwayImg from "../../assets/images/emiway.jpg";
import FirseMachayengeImg from "../../assets/images/Firse_Machayenge.jpg";
import CompanyImg from "../../assets/images/Company.jpg";
import KhatamHueWaandeImg from "../../assets/images/Khatam_Hue_Waande.jpg";
import MachayengeImg from "../../assets/images/Machayenge.jpg";
import GiraftaarImg from "../../assets/images/Giraftaar.jpg";
import GrindImg from "../../assets/images/Grind.jpg";
import BohtHardImg from "../../assets/images/Boht_Hard.jpg";
import JumpKarImg from "../../assets/images/Jump_Kar.jpg";
import MeraBhaiMeraBhaiImg from "../../assets/images/Mera_Bhai_Mera_Bhai.jpg";
import StillNo1Img from "../../assets/images/Still_No_1.jpg";
import GuessImg from "../../assets/images/Guess.jpg";
import DependentKauveImg from "../../assets/images/Dependent_Kauve.jpg";
import KingOfIndianHipHopImg from "../../assets/images/King_Of_Indian_Hip_Hop.jpg";
import SamjhMeAyaKyaImg from "../../assets/images/Samjh_Me_Aya_Kya.jpg";
import KadakBanImg from "../../assets/images/Kadak_Ban.jpg";

import FirseMachayenge from "../../assets/music/Firse_Machayenge.mp3";
import Company from "../../assets/music/Company.mp3";
import KhatamHueWaande from "../../assets/music/Khatam_Hue_Waande.mp3";
import Machayenge from "../../assets/music/Machayenge.mp3";
import Giraftaar from "../../assets/music/Giraftaar.mp3";
import Grind from "../../assets/music/Grind.mp3";
import BohtHard from "../../assets/music/Boht_Hard.mp3";
import JumpKar from "../../assets/music/Jump_Kar.mp3";
import MeraBhaiMeraBhai from "../../assets/music/Mera_Bhai_Mera_Bhai.mp3";
import StillNo1 from "../../assets/music/Still_No_1.mp3";
import Guess from "../../assets/music/Guess.mp3";
import DependentKauve from "../../assets/music/Dependent_Kauve.mp3";
import KingOfIndianHipHop from "../../assets/music/King_Of_Indian_Hip_Hop.mp3";
import SamjhMeAyaKya from "../../assets/music/Samjh_Me_Aya_Kya.mp3";
import KadakBan from "../../assets/music/Kadak_Ban.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Emiway = () => {
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
    { name: "Firse Machayenge", path: FirseMachayenge, image: FirseMachayengeImg, durationDisplay: "3:40", artist: "Emiway Bantai" },
    { name: "Company", path: Company, image: CompanyImg, durationDisplay: "3:32", artist: "Emiway Bantai" },
    { name: "Khatam Hue Waande", path: KhatamHueWaande, image: KhatamHueWaandeImg, durationDisplay: "3:55", artist: "Emiway Bantai" },
    { name: "Machayenge", path: Machayenge, image: MachayengeImg, durationDisplay: "3:50", artist: "Emiway Bantai" },
    { name: "Giraftaar", path: Giraftaar, image: GiraftaarImg, durationDisplay: "3:48", artist: "Emiway Bantai ft. Raftaar" },
    { name: "Grind", path: Grind, image: GrindImg, durationDisplay: "3:41", artist: "Emiway Bantai" },
    { name: "Boht Hard", path: BohtHard, image: BohtHardImg, durationDisplay: "4:00", artist: "Emiway Bantai ft. Thoratt" },
    { name: "Jump Kar", path: JumpKar, image: JumpKarImg, durationDisplay: "3:37", artist: "Emiway Bantai" },
    { name: "Mera Bhai Mera Bhai", path: MeraBhaiMeraBhai, image: MeraBhaiMeraBhaiImg, durationDisplay: "3:50", artist: "Emiway Bantai & Shaikh Chilli" },
    { name: "Still No.1", path: StillNo1, image: StillNo1Img, durationDisplay: "3:44", artist: "Emiway Bantai" },
    { name: "Guess", path: Guess, image: GuessImg, durationDisplay: "3:29", artist: "Emiway Bantai" },
    { name: "Dependent Kauve", path: DependentKauve, image: DependentKauveImg, durationDisplay: "3:51", artist: "Emiway Bantai" },
    { name: "King Of Indian Hip Hop", path: KingOfIndianHipHop, image: KingOfIndianHipHopImg, durationDisplay: "3:33", artist: "Emiway Bantai" },
    { name: "Samjh Me Aya Kya", path: SamjhMeAyaKya, image: SamjhMeAyaKyaImg, durationDisplay: "3:56", artist: "Emiway Bantai" },
    { name: "Kadak Ban", path: KadakBan, image: KadakBanImg, durationDisplay: "3:40", artist: "Emiway Bantai" },
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
            src={emiwayImg}
            alt="Emiway"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Emiway Bantai</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              15 songs • India’s rap sensation redefining the scene.
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

export default Emiway;