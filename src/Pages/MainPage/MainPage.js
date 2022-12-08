import React from "react";

import './MainPage.css';

import MainPageHeader from "./MainPageHeader/MainPageHeader";
import Properties from "./Properties/Properties";
import BrandHistory from "./BrandHistory/BrandHistory";
import Services from "./Services/Services";
import Partners from "./Partners/Partners";
import Comments from "./Comments/Comments";

function MainPage() {
    return (
        <div className="main-page">
            <MainPageHeader/>
            <Properties/>
            <BrandHistory />
            <Services />
            <Partners />
            <Comments />
        </div>
    );
}

export default MainPage;