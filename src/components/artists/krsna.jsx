import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import krsnaImg from "../../assets/images/krsna.jpg";

import I_GuessImg from "../../assets/images/I_Guess.jpg";
import Hola_AmigoImg from "../../assets/images/Hola_Amigo.jpg";
import Knock_KnockImg from "../../assets/images/Knock_Knock.jpg";
import Joota_JapaniImg from "../../assets/images/Joota_Japani.jpg";
import SensitiveImg from "../../assets/images/Sensitive.jpg";
import MakasamImg from "../../assets/images/Makasam.jpg";
import Blowing_UpImg from "../../assets/images/Blowing_Up.jpg";
import Saza_E_MautImg from "../../assets/images/Saza_E_Maut.jpg";
import No_CapImg from "../../assets/images/No_Cap.jpg";
import VibrateImg from "../../assets/images/Vibrate.jpg";
import Been_A_WhileImg from "../../assets/images/Been_A_While.jpg";
import Roll_UpImg from "../../assets/images/Roll_Up.jpg";
import Mumbai_Se_Delhi_TakImg from "../../assets/images/Mumbai_Se_Delhi_Tak.jpg";
import VillainImg from "../../assets/images/Villain.jpg";
import Kaha_TakImg from "../../assets/images/Kaha_Tak.jpg";

import I_Guess from "../../assets/music/I_Guess.mp3";
import Hola_Amigo from "../../assets/music/Hola_Amigo.mp3";
import Knock_Knock from "../../assets/music/Knock_Knock.mp3";
import Joota_Japani from "../../assets/music/Joota_Japani.mp3";
import Sensitive from "../../assets/music/Sensitive.mp3";
import Makasam from "../../assets/music/Makasam.mp3";
import Blowing_Up from "../../assets/music/Blowing_Up.mp3";
import Saza_E_Maut from "../../assets/music/Saza_E_Maut.mp3";
import No_Cap from "../../assets/music/No_Cap.mp3";
import Vibrate from "../../assets/music/Vibrate.mp3";
import Been_A_While from "../../assets/music/Been_A_While.mp3";
import Roll_Up from "../../assets/music/Roll_Up.mp3";
import Mumbai_Se_Delhi_Tak from "../../assets/music/Mumbai_Se_Delhi_Tak.mp3";
import Villain from "../../assets/music/Villain.mp3";
import Kaha_Tak from "../../assets/music/Kaha_Tak.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Krsna = () => {
  const navigate = useNavigate();

  const playlist = [
    { name: "I Guess", path: I_Guess, image: I_GuessImg, durationDisplay: "3:55" },
    { name: "Hola Amigo", path: Hola_Amigo, image: Hola_AmigoImg, durationDisplay: "3:40" },
    { name: "Knock Knock", path: Knock_Knock, image: Knock_KnockImg, durationDisplay: "3:45" },
    { name: "Joota Japani", path: Joota_Japani, image: Joota_JapaniImg, durationDisplay: "3:50" },
    { name: "Sensitive", path: Sensitive, image: SensitiveImg, durationDisplay: "4:00" },
    { name: "Makasam", path: Makasam, image: MakasamImg, durationDisplay: "3:58" },
    { name: "Blowing Up", path: Blowing_Up, image: Blowing_UpImg, durationDisplay: "4:05" },
    { name: "Saza-E-Maut", path: Saza_E_Maut, image: Saza_E_MautImg, durationDisplay: "3:52" },
    { name: "No Cap", path: No_Cap, image: No_CapImg, durationDisplay: "4:02" },
    { name: "Vibrate", path: Vibrate, image: VibrateImg, durationDisplay: "3:48" },
    { name: "Been A While", path: Been_A_While, image: Been_A_WhileImg, durationDisplay: "4:10" },
    { name: "Roll Up", path: Roll_Up, image: Roll_UpImg, durationDisplay: "3:57" },
    { name: "Mumbai Se Delhi Tak", path: Mumbai_Se_Delhi_Tak, image: Mumbai_Se_Delhi_TakImg, durationDisplay: "3:59" },
    { name: "Villain", path: Villain, image: VillainImg, durationDisplay: "4:15" },
    { name: "Kaha Tak", path: Kaha_Tak, image: Kaha_TakImg, durationDisplay: "4:12" },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState(0.6);
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
      setIntensity(0.6);
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
    const newTime = (clickX / rect.width) * (audioRef.current.duration || 0);
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
    if (!isPlaying) initAndResumeAudioContext();
  };

  const goBack = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setMiniPlayerVisible(false);
    audioRef.current.src = "";
    audioRef.current.load();
    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
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

      <div className="w-full h-80 pt-16 relative bg-gradient-to-b spotify-green to-black z-10 shadow-lg">
        <button onClick={goBack} className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img src={krsnaImg} alt="Krsna" className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50" />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">KRSNA</h1>
            <p className="text-md font-semibold text-white/70 mt-2">15 songs • Desi hip-hop’s lyrical god.</p>
          </div>
        </div>
      </div>

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

          <div className="grid grid-cols-[16px_48px_1fr_60px] gap-4 py-2 border-b border-gray-700/50 text-gray-400 text-xs uppercase font-semibold mb-2">
            <div>#</div><div></div><div>Title</div><div className="text-right">Time</div>
          </div>

          {playlist.map((song, idx) => (
            <div
              key={idx}
              onClick={() => selectSong(idx)}
              className={`grid grid-cols-[16px_48px_1fr_60px] items-center gap-4 px-2 py-2 rounded-md cursor-pointer transition duration-200 ${currentSongIndex === idx ? "bg-green-600 text-white" : "text-gray-400 hover:bg-gray-700/30"}`}
            >
              <div className="font-medium text-sm text-center">
                {currentSongIndex === idx && isPlaying ? (
                  <span className="text-spotify-green">
                    <svg className="w-4 h-4 mx-auto" fill="#1db954" viewBox="0 0 24 24"><path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z"/></svg>
                  </span>
                ) : (
                  idx + 1
                )}
              </div>
              <img src={song.image} alt={song.name} className="w-12 h-12 object-cover rounded shadow-md" />
              <div className="flex flex-col truncate">
                <span className="text-base font-semibold truncate">{song.name}</span>
                <span className="text-sm font-light text-gray-400">KRSNA</span>
              </div>
              <div className="text-right text-sm text-gray-400">{currentSongIndex === idx ? formatTime(duration) : song.durationDisplay}</div>
            </div>
          ))}
        </div>
      </div>

      {miniPlayerVisible && (
        <div className="fixed bottom-0 left-0 right-0 h-24 bg-gray-800/95 backdrop-blur-sm z-50 flex items-center justify-between px-4 shadow-2xl">
          <div className="flex items-center w-1/4 min-w-[200px]">
            <img src={playlist[currentSongIndex].image} alt={playlist[currentSongIndex].name} className="w-14 h-14 object-cover rounded mr-4 shadow-lg" />
            <div className="flex flex-col truncate">
              <span className="font-semibold text-white truncate">{playlist[currentSongIndex].name}</span>
              <span className="text-xs text-gray-400">KRSNA</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/2 max-w-lg">
            <div className="flex gap-6 mb-1 items-center">
              <button onClick={prevSong} className="text-gray-300 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6z"/></svg></button>
              <button onClick={playPause} className="w-8 h-8 rounded-full spotify-green text-black flex items-center justify-center hover:scale-105 transition-transform">
                {isPlaying ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>
              <button onClick={nextSong} className="text-gray-300 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6h2v12h-2zm-8.5 6L17 6v12l-8.5-6z"/></svg></button>
            </div>
            <div className="w-full flex items-center gap-2 text-xs text-gray-400">
              <span>{formatTime(progress)}</span>
              <div className="w-full h-1 bg-gray-600 rounded-full cursor-pointer group" onClick={seek}>
                <div className="h-1 spotify-green rounded-full relative" style={{ width: `${(progress / (duration || 1)) * 100}%` }}>
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

export default Krsna;
