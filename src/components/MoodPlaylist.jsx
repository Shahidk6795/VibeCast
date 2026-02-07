import React, { useContext, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import { workoutPlaylist, relaxPlaylist, romanticPlaylist } from '../assets/playlist';
import { Dumbbell, Coffee, Heart, Clock, Play, Pause, ArrowLeft, MoreVertical } from 'lucide-react';

const MoodPlaylist = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { 
    playPlaylist, 
    isPlaying, 
    playPause, 
    playlist, 
    currentSongIndex, 
    isShuffle,     
    toggleShuffle  
  } = useContext(PlayerContext);

  const moodConfig = {
    workout: {
      title: "Iron Paradise",
      desc: "Pure Adrenaline. Push your limits.",
      data: workoutPlaylist,
      icon: Dumbbell,
      color: "from-red-900 to-black",
      textColor: "text-red-500",
      accent: "bg-red-600"
    },
    relax: {
      title: "Zen Mode",
      desc: "Lo-Fi & Chill. Clear your mind.",
      data: relaxPlaylist,
      icon: Coffee,
      color: "from-slate-800 to-black",
      textColor: "text-emerald-400",
      accent: "bg-emerald-600"
    },
    romantic: {
      title: "Late Night",
      desc: "Slow & Deep. For the feels.",
      data: romanticPlaylist,
      icon: Heart,
      color: "from-rose-900 to-black",
      textColor: "text-rose-500",
      accent: "bg-rose-600"
    }
  };

  const currentMood = moodConfig[id];
  const isThisPlaylistActive = playlist?.length > 0 && playlist[0]?.id === currentMood?.data[0]?.id;
  const coverImage = currentMood?.data[0]?.image;

  const handlePlayPause = () => {
    if (!currentMood) return;

    if (isThisPlaylistActive) {
      playPause();
    } else {
      playPlaylist(currentMood.data, 0);
    }
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
  }, [isThisPlaylistActive, currentMood, playPlaylist, playPause]); 

  const totalDuration = useMemo(() => {
    if (!currentMood) return "";
    let totalSeconds = 0;
    
    currentMood.data.forEach(song => {
      const parts = song.duration.split(':');
      if (parts.length === 2) {
        totalSeconds += parseInt(parts[0]) * 60 + parseInt(parts[1]);
      }
    });

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    if (hours > 0) return `${hours} hr ${minutes} min`;
    return `${minutes} min`;
  }, [currentMood]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!currentMood) return <div className="text-white p-10 pt-24">Playlist not found</div>;

  return (
    <div className="min-h-screen bg-black text-white pb-32 font-sans">
        
        <div className={`relative h-96 flex flex-col justify-end p-8 bg-gradient-to-b ${currentMood.color}`}>
            
            <button 
                onClick={() => navigate(-1)}
                className="absolute top-6 left-6 p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full transition-all duration-300 z-20 group"
            >
                <ArrowLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex flex-col md:flex-row items-end gap-8 z-10">
                <div className="w-48 h-48 shrink-0 bg-black/30 backdrop-blur-md rounded-lg flex items-center justify-center shadow-2xl border border-white/10 overflow-hidden">
                    {coverImage ? (
                        <img src={coverImage} alt={currentMood.title} className="w-full h-full object-cover" />
                    ) : (
                        <currentMood.icon className={`w-20 h-20 ${currentMood.textColor}`} />
                    )}
                </div>

                <div className="mb-2">
                    <p className="uppercase text-xs font-bold tracking-widest text-white/70 mb-2">Mood Playlist</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 drop-shadow-xl">{currentMood.title}</h1>
                    <p className="text-gray-300 text-lg font-medium flex items-center flex-wrap gap-2">
                        {currentMood.desc} 
                        <span className="hidden md:inline">•</span> 
                        <span className="font-bold text-white">{currentMood.data.length} Songs,</span>
                        <span className="text-gray-400">{totalDuration}</span>
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        <div className="px-8 py-6 bg-black flex items-center gap-6">
             <button 
                onClick={(e) => {
                    e.currentTarget.blur();
                    handlePlayPause(); // Updated to use our new handler
                }}
                className={`w-14 h-14 ${currentMood.accent} rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-black/50 text-black`}
             >
                {isThisPlaylistActive && isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                ) : (
                    <Play className="w-7 h-7 fill-current ml-1" />
                )}
             </button>

             <button 
                onClick={toggleShuffle} 
                className={`ml-4 font-bold text-sm hover:text-white transition cursor-pointer tracking-[0.2em] ${isShuffle ? currentMood.textColor : "text-gray-400"}`}
            >
                SHUFFLE
            </button>
        </div>

        <div className="px-4 md:px-8">
            <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 text-gray-400 border-b border-white/10 text-sm uppercase font-bold sticky top-0 bg-black z-20">
                <span className="w-6 text-center">#</span>
                <span>Title</span>
                <span className="hidden md:block">Artist</span>
                <div className="flex justify-end"><Clock className="w-4 h-4" /></div>
            </div>

            <div className="flex flex-col mt-2">
            {currentMood.data.map((song, index) => {
                const isSongActive = isThisPlaylistActive && currentSongIndex === index;

                return (
                    <div 
                        key={song.id}
                        onClick={() => playPlaylist(currentMood.data, index)}
                        className={`group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-3 items-center rounded-md cursor-pointer transition-colors 
                        ${isSongActive ? 'bg-white/10' : 'hover:bg-white/10'}`}
                    >
                        <span className={`w-6 flex justify-center items-center ${isSongActive ? currentMood.textColor : 'text-gray-400 group-hover:text-white'}`}>
                            {isSongActive && isPlaying ? (
                                <img src="https://ik.imagekit.io/vibecast/images/equaliser-animated-green.f93a2ef4.gif" className="h-4 w-4" alt="playing"/>
                            ) : (
                                <>
                                    <span className="group-hover:hidden">{index + 1}</span>
                                    <Play className="w-3 h-3 hidden group-hover:block fill-current text-white" />
                                </>
                            )}
                        </span>
                        
                        <div className="flex flex-col justify-center">
                            <span className={`font-medium text-base truncate ${isSongActive ? currentMood.textColor : 'text-white'}`}>
                                {song.name}
                            </span>
                            <span className="block md:hidden text-xs text-gray-500">{song.artist}</span>
                        </div>
                        
                        <div className={`hidden md:block text-sm ${isSongActive ? 'text-white' : 'text-gray-400'}`}>
                            {song.artist}
                        </div>
                        
                        <div className="flex justify-end items-center gap-4 text-sm text-gray-400 font-mono">
                           <span className="hidden group-hover:block"><Heart className="w-4 h-4 hover:text-white" /></span>
                           <span>{song.duration}</span>
                           <span className="hidden group-hover:block"><MoreVertical className="w-4 h-4" /></span>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    </div>
  );
};

export default MoodPlaylist;