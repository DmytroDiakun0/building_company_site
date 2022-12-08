import React from "react";

import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-text">
                Copyright © 2022 Ремонтно-будівельна компанія «БудКомпані»
            </div>
            <div className="footer-link">
                <a href="/policy">Політика конфіденційності</a>
            </div>
        </div>
    );
}

export default Footer;