import React from 'react';

import './Partners.css'

import googleLogo from '../../../Images/google-logo.png';
import samsungLogo from '../../../Images/Samsung-logo.png';
import audiLogo from '../../../Images/Audi-Logo.png';
import epamLogo from '../../../Images/EPAM-logo.png';
import appleLogo from '../../../Images/apple-logo.png';
import softserveLogo from '../../../Images/softserve-logo.png';
import arcLogo from '../../../Images/arcelormittal-logo.png';
import atbLogo from '../../../Images/atb-logo.png';
import epicenterLogo from '../../../Images/epicenter-logo.png';
import evaLogo from '../../../Images/Eva-logo.png';
import rgkLogo from '../../../Images/rgk-logo.png';
import microsoftLogo from '../../../Images/microsoft-logo.png';

function Partners() {

    const logos = [
        googleLogo,
        samsungLogo,
        audiLogo,
        epamLogo,
        appleLogo,
        softserveLogo,
        arcLogo,
        atbLogo,
        epicenterLogo,
        evaLogo,
        rgkLogo,
        microsoftLogo
    ]

    let elems = logos.map( (logo) => {
        return (
            <div className='logo'>
                <img src={logo}/>
            </div>
        );
    })

    return (
        <div className="partners">
            <div className="partners-title">
                <h2>Наші партнери</h2>
            </div>
            <div className="logos row">
                {elems}
            </div>
        </div>
    );
}

export default Partners;