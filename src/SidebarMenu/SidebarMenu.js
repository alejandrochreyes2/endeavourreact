import React from "react";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import "./SidebarMenu.css";
import { useNavigate } from "react-router-dom";
import {
  faHome,
  faFolder,
  faCog,
  faFileAlt,
  faArchive,
  faSearch,
  faComment,
  faSignOutAlt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = [
  {
    text: "Inicio",
    icon: faHome,
    route: "/dashboard",
  },
  {
    text: "Radicación",
    icon: faFolder,
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
    icon: faCog,
    route: "/management",
  },
  {
    text: "Documentales",
    icon: faFileAlt,
    route: "/documentary",
  },
  {
    text: "Expedientes",
    icon: faArchive,
    route: "/records",
  },
  {
    text: "Buscadores",
    icon: faSearch,
    route: "/searchers",
  },
  {
    text: "Chat",
    icon: faComment,
    route: "/chat",
  },
  {
    text: "Cerrar Sesión",
    icon: faSignOutAlt,
    route: "/logout",
  },
];

// Recibe las props necesarias desde el componente padre
export default function SidebarMenu({
  expanded = false,
  selectedId = "Inicio",
  openSubmenus = {},
  onSelect,
  onLogout,
}) {
  const navigate = useNavigate();

  const handleSelect = (item) => {
    if (onSelect) {
      onSelect(item);
    }

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
          <FontAwesomeIcon icon={item.icon} className="menu-icon" />
          {expanded && <span className="menu-text">{item.text}</span>}
          {item.items &&
            (expanded ? (
              <FontAwesomeIcon
                icon={openSubmenus[item.text] ? faChevronUp : faChevronDown}
                className="submenu-toggle"
              />
            ) : null)}
        </div>
        {item.items && openSubmenus[item.text] && expanded && (
          <div className="drawer-submenu">
            {item.items.map((sub) => (
              <div
                key={sub.text}
                className={`drawer-menu-item submenu${
                  selectedId === sub.text ? " selected" : ""
                }`}
                onClick={() => handleSelect(sub)}
              >
                <span className="menu-text">{sub.text}</span>
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
        <nav className="drawer-menu">{renderMenuItems(menuItems)}</nav>
      </DrawerContent>
    </Drawer>
  );
}
