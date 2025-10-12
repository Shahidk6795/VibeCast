import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import arijitImg from "../../assets/images/arijit.jpeg";
import JanamJanam from "../../assets/images/Janam_Janam.jpg";
import Soch_Na_Sake from "../../assets/images/Soch_Na_Sake.jpg";
import Channa_Merey from "../../assets/images/Channa_Mereya.jpg";
import tum_hi_ho from "../../assets/images/TumHiHo.jpg";
import raabta from "../../assets/images/raabta.jpg";
import KunFaya from "../../assets/images/KunFaya.jpg";
import AeDil from "../../assets/images/AeDil.jpg";
import muskuraneke from "../../assets/images/muskurane.jpg";
import phirbhi from "../../assets/images/phirbhi.jpg";
import Hawayei from "../../assets/images/Hawayein.jpg";
import kabira from "../../assets/images/Kabira.jpg";

import TumHiHo from "../../assets/music/Tum_Hi_Ho.mp3";
import ChannaMereya from "../../assets/music/Channa_Mereya.mp3";
import Raabta from "../../assets/music/Raabta.mp3";
import KunFayaKun from "../../assets/music/Kun_Faya_Kun.mp3";
import AeDilHaiMushkil from "../../assets/music/Ae_Dil_Hai_Mushkil.mp3";
import Muskurane from "../../assets/music/Muskurane.mp3";
import Hawayein from "../../assets/music/Hawayein.mp3";
import Kabira from "../../assets/music/Kabira.mp3";
import SochNaSake from "../../assets/music/Soch_Na_Sake.mp3";
import Janam_Janam from "../../assets/music/Janam_Janam.mp3";
import PhirBhiTumkoChahunga from "../../assets/music/Phir_Bhi_Tumko_Chahunga.mp3";


const formatTime = sec => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Arijit = () => {
  const navigate = useNavigate();
  const playlist = [
    { name: "Tum Hi Ho", path: TumHiHo, image: tum_hi_ho, durationDisplay: "4:22" },
    { name: "Channa Mereya", path: ChannaMereya, image: Channa_Merey, durationDisplay: "4:49" },
    { name: "Raabta", path: Raabta, image: raabta, durationDisplay: "4:43" },
    { name: "Kun Faya Kun", path: KunFayaKun, image: KunFaya, durationDisplay: "7:51" },
    { name: "Ae Dil Hai Mushkil", path: AeDilHaiMushkil, image: AeDil, durationDisplay: "4:29" },
    { name: "Muskurane", path: Muskurane, image: muskuraneke, durationDisplay: "5:35" },
    { name: "Phir Bhi Tumko Chahunga", path: PhirBhiTumkoChahunga, image: phirbhi, durationDisplay: "4:48" },
    { name: "Hawayein", path: Hawayein, image: Hawayei, durationDisplay: "4:49" },
    { name: "Kabira", path: Kabira, image: kabira, durationDisplay: "3:43" },
    { name: "Soch Na Sake", path: SochNaSake, image: Soch_Na_Sake, durationDisplay: "4:31" },
    { name: "Janam Janam", path: Janam_Janam, image: JanamJanam, durationDisplay: "4:23" },
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
    if (audioContextRef.current?.state === "suspended") {
      audioContextRef.current.resume().catch(console.error);
      return;
    }
    if (isAudioContextInitialized) return;
    try {
      const currentAudio = audioRef.current;
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = ctx;
      const source = ctx.createMediaElementSource(currentAudio);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      source.connect(analyser);
      analyser.connect(ctx.destination);
      analyserRef.current = analyser;
      dataArrayRef.current = dataArray;
      setIntensity(1);
      setIsAudioContextInitialized(true);
    } catch (e) { console.error(e); }
  };

  useEffect(() => {
    const handleSpace = e => { if (e.code === "Space") { e.preventDefault(); playPause(); } };
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
    const handleEnded = () => { setCurrentSongIndex((currentSongIndex + 1) % playlist.length); setIsPlaying(true); };
    currentAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
    currentAudio.addEventListener("timeupdate", updateProgress);
    currentAudio.addEventListener("ended", handleEnded);
    if (isPlaying) { initAndResumeAudioContext(); currentAudio.play().catch(console.error); }
    return () => {
      currentAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      currentAudio.removeEventListener("timeupdate", updateProgress);
      currentAudio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex]);

  const playPause = () => {
    const currentAudio = audioRef.current;
    if (isPlaying) currentAudio.pause();
    else { initAndResumeAudioContext(); currentAudio.play().catch(console.error); }
    setIsPlaying(!isPlaying);
    setMiniPlayerVisible(true);
  };

  const selectSong = index => { if (index === currentSongIndex) playPause(); else { setCurrentSongIndex(index); setIsPlaying(true); setMiniPlayerVisible(true); } };
  const nextSong = () => { setCurrentSongIndex((currentSongIndex + 1) % playlist.length); setIsPlaying(true); setMiniPlayerVisible(true); };
  const prevSong = () => { setCurrentSongIndex((currentSongIndex - 1 + playlist.length) % playlist.length); setIsPlaying(true); setMiniPlayerVisible(true); };
  const seek = e => { const rect = e.target.getBoundingClientRect(); audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * audioRef.current.duration; setProgress(audioRef.current.currentTime); if (!isPlaying) initAndResumeAudioContext(); };
  const goBack = () => { audioRef.current.pause(); setIsPlaying(false); setMiniPlayerVisible(false); audioContextRef.current?.close().catch(console.error); navigate("/"); };

  return (
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black">
      <style jsx="true">{`
        .spotify-header { background-image: linear-gradient(to bottom, #1db954, #121212); }
        .spotify-green { background-color: #1db954; }
        .clear-bg-on-hover:hover { background-color: rgba(255,255,255,0.1); }
        .clear-bg-active { background-color: rgba(255,255,255,0.2); }
        .clear-bg-strip { background-color: rgba(18,18,18,0.1); }
      `}</style>


      <div className="w-full h-80 pt-16 relative spotify-header z-10 shadow-lg">
        <button onClick={goBack} className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img src={arijitImg} alt="Arijit Singh" className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50" />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Arijit Singh</h1>
            <p className="text-md font-semibold text-white/70 mt-2">11 songs • The best collection of his romantic hits.</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24">
        <div className="max-w-5xl mx-auto relative z-20">
          <div className="flex items-center mb-6">
            <button onClick={playPause} className="w-16 h-16 rounded-full spotify-green text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
              {isPlaying ? <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg className="w-8 h-8 pl-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}
            </button>
            <button className="ml-4 text-gray-400 font-semibold hover:text-white transition">SHUFFLE</button>
          </div>

          <div className="grid grid-cols-[16px_48px_1fr_60px] gap-4 py-2 border-b border-gray-700/50 text-gray-400 text-xs uppercase font-semibold mb-2 clear-bg-strip">
            <div>#</div><div></div><div>Title</div><div className="text-right">Time</div>
          </div>

          {playlist.map((song, idx) => (
            <div key={idx} onClick={() => selectSong(idx)} className={`grid grid-cols-[16px_48px_1fr_60px] items-center gap-4 px-2 py-2 rounded-md cursor-pointer transition duration-200 clear-bg-on-hover ${currentSongIndex===idx?"clear-bg-active text-white":"text-gray-400"}`}>
              <div className="font-medium text-sm text-center">{currentSongIndex===idx&&isPlaying?<span className="text-spotify-green"><svg className="w-4 h-4 mx-auto" fill="#1db954" viewBox="0 0 24 24"><path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z"/></svg></span>:idx+1}</div>
              <img src={song.image} alt={song.name} className="w-12 h-12 object-cover rounded shadow-md" />
              <div className="flex flex-col truncate"><span className="text-base font-semibold truncate">{song.name}</span><span className="text-sm font-light text-gray-400">Arijit Singh</span></div>
              <div className="text-right text-sm text-gray-400">{currentSongIndex===idx?formatTime(duration):song.durationDisplay}</div>
            </div>
          ))}
        </div>
      </div>

      {miniPlayerVisible && (
        <div className="fixed bottom-0 left-0 right-0 h-24 bg-gray-800/95 backdrop-blur-sm z-50 flex items-center justify-between px-4 shadow-2xl">
          <div className="flex items-center w-1/4 min-w-[200px]">
            <img src={playlist[currentSongIndex].image} alt={playlist[currentSongIndex].name} className="w-14 h-14 object-cover rounded mr-4 shadow-lg" />
            <div className="flex flex-col truncate"><span className="font-semibold text-white truncate">{playlist[currentSongIndex].name}</span><span className="text-xs text-gray-400">Arijit Singh</span></div>
          </div>
          <div className="flex flex-col items-center w-1/2 max-w-lg">
            <div className="flex gap-6 mb-1 items-center">
              <button onClick={prevSong} className="text-gray-300 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6z"/></svg></button>
              <button onClick={playPause} className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">{isPlaying?<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>:<svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}</button>
              <button onClick={nextSong} className="text-gray-300 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6h2v12h-2zm-8.5 6L17 6v12l-8.5-6z"/></svg></button>
            </div>
            <div className="w-full flex items-center gap-2 text-xs text-gray-400">
              <span>{formatTime(progress)}</span>
              <div className="w-full h-1 bg-gray-600 rounded-full cursor-pointer group" onClick={seek}>
                <div className="h-1 spotify-green rounded-full relative" style={{ width: `${(progress/duration)*100}%` }}>
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

export default Arijit;
