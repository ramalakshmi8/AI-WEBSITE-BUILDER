import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import useGetCurrentUser from "./hooks/useGetCurrentUser.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Generate from "./pages/Generate.jsx";

import { useSelector } from "react-redux";
import Editor from "./pages/Editor.jsx";
export const serverUrl = "http://localhost:8000";
const App = () => {
  useGetCurrentUser();
  const { userData } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="/dashboard"
          element={userData ? <Dashboard /> : <Home />}
        />
      </Routes>
      <Routes>
        <Route path="/generate" element={userData ? <Generate /> : <Home />} />
      </Routes>
      <Routes>
        <Route path="/editor/:id" element={userData ? <Editor /> : <Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
