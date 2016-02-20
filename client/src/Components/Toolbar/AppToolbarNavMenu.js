import React from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';
import EventIcon from 'material-ui/lib/svg-icons/notification/event-note';
import SunIcon from 'material-ui/lib/svg-icons/image/wb-sunny';
import BookIcon from 'material-ui/lib/svg-icons/action/assignment-turned-in';

const menuStructure = [
    { key: 'about', label: 'About', route: '/about', icon: SunIcon },
    { key: 'event', label: 'Events', route: '/events', icon: EventIcon },
    { key: 'myReservations', label: 'Meine Reservierungen', route: '/myReservations', icon: BookIcon }
];

const AppToolbarNavMenu = () => (
    <IconMenu
        iconButtonElement={ <IconButton><MenuIcon /></IconButton> }>
        { menuStructure.map((menu) =>
            <MenuItem key={menu.key}
                  primaryText={menu.label}
                  leftIcon={<menu.icon />}
                  containerElement={<Link to={menu.route} />} />)
        }
    </IconMenu>
);

export default AppToolbarNavMenu;
