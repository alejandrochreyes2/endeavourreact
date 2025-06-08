import React, { useState } from "react";
import Header from "./Header/Header";
import StatsCards from "./StatsCards";
import StatsCardsn from "./StatsCardsn";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import ComponentDashboard from "./ComponentDashboard";

const DashboardMain = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState("Inicio");
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleDrawer = () => setExpanded((prev) => !prev);

  const handleSelect = (item) => {
    setSelectedId(item.text);

    // Si el item tiene subitems, toggle del submenu
    if (item.items) {
      setOpenSubmenus((prev) => ({
        ...prev,
        [item.text]: !prev[item.text],
      }));
    }
  };

  const handleLogout = () => {
    // Aquí puedes agregar la lógica de logout
    console.log("Cerrando sesión...");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header en la parte superior */}
      <Header toggleDrawer={toggleDrawer} isDrawerExpanded={expanded} />

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar a la izquierda */}
        <SidebarMenu
          expanded={expanded}
          selectedId={selectedId}
          openSubmenus={openSubmenus}
          onSelect={handleSelect}
          onLogout={handleLogout}
        />

        {/* Contenido principal a la derecha */}
        <div
          style={{
            flex: 1,
            padding: "10px",
            background: "#f5f5f5",
            marginLeft: expanded ? "20px" : "10px", // Ajusta según el estado del drawer
            marginTop: "10px",
            transition: "margin-left 0.3s ease", // Animación suave
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
