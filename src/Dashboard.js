// src/Dashboard.js
import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import './Dashboard.css';

function Dashboard({ user, onLogout }) {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Gestión de Productos</h1>
                <div className="user-info">
                    <span>Bienvenido, {user.nombre}</span>
                    <Button
                        look="primary"
                        onClick={onLogout}
                        icon="logout"
                    >
                        Cerrar Sesión
                    </Button>
                </div>
            </header>

            <main className="dashboard-content">
                <div className="welcome-card">
                    <h2>Dashboard Principal</h2>
                    <p>Has iniciado sesión exitosamente como: <strong>{user.usuario}</strong></p>
                    <p>Aquí puedes comenzar a gestionar tus productos.</p>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;