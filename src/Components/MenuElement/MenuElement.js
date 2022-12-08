import React from 'react';

import './MenuElement.css'

function MenuElement(props) {
    return (
        <a className="menu-element" href={props.link.href}>{props.link.name}</a>
    );
}

export default MenuElement;