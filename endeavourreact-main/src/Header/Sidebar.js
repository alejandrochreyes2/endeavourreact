// Sidebar.js
import React from "react";
import { Drawer } from "@progress/kendo-react-layout";
import { Link } from "react-router-dom";

const Sidebar = ({ expanded, onClose }) => {
  const menuItems = [
    { text: "Inicio", icon: "home", route: "/dashboard" },
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
    { text: "Gestión", icon: "cog", route: "/management" },
    { text: "Documentales", icon: "file", route: "/documentary" },
    { text: "Expedientes", icon: "archive", route: "/records" },
    { text: "Buscadores", icon: "search", route: "/searchers" },
    { text: "Chat", icon: "comment", route: "/chat" },
    { text: "Cerrar Sesión", icon: "logout", route: "/logout" },
  ];

  return (
    <Drawer
      expanded={expanded}
      position="start"
      mode="overlay"
      items={menuItems.map((item) => ({
        text: item.text,
        icon: item.icon,
        separator: false,
        selected: false,
        onClick: () => {
          onClose(); // Cierra el sidebar cuando se hace click
        },
        render: (props) => (
          <div>
            <Link to={item.route || "#"} className="k-drawer-item">
              {item.text}
            </Link>
            {item.items && (
              <ul className="k-drawer-subitems">
                {item.items.map((subItem) => (
                  <li key={subItem.text}>
                    <Link to={subItem.route}>{subItem.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ),
      }))}
      onOverlayClick={onClose}
    />
  );
};

export default Sidebar;
