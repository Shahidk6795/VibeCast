import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Arijit from "./components/artists/arjit";
import YoYoHoney from "./components/artists/yo-yo-honey";
import KaranAujla from "./components/artists/karan";
import Pritam from "./components/artists/pritam";
import Himesh from "./components/artists/himesh";
import Krsna from "./components/artists/krsna";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/arijit" element={<Arijit />} />
        <Route path="/artist/yo-yo-honey" element={<YoYoHoney />} />
        <Route path="/artist/karan" element={<KaranAujla />} />
        <Route path="/artist/pritam" element={<Pritam />} />
        <Route path="/artist/himesh" element={<Himesh />} />
        <Route path="/artist/krsna" element={<Krsna />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
