import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import useGetCurrentUser from "./hooks/useGetCurrentUser.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Generate from "./pages/Generate.jsx";
import WebsiteEditor from "./pages/Editor.jsx";
import LiveSite from "./pages/LiveSite.jsx";

import { useSelector } from "react-redux";
import Pricing from "./pages/Pricing.jsx";

export const serverUrl = "https://ai-website-builder-it5f.onrender.com";
const App = () => {
  useGetCurrentUser();
  const { userData } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={userData ? <Dashboard /> : <Home />}
        />

        <Route path="/generate" element={userData ? <Generate /> : <Home />} />

        <Route
          path="/editor/:id"
          element={userData ? <WebsiteEditor /> : <Home />}
        />

        <Route path="/site/:id" element={<LiveSite />} />

        {/* <Route path="/site/:id" element={<LiveSite />} /> */}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
