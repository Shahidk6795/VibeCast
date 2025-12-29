import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import brunoImg from "../../assets/images/bruno_mars.jpeg";

import APTImg from "../../assets/images/APT.jpg";
import DieWithASmileImg from "../../assets/images/Die_With_A_Smile.jpg";
import ThatsWhatILikeImg from "../../assets/images/Thats_What_I_Like.jpg";
import Magic24kImg from "../../assets/images/24K_Magic.jpg";
import UptownFunkImg from "../../assets/images/Uptown_Funk.jpg";
import TreasureImg from "../../assets/images/Treasure.jpg";
import LockedOutOfHeavenImg from "../../assets/images/Locked_Out_Of_Heaven.jpg";
import TheLazySongImg from "../../assets/images/The_Lazy_Song.jpg";
import CountOnMeImg from "../../assets/images/Count_On_Me.jpg";
import BillionaireImg from "../../assets/images/Billionaire.jpg";
import GrenadeImg from "../../assets/images/Grenade.jpg";
import JustTheWayYouAreImg from "../../assets/images/Just_The_Way_You_Are.jpg";
import MarryYouImg from "../../assets/images/Marry_You.jpg";
import LightersImg from "../../assets/images/Lighters.jpg";

import APT from "../../assets/music/APT.mp3";
import DieWithASmile from "../../assets/music/Die_With_A_Smile.mp3";
import ThatsWhatILike from "../../assets/music/Thats_What_I_Like.mp3";
import Magic24k from "../../assets/music/24K_Magic.mp3";
import UptownFunk from "../../assets/music/Uptown_Funk.mp3";
import Treasure from "../../assets/music/Treasure.mp3";
import LockedOutOfHeaven from "../../assets/music/Locked_Out_Of_Heaven.mp3";
import TheLazySong from "../../assets/music/The_Lazy_Song.mp3";
import CountOnMe from "../../assets/music/Count_On_Me.mp3";
import Billionaire from "../../assets/music/Billionaire.mp3";
import Grenade from "../../assets/music/Grenade.mp3";
import JustTheWayYouAre from "../../assets/music/Just_The_Way_You_Are.mp3";
import MarryYou from "../../assets/music/Marry_You.mp3";
import Lighters from "../../assets/music/Lighters.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const BrunoMars = () => {
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

  const songs = [
    { name: "APT.", path: APT, image: APTImg, durationDisplay: "2:50", artist: "Rosé, Bruno Mars" },
    { name: "Die With A Smile", path: DieWithASmile, image: DieWithASmileImg, durationDisplay: "4:11", artist: "Lady Gaga, Bruno Mars" },
    { name: "That's What I Like", path: ThatsWhatILike, image: ThatsWhatILikeImg, durationDisplay: "3:26", artist: "Bruno Mars" },
    { name: "24K Magic", path: Magic24k, image: Magic24kImg, durationDisplay: "3:46", artist: "Bruno Mars" },
    { name: "Uptown Funk", path: UptownFunk, image: UptownFunkImg, durationDisplay: "4:30", artist: "Mark Ronson, Bruno Mars" },
    { name: "Treasure", path: Treasure, image: TreasureImg, durationDisplay: "2:58", artist: "Bruno Mars" },
    { name: "Locked Out of Heaven", path: LockedOutOfHeaven, image: LockedOutOfHeavenImg, durationDisplay: "3:53", artist: "Bruno Mars" },
    { name: "The Lazy Song", path: TheLazySong, image: TheLazySongImg, durationDisplay: "3:15", artist: "Bruno Mars" },
    { name: "Count on Me", path: CountOnMe, image: CountOnMeImg, durationDisplay: "3:17", artist: "Bruno Mars" },
    { name: "Billionaire", path: Billionaire, image: BillionaireImg, durationDisplay: "3:31", artist: "Travie McCoy, Bruno Mars" },
    { name: "Grenade", path: Grenade, image: GrenadeImg, durationDisplay: "3:42", artist: "Bruno Mars" },
    { name: "Just the Way You Are", path: JustTheWayYouAre, image: JustTheWayYouAreImg, durationDisplay: "3:40", artist: "Bruno Mars" },
    { name: "Marry You", path: MarryYou, image: MarryYouImg, durationDisplay: "3:50", artist: "Bruno Mars" },
    { name: "Lighters", path: Lighters, image: LightersImg, durationDisplay: "5:03", artist: "Bad Meets Evil, Bruno Mars" },
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
          background-image: linear-gradient(to bottom, #d90429, #121212);
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
            src={brunoImg}
            alt="Bruno Mars"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Bruno Mars</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              14 songs • Funk, Soul & Pop Perfection.
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

export default BrunoMars;