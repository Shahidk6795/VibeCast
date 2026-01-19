import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import drakeImg from "../../assets/images/drake.jpeg";

import GodsPlanImg from "../../assets/images/Gods_Plan.jpg";
import OneDanceImg from "../../assets/images/One_Dance.jpg";
import InMyFeelingsImg from "../../assets/images/In_My_Feelings.jpg";
import HotlineBlingImg from "../../assets/images/Hotline_Bling.jpg";
import RichBabyDaddyImg from "../../assets/images/Rich_Baby_Daddy.jpg";
import NiceForWhatImg from "../../assets/images/Nice_For_What.jpg";
import ToosieSlideImg from "../../assets/images/Toosie_Slide.jpg";
import JimmyCooksImg from "../../assets/images/Jimmy_Cooks.jpg";
import LaughNowCryLaterImg from "../../assets/images/Laugh_Now_Cry_Later.jpg";
import FirstPersonShooterImg from "../../assets/images/First_Person_Shooter.jpg";

import GodsPlan from "../../assets/music/Gods_Plan.mp3";
import OneDance from "../../assets/music/One_Dance.mp3";
import InMyFeelings from "../../assets/music/In_My_Feelings.mp3";
import HotlineBling from "../../assets/music/Hotline_Bling.mp3";
import RichBabyDaddy from "../../assets/music/Rich_Baby_Daddy.mp3";
import NiceForWhat from "../../assets/music/Nice_For_What.mp3";
import ToosieSlide from "../../assets/music/Toosie_Slide.mp3";
import JimmyCooks from "../../assets/music/Jimmy_Cooks.mp3";
import LaughNowCryLater from "../../assets/music/Laugh_Now_Cry_Later.mp3";
import FirstPersonShooter from "../../assets/music/First_Person_Shooter.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Drake = () => {
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
    { name: "God's Plan", path: GodsPlan, image: GodsPlanImg, durationDisplay: "3:18", artist: "Drake" },
    { name: "One Dance", path: OneDance, image: OneDanceImg, durationDisplay: "2:54", artist: "Drake, Wizkid, Kyla" },
    { name: "In My Feelings", path: InMyFeelings, image: InMyFeelingsImg, durationDisplay: "3:37", artist: "Drake" },
    { name: "Hotline Bling", path: HotlineBling, image: HotlineBlingImg, durationDisplay: "4:27", artist: "Drake" },
    { name: "Rich Baby Daddy", path: RichBabyDaddy, image: RichBabyDaddyImg, durationDisplay: "5:19", artist: "Drake, Sexyy Red, SZA" },
    { name: "Nice For What", path: NiceForWhat, image: NiceForWhatImg, durationDisplay: "3:30", artist: "Drake" },
    { name: "Toosie Slide", path: ToosieSlide, image: ToosieSlideImg, durationDisplay: "4:07", artist: "Drake" },
    { name: "Jimmy Cooks", path: JimmyCooks, image: JimmyCooksImg, durationDisplay: "3:38", artist: "Drake, 21 Savage" },
    { name: "Laugh Now Cry Later", path: LaughNowCryLater, image: LaughNowCryLaterImg, durationDisplay: "4:21", artist: "Drake, Lil Durk" },
    { name: "First Person Shooter", path: FirstPersonShooter, image: FirstPersonShooterImg, durationDisplay: "4:07", artist: "Drake, J. Cole" },
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
          /* OVO Gold / Dark Amber for Drake */
          background-image: linear-gradient(to bottom, #b45309, #121212);
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
            src={drakeImg}
            alt="Drake"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Drake</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              10 songs • Certified Lover Boy.
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

export default Drake;