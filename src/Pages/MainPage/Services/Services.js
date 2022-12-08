import React from 'react';

import './Services.css'

import serviceImage1 from '../../../Images/services-1.jpg';
import serviceImage2 from '../../../Images/services-2.jpg';
import serviceImage3 from '../../../Images/services-3.jpg';
import serviceImage4 from '../../../Images/services-4.jpg';
import serviceImage5 from '../../../Images/services-5.jpg';
import serviceImage6 from '../../../Images/services-6.jpg';

import Card from "../../../Components/Card/Card";

function Services() {

    const cards = [
        {img: serviceImage1, name: 'Монтаж натяжних стель'},
        {img: serviceImage2, name: 'Сантехнічні роботи'},
        {img: serviceImage3, name: 'Наклейка шпалер'},
        {img: serviceImage4, name: 'Малярські роботи'},
        {img: serviceImage5, name: 'Нанесення штукатурки'},
        {img: serviceImage6, name: 'Демонтаж перегородок'}
    ]

    let elements = cards.map( (card) => {
        return (
            <Card width={"28%"} height={320} className="services-card">
                <img src={card.img} />
                <div className="services-card-name">
                    {card.name}
                </div>
            </Card>
        );
    })

    return (
        <div className="services">
            <div className="services-title">
                <h2>Найпопулярніші види робіт</h2>
            </div>
            <div className="row">
                {elements}
            </div>
        </div>
    );
}

export default Services;