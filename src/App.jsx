import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import SearchResults from "./pages/SearchResults";

import MoodPlaylist from "./components/MoodPlaylist"; 

import Artists from "./components/Artist";
import Trending from "./components/Trending";

import Arijit from "./components/artists/arjit";
import YoYoHoney from "./components/artists/yo-yo-honey";
import KaranAujla from "./components/artists/karan";
import Pritam from "./components/artists/pritam";
import Himesh from "./components/artists/himesh";
import Krsna from "./components/artists/krsna";
import Emiway from "./components/artists/emiway";
import Atif from "./components/artists/atif";
import BrunoMars from "./components/artists/bruno";
import BadBunny from "./components/artists/bunny";
import AnuvJain from "./components/artists/anuv";
import ShreyaGhoshal from "./components/artists/shreya";
import Eminem from "./components/artists/eminem";
import GuruRandhawa from "./components/artists/guru";
import TravisScott from "./components/artists/travis";
import TheWeeknd from "./components/artists/weekend";
import BillieEilish from "./components/artists/billieeilish";
import EdSheeran from "./components/artists/edsheeran";
import Drake from "./components/artists/drake";

import GlobalMiniPlayer from "./components/GlobalMiniPlayer";
import { PlayerProvider } from "./context/PlayerContext";

function App() {
  return (
    <PlayerProvider>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />

          <Route path="/mood/:id" element={<MoodPlaylist />} />

          <Route path="/artists" element={<Artists />} />
          <Route path="/trending" element={<Trending />} />

          <Route path="/artist/arijit" element={<Arijit />} />
          <Route path="/artist/yo-yo-honey" element={<YoYoHoney />} />
          <Route path="/artist/karan" element={<KaranAujla />} />
          <Route path="/artist/pritam" element={<Pritam />} />
          <Route path="/artist/himesh" element={<Himesh />} />
          <Route path="/artist/krsna" element={<Krsna />} />
          <Route path="/artist/emiway" element={<Emiway />} />
          <Route path="/artist/atif" element={<Atif />} />
          <Route path="/artist/bruno" element={<BrunoMars />} />
          <Route path="/artist/badbunny" element={<BadBunny />} />
          <Route path="/artist/anuv" element={<AnuvJain />} />
          <Route path="/artist/shreya" element={<ShreyaGhoshal />} />
          <Route path="/artist/eminem" element={<Eminem />} />
          <Route path="/artist/guru" element={<GuruRandhawa />} />
          <Route path="/artist/travis" element={<TravisScott />} />
          <Route path="/artist/weeknd" element={<TheWeeknd />} />
          <Route path="/artist/billie" element={<BillieEilish />} />
          <Route path="/artist/ed" element={<EdSheeran />} />
          <Route path="/artist/drake" element={<Drake />} />
        </Routes>
        
        <GlobalMiniPlayer />
      </BrowserRouter>
    </PlayerProvider>
  );
}

export default App;