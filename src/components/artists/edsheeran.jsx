import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import edImg from "../../assets/images/ed.jpeg";

import ShapeOfYouImg from "../../assets/images/Shape_Of_You.jpg";
import PerfectImg from "../../assets/images/Perfect.jpg";
import ThinkingOutLoudImg from "../../assets/images/Thinking_Out_Loud.jpg";
import PhotographImg from "../../assets/images/Photograph.jpg";
import BadHabitsImg from "../../assets/images/Bad_Habits.jpg";
import ShiversImg from "../../assets/images/Shivers.jpg";
import CastleOnTheHillImg from "../../assets/images/Castle_On_The_Hill.jpg";
import GalwayGirlImg from "../../assets/images/Galway_Girl.jpg";
import IDontCareImg from "../../assets/images/I_Dont_Care.jpg";
import TheATeamImg from "../../assets/images/The_A_Team.jpg";
import LegoHouseImg from "../../assets/images/Lego_House.jpg";
import HappierImg from "../../assets/images/Happier.jpg";
import EyesClosedImg from "../../assets/images/Eyes_Closed.jpg";
import BeautifulPeopleImg from "../../assets/images/Beautiful_People.jpg";
import SapphireImg from "../../assets/images/Sapphire.jpg";

import ShapeOfYou from "../../assets/music/Shape_Of_You.mp3";
import Perfect from "../../assets/music/Perfect.mp3";
import ThinkingOutLoud from "../../assets/music/Thinking_Out_Loud.mp3";
import Photograph from "../../assets/music/Photograph.mp3";
import BadHabits from "../../assets/music/Bad_Habits.mp3";
import Shivers from "../../assets/music/Shivers.mp3";
import CastleOnTheHill from "../../assets/music/Castle_On_The_Hill.mp3";
import GalwayGirl from "../../assets/music/Galway_Girl.mp3";
import IDontCare from "../../assets/music/I_Dont_Care.mp3";
import TheATeam from "../../assets/music/The_A_Team.mp3";
import LegoHouse from "../../assets/music/Lego_House.mp3";
import Happier from "../../assets/music/Happier.mp3";
import EyesClosed from "../../assets/music/Eyes_Closed.mp3";
import BeautifulPeople from "../../assets/music/Beautiful_People.mp3";
import Sapphire from "../../assets/music/Sapphire.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const EdSheeran = () => {
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
    { name: "Sapphire", path: Sapphire, image: SapphireImg, durationDisplay: "2:59", artist: "Ed Sheeran, Arijit Singh" },
    { name: "Shape of You", path: ShapeOfYou, image: ShapeOfYouImg, durationDisplay: "3:53", artist: "Ed Sheeran" },
    { name: "Perfect", path: Perfect, image: PerfectImg, durationDisplay: "4:23", artist: "Ed Sheeran" },
    { name: "Thinking Out Loud", path: ThinkingOutLoud, image: ThinkingOutLoudImg, durationDisplay: "4:41", artist: "Ed Sheeran" },
    { name: "Photograph", path: Photograph, image: PhotographImg, durationDisplay: "4:19", artist: "Ed Sheeran" },
    { name: "Bad Habits", path: BadHabits, image: BadHabitsImg, durationDisplay: "3:50", artist: "Ed Sheeran" },
    { name: "Shivers", path: Shivers, image: ShiversImg, durationDisplay: "3:27", artist: "Ed Sheeran" },
    { name: "Castle on the Hill", path: CastleOnTheHill, image: CastleOnTheHillImg, durationDisplay: "4:21", artist: "Ed Sheeran" },
    { name: "Galway Girl", path: GalwayGirl, image: GalwayGirlImg, durationDisplay: "2:50", artist: "Ed Sheeran" },
    { name: "I Don't Care", path: IDontCare, image: IDontCareImg, durationDisplay: "3:39", artist: "Ed Sheeran, Justin Bieber" },
    { name: "The A Team", path: TheATeam, image: TheATeamImg, durationDisplay: "4:18", artist: "Ed Sheeran" },
    { name: "Lego House", path: LegoHouse, image: LegoHouseImg, durationDisplay: "3:05", artist: "Ed Sheeran" },
    { name: "Happier", path: Happier, image: HappierImg, durationDisplay: "3:27", artist: "Ed Sheeran" },
    { name: "Eyes Closed", path: EyesClosed, image: EyesClosedImg, durationDisplay: "3:14", artist: "Ed Sheeran" },
    { name: "Beautiful People", path: BeautifulPeople, image: BeautifulPeopleImg, durationDisplay: "3:17", artist: "Ed Sheeran, Khalid" },
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
          /* Mathematics Orange / Ginger for Ed Sheeran */
          background-image: linear-gradient(to bottom, #ea580c, #121212);
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
            src={edImg}
            alt="Ed Sheeran"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Ed Sheeran</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              15 songs • The Mathematics Tour.
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

export default EdSheeran;