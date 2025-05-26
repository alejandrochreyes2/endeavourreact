import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard";
import { AppDrawer } from "./AppDrawer";

function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div style={{ display: "flex" }}>
      {!isLoginPage && <AppDrawer>{children}</AppDrawer>}
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Otras rutas */}
    </Routes>
  );
}

export default App;
