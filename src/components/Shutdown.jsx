import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Shutdown() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate("/"), 3200);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="screen">
      <div className="bg-gradient darker" />
      <div className="o3d contract">
        O
        <span className="halo" />
      </div>
      <div className="fade-to-black" />
    </div>
  );
}
