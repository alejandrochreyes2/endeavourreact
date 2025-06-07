import React, { useState } from "react";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router-dom";
import "./SidebarMenu.css";

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
  {
    text: "Gestión",
    icon: "cog",
    route: "/management",
  },
  {
    text: "Documentales",
    icon: "file",
    route: "/documentary",
  },
  {
    text: "Expedientes",
    icon: "archive",
    route: "/records",
  },
  {
    text: "Buscadores",
    icon: "search",
    route: "/searchers",
  },
  {
    text: "Chat",
    icon: "comment",
    route: "/chat",
  },
  {
    text: "Cerrar Sesión",
    icon: "logout",
    route: "/logout",
  },
];

export default function MainLayout({ children, user, onLogout }) {
  const [expanded, setExpanded] = useState(true);
  const [selectedId, setSelectedId] = useState("Inicio");
  const [openSubmenus, setOpenSubmenus] = useState({}); // <-- nuevo estado
  const navigate = useNavigate();

  const handleSelect = (item) => {
    setSelectedId(item.text);
    if (item.route) {
      if (item.route === "/logout") {
        onLogout && onLogout();
      } else {
        navigate(item.route);
      }
    } else if (item.items) {
      // Toggle submenú
      setOpenSubmenus((prev) => ({
        ...prev,
        [item.text]: !prev[item.text],
      }));
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
          {item.items && (
            <span
              className={`submenu-toggle ${
                openSubmenus[item.text] ? "open" : ""
              }`}
            >
              ▾
            </span>
          )}
        </div>
        {item.items && openSubmenus[item.text] && (
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
    <div className="container-main-layout">
      <Drawer
        expanded={expanded}
        position="start"
        mode="push"
        className="main-drawer"
      >
        <DrawerContent>
          <nav className="drawer-menu">{renderMenuItems(menuItems)}</nav>
          {/* <main className="container-main-body">{children}</main> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
