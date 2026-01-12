import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";


import eminemImg from "../../assets/images/eminem.jpeg";

import LoseYourselfImg from "../../assets/images/Lose_Yourself.jpg";
import WithoutMeImg from "../../assets/images/Without_Me.jpg";
import TheRealSlimShadyImg from "../../assets/images/The_Real_Slim_Shady.jpg";
import StanImg from "../../assets/images/Stan.jpg";
import LoveTheWayYouLieImg from "../../assets/images/Love_The_Way_You_Lie.jpg";
import NotAfraidImg from "../../assets/images/Not_Afraid.jpg";
import MockingbirdImg from "../../assets/images/Mockingbird.jpg";
import GodzillaImg from "../../assets/images/Godzilla.jpg";
import RapGodImg from "../../assets/images/Rap_God.jpg";
import TillICollapseImg from "../../assets/images/Till_I_Collapse.jpg";
import TheMonsterImg from "../../assets/images/The_Monster.jpg";
import SmackThatImg from "../../assets/images/Smack_That.jpg";
import ForgotAboutDreImg from "../../assets/images/Forgot_About_Dre.jpg";
import VenomImg from "../../assets/images/Venom.jpg";
import SingForTheMomentImg from "../../assets/images/Sing_For_The_Moment.jpg";

import LoseYourself from "../../assets/music/Lose_Yourself.mp3";
import WithoutMe from "../../assets/music/Without_Me.mp3";
import TheRealSlimShady from "../../assets/music/The_Real_Slim_Shady.mp3";
import Stan from "../../assets/music/Stan.mp3";
import LoveTheWayYouLie from "../../assets/music/Love_The_Way_You_Lie.mp3";
import NotAfraid from "../../assets/music/Not_Afraid.mp3";
import Mockingbird from "../../assets/music/Mockingbird.mp3";
import Godzilla from "../../assets/music/Godzilla.mp3";
import RapGod from "../../assets/music/Rap_God.mp3";
import TillICollapse from "../../assets/music/Till_I_Collapse.mp3";
import TheMonster from "../../assets/music/The_Monster.mp3";
import SmackThat from "../../assets/music/Smack_That.mp3";
import ForgotAboutDre from "../../assets/music/Forgot_About_Dre.mp3";
import Venom from "../../assets/music/Venom.mp3";
import SingForTheMoment from "../../assets/music/Sing_For_The_Moment.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Eminem = () => {
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
    { name: "Lose Yourself", path: LoseYourself, image: LoseYourselfImg, durationDisplay: "5:26", artist: "Eminem" },
    { name: "Without Me", path: WithoutMe, image: WithoutMeImg, durationDisplay: "4:50", artist: "Eminem" },
    { name: "The Real Slim Shady", path: TheRealSlimShady, image: TheRealSlimShadyImg, durationDisplay: "4:44", artist: "Eminem" },
    { name: "Stan", path: Stan, image: StanImg, durationDisplay: "6:44", artist: "Eminem, Dido" },
    { name: "Love The Way You Lie", path: LoveTheWayYouLie, image: LoveTheWayYouLieImg, durationDisplay: "4:23", artist: "Eminem, Rihanna" },
    { name: "Not Afraid", path: NotAfraid, image: NotAfraidImg, durationDisplay: "4:08", artist: "Eminem" },
    { name: "Mockingbird", path: Mockingbird, image: MockingbirdImg, durationDisplay: "4:10", artist: "Eminem" },
    { name: "Godzilla", path: Godzilla, image: GodzillaImg, durationDisplay: "3:30", artist: "Eminem, Juice WRLD" },
    { name: "Rap God", path: RapGod, image: RapGodImg, durationDisplay: "6:03", artist: "Eminem" },
    { name: "Till I Collapse", path: TillICollapse, image: TillICollapseImg, durationDisplay: "4:57", artist: "Eminem, Nate Dogg" },
    { name: "The Monster", path: TheMonster, image: TheMonsterImg, durationDisplay: "4:10", artist: "Eminem, Rihanna" },
    { name: "Smack That", path: SmackThat, image: SmackThatImg, durationDisplay: "3:32", artist: "Akon, Eminem" },
    { name: "Forgot About Dre", path: ForgotAboutDre, image: ForgotAboutDreImg, durationDisplay: "3:42", artist: "Dr. Dre, Eminem" },
    { name: "Venom", path: Venom, image: VenomImg, durationDisplay: "4:29", artist: "Eminem" },
    { name: "Sing For The Moment", path: SingForTheMoment, image: SingForTheMomentImg, durationDisplay: "5:39", artist: "Eminem" },
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
          /* Gunmetal Grey / Cool Slate for Eminem */
          background-image: linear-gradient(to bottom, #475569, #121212);
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
            src={eminemImg}
            alt="Eminem"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Eminem</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              15 songs • The Rap God himself.
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

export default Eminem;