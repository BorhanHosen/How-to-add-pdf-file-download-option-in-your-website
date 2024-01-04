import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Pages/Resume";
import Home from "./Pages/Home";
import DownloadResume from "./Pages/DownloadResume";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/download-resume" element={<DownloadResume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
