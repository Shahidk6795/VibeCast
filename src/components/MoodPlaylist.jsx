import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../context/PlayerContext';
import { workoutPlaylist, relaxPlaylist, romanticPlaylist, partyPlaylist } from '../assets/playlist';
import { Dumbbell, Coffee, Heart, Sparkles, Clock, Play, Pause } from 'lucide-react';

const MoodPlaylist = () => {
  const { id } = useParams();
  const { playPlaylist, isPlaying, playPause, playlist, currentSongIndex } = useContext(PlayerContext);

  const moodConfig = {
    workout: {
      title: "Iron Paradise",
      desc: "Pure Adrenaline. Push your limits.",
      data: workoutPlaylist,
      icon: Dumbbell,
      color: "from-red-600 to-black",
      textColor: "text-red-500"
    },
    relax: {
      title: "Zen Mode",
      desc: "Lo-Fi & Chill. Clear your mind.",
      data: relaxPlaylist,
      icon: Coffee,
      color: "from-rose-500 to-black", 
      textColor: "text-rose-400"
    },
romantic: {
      title: "Late Night",
      desc: "Slow & Deep. For the feels.",
      data: romanticPlaylist,
      icon: Heart,
      color: "from-pink-900 to-black",
      textColor: "text-pink-500"
    },
    party: {
      title: "House Party",
      desc: "Bangers Only. Turn it up.",
      data: partyPlaylist,
      icon: Sparkles,
      color: "from-purple-600 to-black",
      textColor: "text-purple-500"
    }
  };

  const currentMood = moodConfig[id];
  const isThisPlaylistActive = playlist?.length > 0 && playlist[0]?.id === currentMood?.data[0]?.id;
  const coverImage = currentMood?.data[0]?.image;

  useEffect(() => {
    window.scrollTo(0, 0); 
    window.focus();        
  }, [id]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" && document.activeElement.tagName !== "INPUT") {
        if (!isThisPlaylistActive) {
            e.preventDefault(); 
            playPlaylist(currentMood.data, 0); 
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isThisPlaylistActive, playPlaylist, currentMood]); 


  if (!currentMood) return <div className="text-white p-10 pt-24">Playlist not found</div>;

  return (
    <div className="min-h-screen bg-black text-white pb-32">
        
        <div className={`relative h-80 flex flex-col justify-end p-8 bg-gradient-to-b ${currentMood.color}`}>
            <div className="flex items-end gap-6 z-10">
                
                <div className="w-32 h-32 md:w-40 md:h-40 bg-black/30 backdrop-blur-md rounded-lg flex items-center justify-center shadow-2xl border border-white/10 overflow-hidden">
                    {coverImage ? (
                        <img 
                            src={coverImage} 
                            alt={currentMood.title} 
                            className="w-full h-full object-cover" 
                        />
                    ) : (
                        <currentMood.icon className={`w-16 h-16 md:w-20 md:h-20 ${currentMood.textColor}`} />
                    )}
                </div>

                <div className="mb-4">
                    <p className="uppercase text-sm font-bold tracking-widest text-white/70">Mood Playlist</p>
                    <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-2">{currentMood.title}</h1>
                    <p className="text-white/80 text-lg">{currentMood.desc} • {currentMood.data.length} Songs</p>
                </div>
            </div>
        </div>

        <div className="px-8 py-6 bg-black/20 backdrop-blur-sm">
             <button 
                onClick={(e) => {
                    e.currentTarget.blur();
                    if (isThisPlaylistActive) {
                        playPause();
                    } else {
                        playPlaylist(currentMood.data, 0);
                    }
                }}
                className="w-14 h-14 bg-[#1db954] rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(29,185,84,0.4)]"
             >
                {isThisPlaylistActive && isPlaying ? (
                    <Pause className="w-7 h-7 text-black fill-black" />
                ) : (
                    <Play className="w-7 h-7 text-black fill-black ml-1" />
                )}
             </button>
        </div>

        <div className="px-4 md:px-8">
            <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] gap-4 p-3 text-gray-400 border-b border-white/10 text-sm uppercase font-bold sticky top-0 bg-black z-20">
                <span>#</span>
                <span>Title</span>
                <span className="hidden md:block">Artist</span>
                <Clock className="w-4 h-4" />
            </div>

            {currentMood.data.map((song, index) => {
                const isSongActive = isThisPlaylistActive && currentSongIndex === index;

                return (
                    <div 
                        key={song.id}
                        onClick={() => playPlaylist(currentMood.data, index)}
                        className={`grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] gap-4 p-3 items-center rounded-md cursor-pointer group transition-colors 
                        ${isSongActive ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    >
                        <span className={`w-4 flex justify-center ${isSongActive ? 'text-[#1db954] font-bold' : 'text-gray-400 group-hover:text-white'}`}>
                            {isSongActive && isPlaying ? (
                                <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f93a2ef4.gif" className="h-4 w-4" alt="playing"/>
                            ) : (
                                <span className={isSongActive ? "text-[#1db954]" : ""}>{index + 1}</span>
                            )}
                        </span>
                        
                        <div className={`font-medium transition-colors truncate ${isSongActive ? 'text-[#1db954]' : 'text-white'}`}>
                            {song.name}
                            <div className="block md:hidden text-xs text-gray-500 font-normal">{song.artist}</div>
                        </div>
                        
                        <div className={`hidden md:block text-sm ${isSongActive ? 'text-white' : 'text-gray-400'}`}>
                            {song.artist}
                        </div>
                        
                        <div className="text-gray-400 text-sm font-mono">
                            {song.duration}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default MoodPlaylist;