import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';

const NavigationMenu = ({isOpen}) => (
    <LeftNav open={isOpen}>
        <MenuItem><Link to='/about'>About</Link></MenuItem>
        <MenuItem><Link to='/events'>Events</Link></MenuItem>
    </LeftNav>
);

export default NavigationMenu;
