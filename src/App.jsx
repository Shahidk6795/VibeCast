import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Arijit from "./components/artists/arjit";
import YoYoHoney from "./components/artists/yo-yo-honey";
import KaranAujla from "./components/artists/karan";
import Pritam from "./components/artists/pritam";
import Himesh from "./components/artists/himesh";
import Krsna from "./components/artists/krsna";
import Emiway from "./components/artists/emiway";
import Atif from "./components/artists/atif";
import SearchResults from "./pages/SearchResults";

import { PlayerProvider } from "./context/PlayerContext";
import GlobalMiniPlayer from "./components/GlobalMiniPlayer";

function App() {
  return (
    <PlayerProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/artist/arijit" element={<Arijit />} />
          <Route path="/artist/yo-yo-honey" element={<YoYoHoney />} />
          <Route path="/artist/karan" element={<KaranAujla />} />
          <Route path="/artist/pritam" element={<Pritam />} />
          <Route path="/artist/himesh" element={<Himesh />} />
          <Route path="/artist/krsna" element={<Krsna />} />
          <Route path="/artist/emiway" element={<Emiway />} />
          <Route path="/artist/atif" element={<Atif />} />
        </Routes>
        <GlobalMiniPlayer />
      </BrowserRouter>
    </PlayerProvider>
  );
}

export default App;
