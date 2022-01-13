import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Dish from './pages/Dish';
import List from './pages/List';
// Components
import Menu from './components/Menu/Menu';
import SubmitButton from './components/SubmitButton/SubmitButton';

const MarketListApp = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dish" element={<Dish />} />
                <Route path="/List" element={<List />} />
            </Routes>
            <SubmitButton />
        </>
    )
}

export default MarketListApp;
