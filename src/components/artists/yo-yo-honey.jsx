import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
// Yo Yo Honey Singh Image
import yoYoImg from "../../assets/images/yo_yo_honey.jpg";

// Playlist Images & Audio
import BlueEyesImg from "../../assets/images/Blue_Eyes.jpg";
import DesiKalakaarImg from "../../assets/images/Desi_Kalakaar.jpg";
import LungiDanceImg from "../../assets/images/Lungi_Dance.jpg";
import CharBottleImg from "../../assets/images/Char_Bottle.jpg";
import BrownRangImg from "../../assets/images/Brown_Rang.jpg";
import AngrejiBeatImg from "../../assets/images/Angreji_Beat.jpg";
import PartyAllNightImg from "../../assets/images/Party_All_Night.jpg";
import AaoRajaImg from "../../assets/images/Aao_Raja.jpg";
import HighHeelsImg from "../../assets/images/High_Heels.jpg";
import LocaaImg from "../../assets/images/Locaa.jpg";
import MakhnaImg from "../../assets/images/Makhna.jpg";
import DilChoriImg from "../../assets/images/Dil_Chori.jpg";
import OneBottleDownImg from "../../assets/images/One_Bottle_Down.jpg";

import BlueEyes from "../../assets/music/Blue_Eyes.mp3";
import DesiKalakaar from "../../assets/music/Desi_Kalakaar.mp3";
import LungiDance from "../../assets/music/Lungi_Dance.mp3";
import CharBottle from "../../assets/music/Char_Bottle.mp3";
import BrownRang from "../../assets/music/Brown_Rang.mp3";
import AngrejiBeat from "../../assets/music/Angreji_Beat.mp3";
import PartyAllNight from "../../assets/music/Party_All_Night.mp3";
import AaoRaja from "../../assets/music/Aao_Raja.mp3";
import HighHeels from "../../assets/music/High_Heels.mp3";
import Locaa from "../../assets/music/Locaa.mp3";
import Makhna from "../../assets/music/Makhna.mp3";
import DilChori from "../../assets/music/Dil_Chori.mp3";
import OneBottleDown from "../../assets/music/One_Bottle_Down.mp3";

import Hyperspeed from "../Hyperspeed";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const YoYoHoney = () => {
  const navigate = useNavigate();

  const playlist = [
    { name: "Blue Eyes", path: BlueEyes, image: BlueEyesImg, durationDisplay: "3:43" },
    { name: "Desi Kalakaar", path: DesiKalakaar, image: DesiKalakaarImg, durationDisplay: "4:00" },
    { name: "Lungi Dance", path: LungiDance, image: LungiDanceImg, durationDisplay: "3:58" },
    { name: "Char Bottle Vodka", path: CharBottle, image: CharBottleImg, durationDisplay: "4:09" },
    { name: "Brown Rang", path: BrownRang, image: BrownRangImg, durationDisplay: "3:42" },
    { name: "Angreji Beat", path: AngrejiBeat, image: AngrejiBeatImg, durationDisplay: "3:58" },
    { name: "Party All Night", path: PartyAllNight, image: PartyAllNightImg, durationDisplay: "3:54" },
    { name: "Aao Raja", path: AaoRaja, image: AaoRajaImg, durationDisplay: "4:34" },
    { name: "High Heels", path: HighHeels, image: HighHeelsImg, durationDisplay: "3:32" },
    { name: "Loca", path: Locaa, image: LocaaImg, durationDisplay: "3:30" },
    { name: "Makhna", path: Makhna, image: MakhnaImg, durationDisplay: "3:25" },
    { name: "Dil Chori", path: DilChori, image: DilChoriImg, durationDisplay: "3:47" },
    { name: "One Bottle Down", path: OneBottleDown, image: OneBottleDownImg, durationDisplay: "3:45" },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [miniPlayerVisible, setMiniPlayerVisible] = useState(false);
  const [isAudioContextInitialized, setIsAudioContextInitialized] = useState(false);

  const audioRef = useRef(new Audio(playlist[0].path));
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);

  const initAndResumeAudioContext = () => {
    if (audioContextRef.current && audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume().catch(e => console.error(e));
      return;
    }
    if (isAudioContextInitialized) return;

    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const source = ctx.createMediaElementSource(audioRef.current);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioContextRef.current = ctx;
      analyserRef.current = analyser;
      dataArrayRef.current = dataArray;

      setIntensity(1);
      setIsAudioContextInitialized(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const handleSpace = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        playPause();
      }
    };
    window.addEventListener("keydown", handleSpace);
    return () => window.removeEventListener("keydown", handleSpace);
  }, [isPlaying]);

  useEffect(() => {
    const currentAudio = audioRef.current;
    currentAudio.src = playlist[currentSongIndex].path;
    currentAudio.load();
    setProgress(0);

    const handleLoadedMetadata = () => setDuration(currentAudio.duration);
    const updateProgress = () => setProgress(currentAudio.currentTime);
    const handleEnded = () => setCurrentSongIndex((currentSongIndex + 1) % playlist.length);

    currentAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
    currentAudio.addEventListener("timeupdate", updateProgress);
    currentAudio.addEventListener("ended", handleEnded);

    if (isPlaying) {
      initAndResumeAudioContext();
      currentAudio.play().catch(e => console.error(e));
    }

    return () => {
      currentAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      currentAudio.removeEventListener("timeupdate", updateProgress);
      currentAudio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex]);

  const playPause = () => {
    const currentAudio = audioRef.current;
    if (isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      initAndResumeAudioContext();
      currentAudio.play().catch(e => console.error(e));
      setIsPlaying(true);
    }
    setMiniPlayerVisible(true);
  };

  const selectSong = (index) => {
    if (index === currentSongIndex) playPause();
    else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
      setMiniPlayerVisible(true);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % playlist.length);
    setIsPlaying(true);
    setMiniPlayerVisible(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((currentSongIndex - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
    setMiniPlayerVisible(true);
  };

  const seek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
    if (!isPlaying) initAndResumeAudioContext();
  };

  const goBack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setMiniPlayerVisible(false);
    audioRef.current.src = '';
    audioRef.current.load();
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(e => console.error(e));
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black">
      <style jsx="true">{`
        .spotify-header { background-image: linear-gradient(to bottom, #1db954, #121212); }
        .spotify-green { background-color: #1db954; }
        .clear-bg-on-hover:hover { background-color: rgba(255,255,255,0.1); }
        .clear-bg-active { background-color: rgba(255,255,255,0.2); }
        .clear-bg-strip { background-color: rgba(18,18,18,0.1); }
        .cinematic-overlay, .fog-layer { display: none; }
      `}</style>

      <div className="fixed inset-0 overflow-hidden z-0">
        <Hyperspeed intensity={intensity} colorShift={true} trailLength={80} />
      </div>

      {/* Artist Header */}
      <div className="w-full h-80 pt-16 relative spotify-header z-10 shadow-lg">
        <button onClick={goBack} className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img src={yoYoImg} alt="Yo Yo Honey Singh" className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50" />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Yo Yo Honey Singh</h1>
            <p className="text-md font-semibold text-white/70 mt-2">13 songs • The best collection of his hit tracks.</p>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24">
        <div className="max-w-5xl mx-auto relative z-20">
          <div className="flex items-center mb-6">
            <button onClick={playPause} className="w-16 h-16 rounded-full spotify-green text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg className="w-8 h-8 pl-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
            <button className="ml-4 text-gray-400 font-semibold hover:text-white transition">SHUFFLE</button>
          </div>

          <div className="grid grid-cols-[16px_48px_1fr_60px] gap-4 py-2 border-b border-gray-700/50 text-gray-400 text-xs uppercase font-semibold mb-2 clear-bg-strip">
            <div>#</div><div></div><div>Title</div><div className="text-right">Time</div>
          </div>

          {playlist.map((song, idx) => (
            <div key={idx} onClick={() => selectSong(idx)} className={`grid grid-cols-[16px_48px_1fr_60px] items-center gap-4 px-2 py-2 rounded-md cursor-pointer transition duration-200 clear-bg-on-hover ${currentSongIndex === idx ? "clear-bg-active text-white" : "text-gray-400"}`}>
              <div className="font-medium text-sm text-center">{currentSongIndex === idx && isPlaying ? <span className="text-spotify-green"><svg className="w-4 h-4 mx-auto" fill="#1db954" viewBox="0 0 24 24"><path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z"/></svg></span> : idx+1}</div>
              <img src={song.image} alt={song.name} className="w-12 h-12 object-cover rounded shadow-md" />
              <div className="flex flex-col truncate"><span className={`text-base font-semibold truncate ${currentSongIndex === idx ? 'text-white' : 'text-white'}`}>{song.name}</span><span className="text-sm font-light text-gray-400">Yo Yo Honey Singh</span></div>
              <div className="text-right text-sm text-gray-400">{currentSongIndex === idx ? formatTime(duration) : song.durationDisplay}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Player */}
      {miniPlayerVisible && (
        <div className="fixed bottom-0 left-0 right-0 h-24 bg-gray-800/95 backdrop-blur-sm z-50 flex items-center justify-between px-4 shadow-2xl">
          <div className="flex items-center w-1/4 min-w-[200px]">
            <img src={playlist[currentSongIndex].image} alt={playlist[currentSongIndex].name} className="w-14 h-14 object-cover rounded mr-4 shadow-lg" />
            <div className="flex flex-col truncate">
              <span className="font-semibold text-white truncate">{playlist[currentSongIndex].name}</span>
              <span className="text-xs text-gray-400">Yo Yo Honey Singh</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/2 max-w-lg">
            <div className="flex gap-6 mb-1 items-center">
              <button onClick={prevSong} className="text-gray-300 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6z"/></svg></button>
              <button onClick={playPause} className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">{isPlaying ? <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}</button>
              <button onClick={nextSong} className="text-gray-300 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6h2v12h-2zm-8.5 6L17 6v12l-8.5-6z"/></svg></button>
            </div>
            <div className="w-full flex items-center gap-2 text-xs text-gray-400">
              <span>{formatTime(progress)}</span>
              <div className="w-full h-1 bg-gray-600 rounded-full cursor-pointer group" onClick={seek}>
                <div className="h-1 spotify-green rounded-full relative" style={{ width: `${(progress / duration) * 100}%` }}>
                  <div className="w-3 h-3 rounded-full bg-white absolute right-0 top-1/2 -translate-y-1/2 transform opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <div className="w-1/4 flex justify-end items-center pr-4"></div>
        </div>
      )}
    </div>
  );
};

export default YoYoHoney;
