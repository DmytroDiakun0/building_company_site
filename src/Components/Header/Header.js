import React from 'react';

import './Header.css'

import HorisontalMenu from '../HorisontalMenu/HorisontalMenu'

function Header() {
    return (
        <div>
            <div className="brand"> BudCompany </div>
            <div className="login"> something </div>
            <HorisontalMenu />
        </div>
    );
}

export default Header;