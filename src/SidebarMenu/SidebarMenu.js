import React, { useState } from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';
import './SidebarMenu.css';

const menuItems = [
    {
        text: 'Inicio',
        icon: 'home',
        route: '/dashboard',
    },
    {
        text: 'Radicación',
        icon: 'folder',
        items: [
            { text: 'Recibidos', route: '/filing/received' },
            { text: 'Internos', route: '/filing/internal' },
            { text: 'Enviados', route: '/filing/sent' },
            { text: 'Masivos', route: '/filing/massive' },
            { text: 'Rápidos', route: '/filing/quick' }
        ]
    },
    {
        text: 'Gestión',
        icon: 'cog',
        route: '/management'
    },
    {
        text: 'Documentales',
        icon: 'file',
        route: '/documentary'
    },
    {
        text: 'Expedientes',
        icon: 'archive',
        route: '/records'
    },
    {
        text: 'Buscadores',
        icon: 'search',
        route: '/searchers'
    },
    {
        text: 'Chat',
        icon: 'comment',
        route: '/chat'
    },
    {
        text: 'Cerrar Sesión',
        icon: 'logout',
        route: '/logout'
    }
];

export default function MainLayout({ children, user, onLogout }) {
    const [expanded, setExpanded] = useState(true);
    const [selectedId, setSelectedId] = useState('Inicio');
    const navigate = useNavigate();

    const handleSelect = (item) => {
        setSelectedId(item.text);
        if (item.route) {
            if (item.route === '/logout') {
                onLogout && onLogout();
            } else {
                navigate(item.route);
            }
        }
    };

    // Renderiza submenús si existen
    const renderMenuItems = (items) =>
        items.map((item) => (
            <React.Fragment key={item.text}>
                <div
                    className={`drawer-menu-item${selectedId === item.text ? ' selected' : ''}`}
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
                                className={`drawer-menu-item submenu${selectedId === sub.text ? ' selected' : ''}`}
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
            {/* Header */}
            <AppBar>
                <AppBarSection>
                    <Button icon="menu" fillMode="flat" onClick={() => setExpanded(!expanded)} />
                </AppBarSection>
                <AppBarSection>
                    <img src="/img/logocontrol.svg" alt="Logo-ControlDoc" style={{ height: 40 }} />
                </AppBarSection>
                <AppBarSpacer style={{ flex: 1 }} />
                <AppBarSection>
                    <span>{user?.UserName}</span>
                </AppBarSection>
                <AppBarSection>
                    <Button icon="logout" fillMode="flat" onClick={onLogout} title="Cerrar sesión" />
                </AppBarSection>
            </AppBar>

            {/* Sidebar */}
            <Drawer
                expanded={expanded}
                position="start"
                mode="push"
                className="main-drawer"
            >
                <DrawerContent>
                    <nav className="drawer-menu">
                        {renderMenuItems(menuItems)}
                    </nav>
                    <main className="container-main-body">
                        {children}
                    </main>
                </DrawerContent>
            </Drawer>

            {/* Footer */}
            <footer className="container-main-footer">
                <p className="container-main-footer__footer-text m-0">
                    <strong>V-1.0.0</strong>
                    {' | '}
                    <a href="/terms" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
                    {' | '}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
                    {' | '}
                    <span>© ControlDoc</span>
                </p>
            </footer>
        </div>
    );
}