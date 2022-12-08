import React from "react";

import './Construction.css'
import houseImage from "../../Images/house-build1.jpg";
import cottegeImage from "../../Images/cottege-build1.jpg";
import Card from "../../Components/Card/Card";

function Construction() {
    const construction = [
        {href: '/construction/house', src: houseImage, name: 'Будівництво будинків'},
        {href: '/construction/cottege', src: cottegeImage, name: 'Будівництво котеджів'}
    ]

    let elements = construction.map( (card) => {
        return (
            <Card className="construction-card">
                <a href={card.href}>
                    <img src={card.src}/>
                    <div>{card.name}</div>
                </a>
            </Card>
        );
    })

    return (
        <div className="construction">
            <div className="row">
                {elements}
            </div>
        </div>
    );
}

export default Construction;