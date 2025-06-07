import React from "react";
import { AppBar } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { Badge } from "@progress/kendo-react-indicators";
import { Avatar } from "@progress/kendo-react-layout";
import "./Header.css";

// Iconos SVG personalizados
const MenuSVG = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BellSVG = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M15 17h5l-1.405-1.405C18.79 14.79 18 13.395 18 12V8a6 6 0 10-12 0v4c0 1.395-.79 2.79-1.595 3.595L3 17h5m4 0v1a3 3 0 006 0v-1" />
  </svg>
);

const UserSVG = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7.5 7.5 0 0113 0" />
  </svg>
);

const Header = ({ toggleDrawer, isDrawerExpanded }) => {
  return (
    <AppBar position="top" className="k-appbar k-primary">
      <Button
        look="flat"
        onClick={toggleDrawer}
        className="k-menu-button"
        title={isDrawerExpanded ? "Ocultar menú" : "Mostrar menú"}
      >
        <MenuSVG />
      </Button>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span className="k-appbar-title">Dashboard</span>
        <img
          src="https://aerocivilsgdeatest.com/ControlDocTest/App_Images/Logos/Aerocivil.png"
          alt="Decoración"
          style={{
            width: "80px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </div>

      <div className="k-spacer" style={{ flex: 1 }}></div>

      <Button look="flat" className="k-notification-button">
        <Badge>
          <BellSVG />
        </Badge>
      </Button>

      <Button look="flat" className="k-user-button">
        <Avatar type="icon">
          <UserSVG />
        </Avatar>
      </Button>
    </AppBar>
  );
};

export default Header;
