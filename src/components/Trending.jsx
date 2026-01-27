import React, { useState, useEffect } from "react";
import { TrendingUp, Play, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const travisImg = "https://ik.imagekit.io/VibeCast/images/travis.jpeg?updatedAt=1768896075554";
const weekndImg = "https://ik.imagekit.io/VibeCast/images/weeknd.jpeg?updatedAt=1768896075423";
const drakeImg = "https://ik.imagekit.io/VibeCast/images/drake.jpeg?updatedAt=1768896061506";
const billieImg = "https://ik.imagekit.io/VibeCast/images/billie.jpeg?updatedAt=1768896060772";
const arijitImg = "https://ik.imagekit.io/VibeCast/images/arijit.jpeg?updatedAt=1768896061413";
const eminemImg = "https://ik.imagekit.io/VibeCast/images/eminem.jpeg?updatedAt=1768896061344";
const edImg = "https://ik.imagekit.io/VibeCast/images/ed.jpeg?updatedAt=1768896061392";
const shreyaImg = "https://ik.imagekit.io/VibeCast/images/shreya.jpeg?updatedAt=1768896070881";
const badBunnyImg = "https://ik.imagekit.io/VibeCast/images/badbunny.jpeg?updatedAt=1768896060813";
const guruImg = "https://ik.imagekit.io/VibeCast/images/guru.jpeg?updatedAt=1768896061745";
const anuvImg = "https://ik.imagekit.io/VibeCast/images/anuv.jpeg?updatedAt=1768896060738";
const yoYoImg = "https://ik.imagekit.io/VibeCast/images/yo_yo_honey.jpg";

const masterSongPool = [
  { title: "FE!N", artist: "Travis Scott", basePlays: 845000000, image: travisImg, duration: "3:11", path: "/artist/travis" },
  { title: "Blinding Lights", artist: "The Weeknd", basePlays: 998000000, image: weekndImg, duration: "3:20", path: "/artist/weeknd" },
  { title: "God's Plan", artist: "Drake", basePlays: 750000000, image: drakeImg, duration: "3:18", path: "/artist/drake" },
  { title: "Birds of a Feather", artist: "Billie Eilish", basePlays: 520000000, image: billieImg, duration: "3:30", path: "/artist/billie" },
  { title: "Chaleya", artist: "Arijit Singh", basePlays: 410000000, image: arijitImg, duration: "3:08", path: "/artist/arijit" },
  { title: "Mockingbird", artist: "Eminem", basePlays: 890000000, image: eminemImg, duration: "4:11", path: "/artist/eminem" },
  { title: "Shape of You", artist: "Ed Sheeran", basePlays: 950000000, image: edImg, duration: "3:53", path: "/artist/ed" },
  { title: "Param Sundari", artist: "Shreya Ghoshal", basePlays: 320000000, image: shreyaImg, duration: "3:20", path: "/artist/shreya" },
  { title: "Monaco", artist: "Bad Bunny", basePlays: 600000000, image: badBunnyImg, duration: "4:12", path: "/artist/badbunny" },
  { title: "Lahore", artist: "Guru Randhawa", basePlays: 380000000, image: guruImg, duration: "3:16", path: "/artist/guru" },
  { title: "Husn", artist: "Anuv Jain", basePlays: 250000000, image: anuvImg, duration: "3:35", path: "/artist/anuv" },
  { title: "Blue Eyes", artist: "Yo Yo Honey Singh", basePlays: 480000000, image: yoYoImg, duration: "3:45", path: "/artist/yo-yo-honey" },
];

const Trending = () => {
  const navigate = useNavigate();
  const [trendingList, setTrendingList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const shuffled = [...masterSongPool]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)
      .map(song => ({
        ...song,
        currentPlays: song.basePlays + Math.floor(Math.random() * 500000)
      }));
    setTrendingList(shuffled);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrendingList(prevList => 
        prevList.map(song => ({
          ...song,
          currentPlays: song.currentPlays + Math.floor(Math.random() * 150)
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const reRankInterval = setInterval(() => {
      setIsUpdating(true);
      
      setTimeout(() => {
        setTrendingList(prevList => {
          return [...prevList].sort(() => 0.5 - Math.random());
        });
        setIsUpdating(false);
      }, 800);

    }, 15000);

    return () => clearInterval(reRankInterval);
  }, []);

  const formatPlays = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="w-full min-h-screen text-white bg-black pb-24">
      
      <div className="relative w-full h-80 bg-gradient-to-b from-purple-900 to-black p-8 flex items-end pt-20 overflow-hidden">
         <div className={`absolute inset-0 bg-pink-600/20 mix-blend-overlay transition-opacity duration-1000 ${isUpdating ? 'opacity-100' : 'opacity-0'}`}></div>

         <div className="relative z-10 flex items-end gap-6">
            <div className="w-52 h-52 bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl shadow-pink-500/20 flex items-center justify-center rounded-lg rotate-3 hover:rotate-0 transition-transform duration-500">
               <Activity className="w-24 h-24 text-white animate-pulse" />
            </div>
            <div>
               <div className="flex items-center gap-2 mb-2">
                 <p className="text-sm font-bold uppercase tracking-widest text-pink-400">Live Global Charts</p>
                 {isUpdating && <span className="text-xs bg-red-600 px-2 py-0.5 rounded-full animate-pulse">UPDATING</span>}
               </div>
               
               <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">Trending Now</h1>
               
               <p className="text-gray-300 flex items-center gap-2">
                 <TrendingUp className="w-4 h-4 text-green-400" />
                 Real-time updates every 15s
               </p>
            </div>
         </div>
      </div>

      <div className="px-6 py-8">
         <div className="grid grid-cols-[50px_4fr_3fr_1fr] text-gray-400 text-sm font-bold uppercase border-b border-white/10 pb-2 mb-4 px-4 sticky top-0 bg-black z-20">
            <span>#</span>
            <span>Title</span>
            <span className="hidden md:block">Live Plays</span>
            <span className="text-right">Time</span>
         </div>

         {trendingList.map((song, idx) => (
            <div 
               key={`${song.title}-${idx}`}
               onClick={() => navigate(song.path)}
               className={`group grid grid-cols-[50px_4fr_3fr_1fr] items-center p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-500 ${isUpdating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
            >
               <div className="text-gray-400 font-bold text-lg w-6 text-center">
                  <span className="group-hover:hidden text-pink-500">{idx + 1}</span>
                  <Play className="hidden group-hover:block w-4 h-4 text-white fill-white ml-1" />
               </div>

               <div className="flex items-center gap-4">
                  <img src={song.image} alt={song.title} className="w-12 h-12 object-cover rounded shadow-md" />
                  <div>
                     <p className="font-bold text-white text-md group-hover:text-pink-400 transition-colors">{song.title}</p>
                     <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
               </div>

               <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm font-mono tracking-wide">
                  {formatPlays(song.currentPlays)}
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
               </div>

               <div className="text-right text-sm text-gray-400">
                  {song.duration}
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default Trending;