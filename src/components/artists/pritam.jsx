import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import Hyperspeed from "../Hyperspeed";
import pritamImg from "../../assets/images/pritam.jpeg";

import YeTuneKyaKiyaImg from "../../assets/images/Ye_Tune_Kya_Kiya.jpg";
import JaraSaImg from "../../assets/images/Jara_Sa.jpg";
import TumSeHeeImg from "../../assets/images/Tum_Se_Hee.jpg";
import ShayadImg from "../../assets/images/Shayad.jpg";
import ItneSeBaatHaiImg from "../../assets/images/Itne_Se_Baat_Hai.jpg";
import TeraHoneLagaHuImg from "../../assets/images/Tera_Hone_Laga_Hu.jpg";
import TerePyaarMeImg from "../../assets/images/Tere_Pyaar_Me.jpg";
import WhatJhumkaImg from "../../assets/images/What_Jhumka.jpg";
import LutPutGayaImg from "../../assets/images/Lut_Put_Gaya.jpg";
import TuEMeraImg from "../../assets/images/Tu_E_Mera.jpg";
import KesariyaImg from "../../assets/images/Kesariya.jpg";
import O_MahiImg from "../../assets/images/O_Mahi.jpg";
import KhairiyatImg from "../../assets/images/Khairiyat.jpg";
import TuChahiyeImg from "../../assets/images/Tu_Chahiye.jpg";
import MaiRangSharbatonKaImg from "../../assets/images/Mai_Rang_Sharbaton_Ka.jpg";

import YeTuneKyaKiya from "../../assets/music/Ye_Tune_Kya_Kiya.mp3";
import JaraSa from "../../assets/music/Jara_Sa.mp3";
import TumSeHee from "../../assets/music/Tum_Se_Hee.mp3";
import Shayad from "../../assets/music/Shayad.mp3";
import ItneSeBaatHai from "../../assets/music/Itne_Se_Baat_Hai.mp3";
import TeraHoneLagaHu from "../../assets/music/Tera_Hone_Laga_Hu.mp3";
import TerePyaarMe from "../../assets/music/Tere_Pyaar_Me.mp3";
import WhatJhumka from "../../assets/music/What_Jhumka.mp3";
import LutPutGaya from "../../assets/music/Lut_Put_Gaya.mp3"; 
import TuEMera from "../../assets/music/Tu_E_Mera.mp3";
import Kesariya from "../../assets/music/Kesariya.mp3";
import O_Mahi from "../../assets/music/O_Mahi.mp3";
import Khairiyat from "../../assets/music/Khairiyat.mp3";
import TuChahiye from "../../assets/music/Tu_Chahiye.mp3";
import MaiRangSharbatonKa from "../../assets/music/Mai_Rang_Sharbaton_Ka.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Pritam = () => {
  const navigate = useNavigate();

  const playlist = [
    { name: "Ye tune kya kiya", path: YeTuneKyaKiya, image: YeTuneKyaKiyaImg, durationDisplay: "4:03" },
    { name: "Jara sa", path: JaraSa, image: JaraSaImg, durationDisplay: "3:45" },
    { name: "Tum se hee", path: TumSeHee, image: TumSeHeeImg, durationDisplay: "4:12" },
    { name: "Shayad", path: Shayad, image: ShayadImg, durationDisplay: "3:58" },
    { name: "Itne se baat hai", path: ItneSeBaatHai, image: ItneSeBaatHaiImg, durationDisplay: "3:36" },
    { name: "Tera hone laga hu", path: TeraHoneLagaHu, image: TeraHoneLagaHuImg, durationDisplay: "4:05" },
    { name: "Tere pyaar me", path: TerePyaarMe, image: TerePyaarMeImg, durationDisplay: "3:50" },
    { name: "What jhumka", path: WhatJhumka, image: WhatJhumkaImg, durationDisplay: "3:30" },
    { name: "Lut Put Gaya", path: LutPutGaya, image: LutPutGayaImg, durationDisplay: "3:40" },
    { name: "Tu e mera", path: TuEMera, image: TuEMeraImg, durationDisplay: "4:00" },
    { name: "Kesariya", path: Kesariya, image: KesariyaImg, durationDisplay: "3:35" },
    { name: "O mahi", path: O_Mahi, image: O_MahiImg, durationDisplay: "3:55" },
    { name: "Khairiyat", path: Khairiyat, image: KhairiyatImg, durationDisplay: "4:20" },
    { name: "Tu chahiye", path: TuChahiye, image: TuChahiyeImg, durationDisplay: "3:48" },
    { name: "Mai rang sharbaton ka", path: MaiRangSharbatonKa, image: MaiRangSharbatonKaImg, durationDisplay: "4:10" },
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
      <div className="fixed inset-0 overflow-hidden z-0">
      <Hyperspeed intensity={0.2} colorShift={false} trailLength={80} />
      </div>

      <div className="w-full h-80 pt-16 relative bg-gradient-to-b from-green-600 to-black z-10 shadow-lg">
        <button onClick={goBack} className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img src={pritamImg} alt="Pritam" className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50" />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Pritam</h1>
            <p className="text-md font-semibold text-white/70 mt-2">15 songs • Bollywood’s soul of melody.</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24">
        <div className="max-w-5xl mx-auto relative z-20">
          <div className="flex items-center mb-6">
              <button onClick={playPause} className="w-16 h-16 rounded-full bg-green-500 text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
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
                <span className="text-sm font-light text-gray-400">Pritam</span>
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
              <span className="text-xs text-gray-400">Pritam</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/2 max-w-lg">
            <div className="flex gap-6 mb-1 items-center">
              <button onClick={prevSong} className="text-gray-300 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6z"/></svg></button>
              <button onClick={playPause} className="w-8 h-8 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 transition-transform">
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

export default Pritam;
