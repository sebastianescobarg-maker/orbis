import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Calendar,
  ChartPie,
  FileText,
  LogOut,
  Settings,
} from "lucide-react";

export default function MainPanel() {
  const navigate = useNavigate();
  return (
    <div className="screen app">
      <div className="bg-gradient" />
      <div className="watermark faint">O</div>

      <header className="app-header">
        <div className="brand">
          <div className="logo-dot" />
          <span>ORBIS</span>
          <small>Sistema Central</small>
        </div>
        <div className="status">
          <div className="pulse" />
          <span>Actividad del sistema</span>
        </div>
        <button
          className="icon-btn"
          onClick={() => navigate("/shutdown")}
          title="Cerrar"
        >
          <LogOut size={20} />
        </button>
      </header>

      <main className="grid">
        <section className="panel">
          <h3>
            <ChartPie size={18} /> Panel de Producción
          </h3>
          <div className="progress">
            <div className="bar">
              <div className="fill" style={{ width: "68%" }} />
            </div>
            <span>68% avance global</span>
          </div>
          <ul className="list">
            <li>
              <span className="dot project" /> Proyecto: “Alpha Norte” — 42
              tareas
            </li>
            <li>
              <span className="dot task" /> Tareas activas — 18
            </li>
            <li>
              <span className="dot reminder" /> Recordatorios hoy — 4
            </li>
          </ul>
        </section>

        <section className="panel">
          <h3>
            <Calendar size={18} /> Agenda
          </h3>
          <ul className="list">
            <li>Lu 13 — Comité Operaciones 09:00</li>
            <li>Ma 14 — Revisión de contratos 11:30</li>
            <li>Mi 15 — Seguimiento proveedores 16:00</li>
          </ul>
          <button
            className="btn ghost"
            onClick={() => navigate("/notificaciones")}
          >
            <Bell size={16} /> Notificaciones
          </button>
        </section>

        <section className="panel">
          <h3>
            <FileText size={18} /> Documentos
          </h3>
          <ul className="list">
            <li>PTS – Limpieza sector A (vigente)</li>
            <li>Contrato Subcontratista X (vence en 12 días)</li>
            <li>Matriz EPP — Actualizada</li>
          </ul>
          <div className="tags">
            <span className="tag">EPP</span>
            <span className="tag">Insumos</span>
            <span className="tag">Herramientas</span>
          </div>
        </section>
      </main>

      <footer className="dock">
        <button className="dock-btn active">
          <ChartPie size={18} /> Panel
        </button>
        <button
          className="dock-btn"
          onClick={() => navigate("/notificaciones")}
        >
          <Bell size={18} /> Alertas
        </button>
        <button className="dock-btn">
          <FileText size={18} /> Reportes
        </button>
        <button className="dock-btn">
          <Settings size={18} /> Ajustes
        </button>
      </footer>
    </div>
  );
}
