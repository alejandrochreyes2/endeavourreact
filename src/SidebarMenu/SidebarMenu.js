import React, { useState, useRef, useEffect } from "react";
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

export default function SidebarMenu({
  expanded = false,
  selectedId = "Inicio",
  openSubmenus = {},
  onSelect,
  onLogout,
}) {
  const navigate = useNavigate();
  const [floatingSubmenu, setFloatingSubmenu] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState({ top: 0, left: 0 });
  const [isSubmenuPinned, setIsSubmenuPinned] = useState(false);
  const menuItemRefs = useRef({});
  const hoverTimeoutRef = useRef(null);

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

    // Cerrar el submenú flotante al seleccionar un item de submenú
    setFloatingSubmenu(null);
    setIsSubmenuPinned(false);
  };

  const handleItemClick = (item, event) => {
    if (item.items) {
      // Si el item tiene submenús, alternar su visibilidad
      event.preventDefault();
      event.stopPropagation();

      if (floatingSubmenu && floatingSubmenu.text === item.text) {
        // Si ya está abierto, cerrarlo
        setFloatingSubmenu(null);
        setIsSubmenuPinned(false);
      } else {
        // Abrirlo y fijarlo
        const rect = event.currentTarget.getBoundingClientRect();
        setSubmenuPosition({
          top: rect.top,
          left: rect.right + 5,
        });
        setFloatingSubmenu(item);
        setIsSubmenuPinned(true);
      }
    } else {
      // Si no tiene submenús, navegar normalmente
      handleSelect(item);
    }
  };

  const handleMouseEnter = (item, event) => {
    // Limpiar timeout anterior
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (item.items && !isSubmenuPinned) {
      const rect = event.currentTarget.getBoundingClientRect();
      setSubmenuPosition({
        top: rect.top,
        left: rect.right + 5,
      });
      setFloatingSubmenu(item);
    }
  };

  const handleMouseLeave = () => {
    // Solo cerrar si no está fijado por click
    if (!isSubmenuPinned) {
      hoverTimeoutRef.current = setTimeout(() => {
        setFloatingSubmenu(null);
      }, 300); // Aumenté el delay a 300ms
    }
  };

  const handleSubmenuMouseEnter = () => {
    // Limpiar timeout si el mouse entra al submenú
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    // Solo cerrar si no está fijado por click
    if (!isSubmenuPinned) {
      hoverTimeoutRef.current = setTimeout(() => {
        setFloatingSubmenu(null);
      }, 150);
    }
  };

  // Cerrar submenú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        floatingSubmenu &&
        !event.target.closest(".floating-submenu") &&
        !event.target.closest(".drawer-menu-item")
      ) {
        setFloatingSubmenu(null);
        setIsSubmenuPinned(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [floatingSubmenu]);

  // Limpiar timeouts al desmontar
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const renderMenuItems = (items) =>
    items.map((item) => (
      <div
        key={item.text}
        ref={(el) => (menuItemRefs.current[item.text] = el)}
        className={`drawer-menu-item${
          selectedId === item.text ? " selected" : ""
        }${
          floatingSubmenu && floatingSubmenu.text === item.text
            ? " submenu-active"
            : ""
        }`}
        onClick={(e) => handleItemClick(item, e)}
        onMouseEnter={(e) => handleMouseEnter(item, e)}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={item.icon} className="menu-icon" />
        {expanded && <span className="menu-text">{item.text}</span>}
        {item.items && expanded && (
          <FontAwesomeIcon
            icon={
              isSubmenuPinned && floatingSubmenu?.text === item.text
                ? faChevronUp
                : faChevronDown
            }
            className="submenu-indicator"
          />
        )}
      </div>
    ));

  return (
    <>
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

      {/* Submenú flotante */}
      {floatingSubmenu && (
        <div
          className="floating-submenu"
          style={{
            position: "fixed",
            top: submenuPosition.top,
            left: submenuPosition.left,
            zIndex: 1000,
          }}
          onMouseEnter={handleSubmenuMouseEnter}
          onMouseLeave={handleSubmenuMouseLeave}
        >
          <div className="floating-submenu-content">
            <div className="floating-submenu-header">
              <span>{floatingSubmenu.text}</span>
            </div>
            {floatingSubmenu.items.map((subItem) => (
              <div
                key={subItem.text}
                className={`floating-submenu-item${
                  selectedId === subItem.text ? " selected" : ""
                }`}
                onClick={() => handleSelect(subItem)}
              >
                <span>{subItem.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
