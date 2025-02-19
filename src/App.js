import React from "react";
import { CurrentListProvider } from "./helpers/CurrentListContext";
import Home from './components/Home/Home';
import Playlist from './components/Playlist/Playlist';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <CurrentListProvider>
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ Home loads first */}
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
    </CurrentListProvider>
  );
}

export default App;
