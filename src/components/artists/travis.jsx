import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import travisImg from "../../assets/images/travis.jpeg";

import SickoModeImg from "../../assets/images/Sicko_Mode.jpg";
import GoosebumpsImg from "../../assets/images/Goosebumps.jpg";
import HighestInTheRoomImg from "../../assets/images/Highest_In_The_Room.jpg";
import ButterflyEffectImg from "../../assets/images/Butterfly_Effect.jpg";
import AntidoteImg from "../../assets/images/Antidote.jpg";
import StargazingImg from "../../assets/images/Stargazing.jpg";
import YosemiteImg from "../../assets/images/Yosemite.jpg";
import FeinImg from "../../assets/images/Fein.jpg";
import IKnowImg from "../../assets/images/I_Know.jpg";
import MyEyesImg from "../../assets/images/My_Eyes.jpg";
import TelekinesisImg from "../../assets/images/Telekinesis.jpg";
import TypeShitImg from "../../assets/images/Type_Shit.jpg";
import SkeletonsImg from "../../assets/images/Skeletons.jpg";
import WakeUpImg from "../../assets/images/Wake_Up.jpg";
import TranceImg from "../../assets/images/Trance.jpg";

import SickoMode from "../../assets/music/Sicko_Mode.mp3";
import Goosebumps from "../../assets/music/Goosebumps.mp3";
import HighestInTheRoom from "../../assets/music/Highest_In_The_Room.mp3";
import ButterflyEffect from "../../assets/music/Butterfly_Effect.mp3";
import Antidote from "../../assets/music/Antidote.mp3";
import Stargazing from "../../assets/music/Stargazing.mp3";
import Yosemite from "../../assets/music/Yosemite.mp3";
import Fein from "../../assets/music/Fein.mp3";
import IKnow from "../../assets/music/I_Know.mp3";
import MyEyes from "../../assets/music/My_Eyes.mp3";
import Telekinesis from "../../assets/music/Telekinesis.mp3";
import TypeShit from "../../assets/music/Type_Shit.mp3";
import Skeletons from "../../assets/music/Skeletons.mp3";
import WakeUp from "../../assets/music/Wake_Up.mp3";
import Trance from "../../assets/music/Trance.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const TravisScott = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const songs = [
    { name: "SICKO MODE", path: SickoMode, image: SickoModeImg, durationDisplay: "5:12", artist: "Travis Scott, Drake" },
    { name: "goosebumps", path: Goosebumps, image: GoosebumpsImg, durationDisplay: "4:03", artist: "Travis Scott, Kendrick Lamar" },
    { name: "HIGHEST IN THE ROOM", path: HighestInTheRoom, image: HighestInTheRoomImg, durationDisplay: "2:55", artist: "Travis Scott" },
    { name: "BUTTERFLY EFFECT", path: ButterflyEffect, image: ButterflyEffectImg, durationDisplay: "3:10", artist: "Travis Scott" },
    { name: "Antidote", path: Antidote, image: AntidoteImg, durationDisplay: "4:22", artist: "Travis Scott" },
    { name: "STARGAZING", path: Stargazing, image: StargazingImg, durationDisplay: "4:30", artist: "Travis Scott" },
    { name: "YOSEMITE", path: Yosemite, image: YosemiteImg, durationDisplay: "2:30", artist: "Travis Scott, Gunna" },
    { name: "FE!N", path: Fein, image: FeinImg, durationDisplay: "3:11", artist: "Travis Scott, Playboi Carti" },
    { name: "I KNOW ?", path: IKnow, image: IKnowImg, durationDisplay: "3:31", artist: "Travis Scott" },
    { name: "MY EYES", path: MyEyes, image: MyEyesImg, durationDisplay: "4:11", artist: "Travis Scott" },
    { name: "TELEKINESIS", path: Telekinesis, image: TelekinesisImg, durationDisplay: "5:53", artist: "Travis Scott, SZA, Future" },
    { name: "Type Shit", path: TypeShit, image: TypeShitImg, durationDisplay: "3:48", artist: "Future, Metro Boomin, Travis Scott" },
    { name: "SKELETONS", path: Skeletons, image: SkeletonsImg, durationDisplay: "2:25", artist: "Travis Scott, Tame Impala" },
    { name: "WAKE UP", path: WakeUp, image: WakeUpImg, durationDisplay: "3:51", artist: "Travis Scott, The Weeknd" },
    { name: "TRANCE", path: Trance, image: TranceImg, durationDisplay: "3:14", artist: "Metro Boomin, Travis Scott, Young Thug" },
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
          /* Cactus Jack Brown / Mocha for Travis Scott */
          background-image: linear-gradient(to bottom, #5d4037, #121212);
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
            src={travisImg}
            alt="Travis Scott"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Travis Scott</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              15 songs • LA FLAME. It's lit!
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

export default TravisScott;