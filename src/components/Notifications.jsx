import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BellRing } from "lucide-react";

export default function Notifications() {
  const navigate = useNavigate();
  return (
    <div className="screen app">
      <div className="bg-gradient" />
      <header className="app-header">
        <button
          className="icon-btn"
          onClick={() => navigate("/app")}
          title="Volver"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="brand small">
          <span>ORBIS</span>
          <small>Notificaciones</small>
        </div>
      </header>

      <main className="panel single">
        <h3>
          <BellRing size={18} /> Centro de notificaciones
        </h3>
        <ul className="notif">
          <li>
            <span className="pill ok">Sistema</span> Resumen diario listo —
            08:00
          </li>
          <li>
            <span className="pill warn">Contrato</span> Subcontratista X vence
            en 12 días
          </li>
          <li>
            <span className="pill info">Recordatorio</span> Entrega informe —
            17:00
          </li>
        </ul>
      </main>
    </div>
  );
}
