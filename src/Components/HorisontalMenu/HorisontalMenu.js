import React from 'react';

import './HorisontalMenu.css'

import MenuElement from '../MenuElement/MenuElement'

function HorisontalMenu() {
    return (
        <div className="horisontal-menu">
            <MenuElement />
            <MenuElement />
            <MenuElement />
        </div>
    );
}

export default HorisontalMenu;