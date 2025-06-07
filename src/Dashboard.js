import React from "react";
import Header from "./Header/Header";
import StatsCards from "./StatsCards";
import StatsCardsn from "./StatsCardsn";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import ComponentDashboard from "./ComponentDashboard";

const DashboardMain = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Header en la parte superior */}
      <Header />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar a la izquierda */}
        <SidebarMenu />

        {/* Contenido principal a la derecha */}
        <div
          style={{
            flex: 1,
            padding: "10px",
            background: "#f5f5f5",
            marginLeft: "20px", // Ajusta según el ancho de tu sidebar
            marginTop: "30px", // Ajusta según la altura de tu header
          }}
        >
          <div className="k-dashboard-header">
            <h3>Dashboard</h3>
          </div>

          <div
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#f5f5f5",
              border: "1px solid black",
              marginBottom: "10px",
            }}
          >
            <h3>Perfil Empresarial</h3>
            <ComponentDashboard />
          </div>

          {/* <div
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#f5f5f5",
              border: "1px solid black",
              marginBottom: "10px",
            }}
          >
            <h3>Bandeja de gestion</h3>
            <StatsCards />
          </div> */}

          <div
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#f5f5f5",
              border: "1px solid black",
              marginBottom: "10px",
            }}
          >
            <h3>Tareas documentales</h3>
            <div className="p-4">
              <StatsCardsn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
