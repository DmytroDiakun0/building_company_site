import React from 'react';

import './Card.css';

function Card(props) {

    const styles = {
        width: props.width,
        height: props.height,
        backgroundColor: 'white'
    }

    return (
        <div className={"card " + props.className} style={styles}>
            {props.children}
        </div>
    );
}

export default Card;