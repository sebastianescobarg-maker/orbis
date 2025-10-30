import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Preload() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate("/startup"), 1800); // ~2s
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="screen">
      <div className="bg-gradient" />
      <div className="particles" />
      <div className="watermark">O</div>
      <div className="card center">
        <div className="subtitle">INICIALIZANDO</div>
        <div className="title">SISTEMA CENTRAL ORBIS…</div>
        <div className="loader-line" />
      </div>
    </div>
  );
}
