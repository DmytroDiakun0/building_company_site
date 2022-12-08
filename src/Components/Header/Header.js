import React from 'react';

import './Header.css';

import logo from '../../Images/site-logo.png';

import HorisontalMenu from '../HorisontalMenu/HorisontalMenu'

function Header() {

    const links = [
        {href: '/', name: 'Головна'},
        {href: '/repairing', name: 'Ремонт'},
        {href: '/construction', name: 'Будівництво'},
    ]

    return (
        <header className="header">
            <div className="brand">
                <div className="brand-logo">
                    <img src={logo} />
                </div>
            </div>
            <div className="header-button">
                <a href="/contact-us">Зв'язатися</a>
            </div>
            <div className="main-menu">
                <HorisontalMenu links={links}/>
            </div>
        </header>
    );
}

export default Header;