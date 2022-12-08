import React from "react";

import './Properties.css'

import blocksImage from '../../../Images/blocks.png';

function Properties() {
    return (
      <div class="row properties">
          <div class="ContainerOne">
              <span>Більше 15</span><br/>
              <span>років на ринку</span>
          </div>
          <div className="ContainerOne">
              <span>Більше 2000</span><br/>
              <span>задоволених клієнтів</span>
          </div>
          <div className="ContainerOne">
              <span>Більше 30</span><br/>
              <span>видів виконуваних робіт</span>
          </div>
          <div className="ContainerOne">
              <img src={blocksImage} />
          </div>
      </div>
    );
}

export default Properties;