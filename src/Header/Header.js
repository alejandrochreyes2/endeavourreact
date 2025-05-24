import React from 'react';
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';

const Header = () => {
    return React.createElement(
        AppBar,
        null,
        React.createElement(
            AppBarSection,
            null,
            React.createElement('h2', { style: { margin: 0 } }, 'Mi App')
        ),
        React.createElement(AppBarSpacer, null),
        React.createElement(
            AppBarSection,
            null,
            React.createElement(Button, { themeColor: 'primary', fillMode: 'flat' }, 'Inicio'),
            React.createElement(Button, { fillMode: 'flat' }, 'Acerca de'),
            React.createElement(Button, { fillMode: 'flat' }, 'Contacto')
        ),
        React.createElement(AppBarSpacer, null),
        React.createElement(
            AppBarSection,
            null,
            React.createElement(Avatar, {
                type: 'image',
                shape: 'circle',
                size: 'small',
                src: 'https://via.placeholder.com/40'
            })
        )
    );
};

export default Header;
