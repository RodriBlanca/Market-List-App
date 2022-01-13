import React from 'react';
import DishCreator from '../components/DishCreator/DishCreator';
import DishList from '../components/DishList/DishList';

const Home = () => {
    return (
        <div className='home'>
            <h2 className='home-title'>Dishies</h2>
            <DishList />
            <DishCreator />
        </div>
    )
}

export default Home;
