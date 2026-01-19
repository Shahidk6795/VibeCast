import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import billieImg from "../../assets/images/billie.jpeg";

import BirdsOfAFeatherImg from "../../assets/images/Birds_Of_A_Feather.jpg";
import BadGuyImg from "../../assets/images/Bad_Guy.jpg";
import LovelyImg from "../../assets/images/Lovely.jpg";
import HappierThanEverImg from "../../assets/images/Happier_Than_Ever.jpg";
import OceanEyesImg from "../../assets/images/Ocean_Eyes.jpg";
import WhatWasIMadeForImg from "../../assets/images/What_Was_I_Made_For.jpg";
import EverythingIWantedImg from "../../assets/images/Everything_I_Wanted.jpg";
import LunchImg from "../../assets/images/Lunch.jpg";
import BuryAFriendImg from "../../assets/images/Bury_A_Friend.jpg";
import WhenThePartysOverImg from "../../assets/images/When_The_Partys_Over.jpg";
import ChihiroImg from "../../assets/images/Chihiro.jpg";
import IdontwannabeyouanymoreImg from "../../assets/images/Idontwannabeyouanymore.jpg";
import BellyacheImg from "../../assets/images/Bellyache.jpg";
import NoTimeToDieImg from "../../assets/images/No_Time_To_Die.jpg";
import ThereforeIAmImg from "../../assets/images/Therefore_I_Am.jpg";

import BirdsOfAFeather from "../../assets/music/Birds_Of_A_Feather.mp3";
import BadGuy from "../../assets/music/Bad_Guy.mp3";
import Lovely from "../../assets/music/Lovely.mp3";
import HappierThanEver from "../../assets/music/Happier_Than_Ever.mp3";
import OceanEyes from "../../assets/music/Ocean_Eyes.mp3";
import WhatWasIMadeFor from "../../assets/music/What_Was_I_Made_For.mp3";
import EverythingIWanted from "../../assets/music/Everything_I_Wanted.mp3";
import Lunch from "../../assets/music/Lunch.mp3";
import BuryAFriend from "../../assets/music/Bury_A_Friend.mp3";
import WhenThePartysOver from "../../assets/music/When_The_Partys_Over.mp3";
import Chihiro from "../../assets/music/Chihiro.mp3";
import Idontwannabeyouanymore from "../../assets/music/Idontwannabeyouanymore.mp3";
import Bellyache from "../../assets/music/Bellyache.mp3";
import NoTimeToDie from "../../assets/music/No_Time_To_Die.mp3";
import ThereforeIAm from "../../assets/music/Therefore_I_Am.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const BillieEilish = () => {
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
    { name: "BIRDS OF A FEATHER", path: BirdsOfAFeather, image: BirdsOfAFeatherImg, durationDisplay: "3:30", artist: "Billie Eilish" },
    { name: "bad guy", path: BadGuy, image: BadGuyImg, durationDisplay: "3:14", artist: "Billie Eilish" },
    { name: "lovely", path: Lovely, image: LovelyImg, durationDisplay: "3:20", artist: "Billie Eilish, Khalid" },
    { name: "Happier Than Ever", path: HappierThanEver, image: HappierThanEverImg, durationDisplay: "4:58", artist: "Billie Eilish" },
    { name: "Ocean Eyes", path: OceanEyes, image: OceanEyesImg, durationDisplay: "3:20", artist: "Billie Eilish" },
    { name: "What Was I Made For?", path: WhatWasIMadeFor, image: WhatWasIMadeForImg, durationDisplay: "3:42", artist: "Billie Eilish" },
    { name: "everything i wanted", path: EverythingIWanted, image: EverythingIWantedImg, durationDisplay: "4:05", artist: "Billie Eilish" },
    { name: "LUNCH", path: Lunch, image: LunchImg, durationDisplay: "2:59", artist: "Billie Eilish" },
    { name: "bury a friend", path: BuryAFriend, image: BuryAFriendImg, durationDisplay: "3:13", artist: "Billie Eilish" },
    { name: "when the party's over", path: WhenThePartysOver, image: WhenThePartysOverImg, durationDisplay: "3:16", artist: "Billie Eilish" },
    { name: "CHIHIRO", path: Chihiro, image: ChihiroImg, durationDisplay: "5:03", artist: "Billie Eilish" },
    { name: "idontwannabeyouanymore", path: Idontwannabeyouanymore, image: IdontwannabeyouanymoreImg, durationDisplay: "3:23", artist: "Billie Eilish" },
    { name: "bellyache", path: Bellyache, image: BellyacheImg, durationDisplay: "2:59", artist: "Billie Eilish" },
    { name: "No Time To Die", path: NoTimeToDie, image: NoTimeToDieImg, durationDisplay: "4:02", artist: "Billie Eilish" },
    { name: "Therefore I Am", path: ThereforeIAm, image: ThereforeIAmImg, durationDisplay: "2:54", artist: "Billie Eilish" },
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
          /* Toxic Green / Forest Green for Billie */
          background-image: linear-gradient(to bottom, #14532d, #121212);
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
            src={billieImg}
            alt="Billie Eilish"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Billie Eilish</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              15 songs • HIT ME HARD AND SOFT.
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

export default BillieEilish;