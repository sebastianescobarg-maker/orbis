import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ENABLE_AUDIO = false; // Cambia a true si quieres sonido en el arranque

export default function Startup() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    let to = setTimeout(() => navigate("/app"), 3200);
    if (ENABLE_AUDIO && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    return () => clearTimeout(to);
  }, [navigate]);

  return (
    <div className="screen">
      <div className="bg-gradient" />
      <div className="particles subtle" />
      <div className="oAura" />
      <div className="o3d">
        O
        <span className="halo" />
        <span className="shine" />
      </div>
      {ENABLE_AUDIO && (
        <audio ref={audioRef}>
          {/* Coloca aquí un mp3 si lo deseas */}
          <source src="" type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}
