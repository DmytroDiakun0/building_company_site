import React from "react";

import houseImage from '../../Images/house.jpg';
import buildingImage from '../../Images/building.jpg';
import officeImage from '../../Images/office.jpg';
import shopImage from '../../Images/shop.jpg';

import './Repairing.css'

import Card from "../../Components/Card/Card";

function Repairing() {

    const repairing = [
        {href: '/repairing/house', src: houseImage, name: 'Ремонт квартири'},
        {href: '/repairing/building', src: buildingImage, name: 'Ремонт будинку'},
        {href: '/repairing/office', src: officeImage, name: 'Ремонт офісу'},
        {href: '/repairing/shop', src: shopImage, name: 'Ремонт магазину'}
    ]

    let elements = repairing.map( (card) => {
        return (
            <Card className="repairing-card">
                <a href={card.href}>
                    <img src={card.src}/>
                    <div>{card.name}</div>
                </a>
            </Card>
        );
    })

    return (
        <div className="repairing">
            <div className="row">
                {elements}
            </div>
        </div>
    );
}

export default Repairing;