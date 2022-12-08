import React from 'react';

import './HorisontalMenu.css'

import MenuElement from '../MenuElement/MenuElement'

function HorisontalMenu(props) {
    return (
        <div className="horisontal-menu">
            {props.links.map( (link) => {
                return(
                    <MenuElement link={link} />
                );
            })}
        </div>
    );
}

export default HorisontalMenu;