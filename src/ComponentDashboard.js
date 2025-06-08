// src/components/ComponentDashboard.js

import React from "react";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
// import "@progress/kendo-theme-default/dist/all.css";
import "./ComponentDashboard.css";

const ComponentDashboard = () => {
  const donutData = [
    { category: "Sin iniciar trámite", value: 0, color: "#e53e3e" },
    { category: "En tránsito", value: 0, color: "#ecc94b" },
    { category: "Gestión exitosa", value: 1, color: "#84cc16" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "24px",
          flexWrap: "wrap",
          backgroundColor: "#1f2937",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
          color: "#FFFFFF",
        }}
      >
        {/* Columna izquierda */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h1
            style={{ fontSize: "20px", fontWeight: "bold", color: "#FFFFFF" }}
          >
            Control Online International
          </h1>
          <p style={{ fontSize: "14px", color: "#FFFFFF" }}>
            Perfil empresarial
          </p>
          <img
            src="https://aerocivilsgdeatest.com/ControlDocTest/App_Images/Logos/Aerocivil.png"
            alt="Decoración"
            style={{
              width: "80px",
              height: "80px",
              // objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Columna derecha */}
        <div
          style={{
            flex: "1",
            minWidth: "250px",
            textAlign: "right",
            fontSize: "14px",
            color: "#FFFFFF",
          }}
        >
          <p>
            <strong style={{ color: "#FFFFFF" }}>NIT:</strong> 901428945-1
          </p>
          <p>
            <strong style={{ color: "#FFFFFF" }}>Dirección:</strong> Calle 16 3E
            44 BARRIO CAOBOS
          </p>
          <p>
            <strong style={{ color: "#FFFFFF" }}>Teléfono:</strong> 0123456789
          </p>
        </div>
      </div>

      {/* Bandeja de Gestión */}
      <h3>Bandeja de gestion</h3>
      <div
        style={{
          display: "flex",
          gap: "24px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        {/* Gráfico (columna izquierda) */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <Chart>
            <ChartSeries>
              <ChartSeriesItem
                type="donut"
                data={donutData}
                categoryField="category"
                field="value"
                colorField="color"
              />
            </ChartSeries>
          </Chart>
          <div
            style={{
              fontSize: "12px",
              textAlign: "center",
              color: "#9ca3af",
              marginTop: "8px",
            }}
          >
            <span style={{ color: "#facc15" }}>En tránsito</span>,{" "}
            <span style={{ color: "#ef4444" }}>Sin iniciar trámite</span>,{" "}
            <span style={{ color: "#a3e635" }}>Gestión exitosa</span>
          </div>
        </div>

        {/* Tarjetas (columna derecha) */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <Card title="Sin iniciar trámite" value={0} color="#ef4444" />
          <Card title="En tránsito" value={0} color="#facc15" />
          <Card
            title="Gestión exitosa"
            value={0}
            subtitle="100%"
            color="#a3e635"
          />
          <Card title="Copias" value={0} color="#60a5fa" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, subtitle, color }) => (
  <div
    style={{
      backgroundColor: "#1f2937",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
      color: "#e5e7eb",
    }}
  >
    <h2 style={{ fontSize: "24px", fontWeight: "bold", color }}>{value}</h2>
    <p style={{ fontSize: "14px", margin: "4px 0" }}>{title}</p>
    {subtitle && (
      <p style={{ fontSize: "12px", color: "#9ca3af" }}>{subtitle}</p>
    )}
  </div>
);

export default ComponentDashboard;
