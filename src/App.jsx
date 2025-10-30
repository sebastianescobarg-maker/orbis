import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Preload from "./components/Preload.jsx";
import Startup from "./components/Startup.jsx";
import MainPanel from "./components/MainPanel.jsx";
import Shutdown from "./components/Shutdown.jsx";
import Notifications from "./components/Notifications.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Preload />} />
      <Route path="/startup" element={<Startup />} />
      <Route path="/app" element={<MainPanel />} />
      <Route path="/notificaciones" element={<Notifications />} />
      <Route path="/shutdown" element={<Shutdown />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
