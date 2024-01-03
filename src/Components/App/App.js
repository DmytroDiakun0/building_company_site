import React from "react";
import {Routes, Route} from "react-router-dom";

import './App.css';

import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import MainPage from "../../Pages/MainPage/MainPage";
import Repairing from "../../Pages/Repairing/Repairing";
import Construction from "../../Pages/Construction/Construction";
import Policy from "../../Pages/Policy/Policy";
import Article from "../Article/Article";
import ContactUs from "../../Pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="app">
        <Header />
        <div className="main-content">
            <Routes>
                <Route path="/repairing/house" element={<Article/>} />
                <Route path="/repairing/building" element={<Article/>} />
                <Route path="/repairing/office" element={<Article/>} />
                <Route path="/repairing/shop" element={<Article/>} />
                <Route path="/construction/house" element={<Article/>} />
                <Route path="/construction/cottege" element={<Article/>} />
                <Route path="/repairing" element={<Repairing/>} />
                <Route path="/construction" element={<Construction/>} />
                <Route path="/policy" element={<Policy/>} />
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="/" element={<MainPage/>} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;