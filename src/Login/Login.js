import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (usuario === "admin" && password === "123456") {
      navigate("/dashboard");
    } else {
      Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: "Usuario o contraseña incorrectos.",
        confirmButtonColor: "#007bff",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          'url("https://aerocivilsgdeatest.com/ControlDocTest/App_Images/Fondos/imgControlDoc.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          width: "300px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="https://aerocivilsgdeatest.com/ControlDocTest/App_Images/Logos/Aerocivil.png"
            alt="Logo Aerocivil"
            style={{ width: "100px", height: "auto" }}
          />
        </div>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Iniciar Sesi&#243;n
        </h2>

        <div
          style={{ color: "blue", marginBottom: "15px", textAlign: "center" }}
        >
          AMBIENTE DE PRUEBA
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Usuario - Login</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Contrase&#241;a:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="button"
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          INGRESAR AL SISTEMA
        </button>

        <button
          type="button"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          INFORMACI&#211;N
        </button>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <img
            src="https://aerocivilsgdeatest.com/ControlDocTest/App_Images/Logos/logocontroldoc.png"
            alt="Logo ControlDoc"
            style={{ width: "100px", height: "auto" }}
          />
        </div>

        <div
          style={{ textAlign: "center", marginTop: "10px", fontSize: "12px" }}
        >
          2025V1-TFS-13557
        </div>
      </form>
    </div>
  );
}

export default Login;
