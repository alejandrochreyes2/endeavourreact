import React, { useState } from "react";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router-dom";
import "./SidebarMenu/SidebarMenu.css";

const menuItems = [
  {
    text: "Inicio",
    icon: "home",
    route: "/dashboard",
  },
  {
    text: "Radicación",
    icon: "folder",
    items: [
      { text: "Recibidos", route: "/filing/received" },
      { text: "Internos", route: "/filing/internal" },
      { text: "Enviados", route: "/filing/sent" },
      { text: "Masivos", route: "/filing/massive" },
      { text: "Rápidos", route: "/filing/quick" },
    ],
  },
  // ... (otros ítems del menú)
];

export const AppDrawer = ({ children, onLogout }) => {
  const [expanded, setExpanded] = useState(true);
  const [selectedId, setSelectedId] = useState("Inicio");
  const navigate = useNavigate();

  const handleSelect = (item) => {
    setSelectedId(item.text);
    if (item.route) {
      if (item.route === "/logout") {
        onLogout && onLogout();
      } else {
        navigate(item.route);
      }
    }
  };

  const renderMenuItems = (items) =>
    items.map((item) => (
      <React.Fragment key={item.text}>
        <div
          className={`drawer-menu-item${
            selectedId === item.text ? " selected" : ""
          }`}
          onClick={() => handleSelect(item)}
        >
          {item.icon && <span className={`k-icon k-i-${item.icon}`} />}
          <span>{item.text}</span>
        </div>
        {item.items && (
          <div className="drawer-submenu">
            {item.items.map((sub) => (
              <div
                key={sub.text}
                className={`drawer-menu-item submenu${
                  selectedId === sub.text ? " selected" : ""
                }`}
                onClick={() => handleSelect(sub)}
              >
                <span>{sub.text}</span>
              </div>
            ))}
          </div>
        )}
      </React.Fragment>
    ));

  return (
    <Drawer
      expanded={expanded}
      position="start"
      mode="push"
      className="main-drawer"
    >
      <DrawerContent>
        <nav className="drawer-menu">
          <Button
            icon="menu"
            onClick={() => setExpanded(!expanded)}
            className="toggle-button"
          />
          {renderMenuItems(menuItems)}
        </nav>
        <main className="container-main-body">
          {children} {/* Contenido de la ruta (Dashboard, etc.) */}
        </main>
      </DrawerContent>
    </Drawer>
  );
};
