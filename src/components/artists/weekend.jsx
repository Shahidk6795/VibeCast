import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const weekndImg = "https://ik.imagekit.io/VibeCast/images/weeknd.jpeg?updatedAt=1768896075423";

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
    duration,
    setMiniPlayerVisible,
    isShuffle,
    toggleShuffle
  } = useContext(PlayerContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const songs = [
    { 
      name: "Blinding Lights", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Blinding_Lights.mp3?updatedAt=1768896820569", 
      image: "https://ik.imagekit.io/VibeCast/images/Blinding_Lights.jpg?updatedAt=1768896061524", 
      durationDisplay: "3:20", 
      artist: "The Weeknd" 
    },
    { 
      name: "Starboy", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Starboy.mp3?updatedAt=1768897092216", 
      image: "https://ik.imagekit.io/VibeCast/images/Starboy.jpg?updatedAt=1768896074099", 
      durationDisplay: "3:50", 
      artist: "The Weeknd, Daft Punk" 
    },
    { 
      name: "The Hills", 
      path: "https://ik.imagekit.io/VibeCast/music/music/The_Hills.mp3?updatedAt=1768897103419", 
      image: "https://ik.imagekit.io/VibeCast/images/The_Hills.jpg?updatedAt=1768896075245", 
      durationDisplay: "4:02", 
      artist: "The Weeknd" 
    },
    { 
      name: "Save Your Tears", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Save_Your_Tears.mp3?updatedAt=1768897051890", 
      image: "https://ik.imagekit.io/VibeCast/images/Save_Your_Tears.jpg?updatedAt=1768896070665", 
      durationDisplay: "3:35", 
      artist: "The Weeknd" 
    },
    { 
      name: "Die For You", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Die_For_You.mp3?updatedAt=1768896837001", 
      image: "https://ik.imagekit.io/VibeCast/images/Die_For_You.jpg?updatedAt=1768896061361", 
      durationDisplay: "4:20", 
      artist: "The Weeknd" 
    },
    { 
      name: "Can't Feel My Face", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Can_Cant_Feel_My_Face.mp3?updatedAt=1768896780181", 
      image: "https://ik.imagekit.io/VibeCast/images/Can_Cant_Feel_My_Face.jpg?updatedAt=1768896061729", 
      durationDisplay: "3:33", 
      artist: "The Weeknd" 
    },
    { 
      name: "I Feel It Coming", 
      path: "https://ik.imagekit.io/VibeCast/music/music/I_Feel_It_Coming.mp3?updatedAt=1768896858122", 
      image: "https://ik.imagekit.io/VibeCast/images/I_Feel_It_Coming.jpg?updatedAt=1768896068467", 
      durationDisplay: "4:29", 
      artist: "The Weeknd, Daft Punk" 
    },
    { 
      name: "Call Out My Name", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Call_Out_My_Name.mp3?updatedAt=1768896795429", 
      image: "https://ik.imagekit.io/VibeCast/images/Call_Out_My_Name.jpg?updatedAt=1768896060876", 
      durationDisplay: "3:48", 
      artist: "The Weeknd" 
    },
    { 
      name: "Wicked Games", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Wicked_Games.mp3?updatedAt=1768897121295", 
      image: "https://ik.imagekit.io/VibeCast/images/Wicked_Games.jpg?updatedAt=1768896075447", 
      durationDisplay: "5:25", 
      artist: "The Weeknd" 
    },
    { 
      name: "Earned It", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Earned_It.mp3?updatedAt=1768896832698", 
      image: "https://ik.imagekit.io/VibeCast/images/Earned_It.jpg?updatedAt=1768896061337", 
      durationDisplay: "4:37", 
      artist: "The Weeknd" 
    },
    { 
      name: "Reminder", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Reminder.mp3?updatedAt=1768897019410", 
      image: "https://ik.imagekit.io/VibeCast/images/Reminder.jpg?updatedAt=1768896069276", 
      durationDisplay: "3:38", 
      artist: "The Weeknd" 
    },
    { 
      name: "Often", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Often.mp3?updatedAt=1768897003447", 
      image: "https://ik.imagekit.io/VibeCast/images/Often.jpg?updatedAt=1768896069228", 
      durationDisplay: "4:09", 
      artist: "The Weeknd" 
    },
    { 
      name: "Heartless", 
      path: "https://ik.imagekit.io/VibeCast/music/Heartless.mp3?updatedAt=1768897405469", 
      image: "https://ik.imagekit.io/VibeCast/images/Heartless.jpg?updatedAt=1768896061333", 
      durationDisplay: "3:18", 
      artist: "The Weeknd" 
    },
    { 
      name: "Creepin'", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Creepin.mp3?updatedAt=1768896781623", 
      image: "https://ik.imagekit.io/VibeCast/images/Creepin.jpg?updatedAt=1768896061332", 
      durationDisplay: "3:41", 
      artist: "Metro Boomin, The Weeknd, 21 Savage" 
    },
    { 
      name: "One Of The Girls", 
      path: "https://ik.imagekit.io/VibeCast/music/music/One_Of_The_Girls.mp3?updatedAt=1768897014219", 
      image: "https://ik.imagekit.io/VibeCast/images/One_Of_The_Girls.jpg?updatedAt=1768896069423", 
      durationDisplay: "4:04", 
      artist: "The Weeknd, JENNIE, Lily-Rose Depp" 
    },
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
        event.stopImmediatePropagation();
        handlePlayPause();
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [playlist, handlePlayPause]);

  return (
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black select-none cursor-default">
      <style jsx="true">{`
        /* THE WEEKND THEME: After Hours Red */
        .artist-header {
          background-image: linear-gradient(to bottom, #991b1b, #121212);
        }
        .artist-accent {
          background-color: #ef4444; /* Red-500 Accent */
          color: white;
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

      <div className="w-full h-80 pt-16 relative artist-header z-10 shadow-lg">
        <button
          onClick={goBack}
          className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-30 transition-transform hover:scale-110 cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img
            src={weekndImg}
            alt="The Weeknd"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-red-900 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">The Weeknd</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " King of the Fall. ⭐️🩸 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • R&B, Pop, and Cinematic Vibes.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-red-900/40 transition-all duration-300 cursor-pointer"
            >
              {isPlaying && playlist.length && playlist[0].name === songs[0].name ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 pl-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={toggleShuffle} 
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-red-500" : "text-gray-400"}`}
            >
              SHUFFLE
            </button>
          </div>

          <div className="grid grid-cols-[16px_48px_1fr_60px] gap-4 py-2 border-b border-gray-700/50 text-gray-400 text-xs uppercase font-semibold mb-2 clear-bg-strip pointer-events-none">
            <div>#</div>
            <div></div>
            <div>Title</div>
            <div className="text-right">Time</div>
          </div>

          {songs.map((song, idx) => (
            <div
              key={idx}
              onClick={() => selectSong(idx)}
              className={`group grid grid-cols-[16px_48px_1fr_60px] items-center gap-4 px-2 py-2 rounded-md cursor-default transition duration-200 clear-bg-on-hover ${
                playlist.length && playlist[currentSongIndex]?.name === song.name
                  ? "clear-bg-active text-white"
                  : "text-gray-400"
              }`}
            >
              <div className="font-medium text-sm text-center">
                {playlist.length &&
                playlist[currentSongIndex]?.name === song.name &&
                isPlaying ? (
                  <span className="text-red-500 animate-pulse">
                    <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z" />
                    </svg>
                  </span>
                ) : (
                  <span className="group-hover:hidden">{idx + 1}</span>
                )}
                <svg className="w-4 h-4 hidden group-hover:block text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <img
                src={song.image}
                alt={song.name}
                className="w-12 h-12 object-cover rounded shadow-md pointer-events-none"
              />
              <div className="flex flex-col truncate">
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-red-500' : 'text-white'}`}>
                  {song.name}
                </span>
                <span className="text-sm font-light text-gray-400 group-hover:text-gray-300">
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