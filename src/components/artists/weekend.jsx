import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import weekndImg from "../../assets/images/weeknd.jpeg";

import BlindingLightsImg from "../../assets/images/Blinding_Lights.jpg";
import StarboyImg from "../../assets/images/Starboy.jpg";
import TheHillsImg from "../../assets/images/The_Hills.jpg";
import SaveYourTearsImg from "../../assets/images/Save_Your_Tears.jpg";
import DieForYouImg from "../../assets/images/Die_For_You.jpg";
import CanCantFeelMyFaceImg from "../../assets/images/Can_Cant_Feel_My_Face.jpg";
import IFeelItComingImg from "../../assets/images/I_Feel_It_Coming.jpg";
import CallOutMyNameImg from "../../assets/images/Call_Out_My_Name.jpg";
import WickedGamesImg from "../../assets/images/Wicked_Games.jpg";
import EarnedItImg from "../../assets/images/Earned_It.jpg";
import ReminderImg from "../../assets/images/Reminder.jpg";
import OftenImg from "../../assets/images/Often.jpg";
import HeartlessImg from "../../assets/images/Heartless.jpg";
import CreepinImg from "../../assets/images/Creepin.jpg";
import OneOfTheGirlsImg from "../../assets/images/One_Of_The_Girls.jpg";

import BlindingLights from "../../assets/music/Blinding_Lights.mp3";
import Starboy from "../../assets/music/Starboy.mp3";
import TheHills from "../../assets/music/The_Hills.mp3";
import SaveYourTears from "../../assets/music/Save_Your_Tears.mp3";
import DieForYou from "../../assets/music/Die_For_You.mp3";
import CanCantFeelMyFace from "../../assets/music/Can_Cant_Feel_My_Face.mp3";
import IFeelItComing from "../../assets/music/I_Feel_It_Coming.mp3";
import CallOutMyName from "../../assets/music/Call_Out_My_Name.mp3";
import WickedGames from "../../assets/music/Wicked_Games.mp3";
import EarnedIt from "../../assets/music/Earned_It.mp3";
import Reminder from "../../assets/music/Reminder.mp3";
import Often from "../../assets/music/Often.mp3";
import Heartless from "../../assets/music/Heartless.mp3";
import Creepin from "../../assets/music/Creepin.mp3";
import OneOfTheGirls from "../../assets/music/One_Of_The_Girls.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const TheWeeknd = () => {
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
    { name: "Blinding Lights", path: BlindingLights, image: BlindingLightsImg, durationDisplay: "3:20", artist: "The Weeknd" },
    { name: "Starboy", path: Starboy, image: StarboyImg, durationDisplay: "3:50", artist: "The Weeknd, Daft Punk" },
    { name: "The Hills", path: TheHills, image: TheHillsImg, durationDisplay: "4:02", artist: "The Weeknd" },
    { name: "Save Your Tears", path: SaveYourTears, image: SaveYourTearsImg, durationDisplay: "3:35", artist: "The Weeknd" },
    { name: "Die For You", path: DieForYou, image: DieForYouImg, durationDisplay: "4:20", artist: "The Weeknd" },
    { name: "Can't Feel My Face", path: CanCantFeelMyFace, image: CanCantFeelMyFaceImg, durationDisplay: "3:33", artist: "The Weeknd" },
    { name: "I Feel It Coming", path: IFeelItComing, image: IFeelItComingImg, durationDisplay: "4:29", artist: "The Weeknd, Daft Punk" },
    { name: "Call Out My Name", path: CallOutMyName, image: CallOutMyNameImg, durationDisplay: "3:48", artist: "The Weeknd" },
    { name: "Wicked Games", path: WickedGames, image: WickedGamesImg, durationDisplay: "5:25", artist: "The Weeknd" },
    { name: "Earned It", path: EarnedIt, image: EarnedItImg, durationDisplay: "4:37", artist: "The Weeknd" },
    { name: "Reminder", path: Reminder, image: ReminderImg, durationDisplay: "3:38", artist: "The Weeknd" },
    { name: "Often", path: Often, image: OftenImg, durationDisplay: "4:09", artist: "The Weeknd" },
    { name: "Heartless", path: Heartless, image: HeartlessImg, durationDisplay: "3:18", artist: "The Weeknd" },
    { name: "Creepin'", path: Creepin, image: CreepinImg, durationDisplay: "3:41", artist: "Metro Boomin, The Weeknd, 21 Savage" },
    { name: "One Of The Girls", path: OneOfTheGirls, image: OneOfTheGirlsImg, durationDisplay: "4:04", artist: "The Weeknd, JENNIE, Lily-Rose Depp" },
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
          /* Deep Crimson / Blood Red for The Weeknd */
          background-image: linear-gradient(to bottom, #991b1b, #121212);
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
            src={weekndImg}
            alt="The Weeknd"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">The Weeknd</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              15 songs • King of the Fall.
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

export default TheWeeknd;