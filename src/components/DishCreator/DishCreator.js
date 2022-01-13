import React, { useState } from 'react';
import './dishCreator.css';

const DishCreator = () => {

    const [dishInput, setDishInput] = useState('');

    const handleAddDish = (e) => {
        e.preventDefault();
        if(dishInput !== '') {
            console.log('Se agregó', dishInput);
            setDishInput('');
        }
    }

    const handleDishInput = (e) => {
        setDishInput(e.target.value);
    }

    return (
        <div className='dishCreator'>
            <h3 className='dishCreator-title'>Add a dish</h3>
            <form className='dishCreator-form' onSubmit={handleAddDish}>
                <input 
                    className='dishCreator-input' 
                    placeholder='Name of the dish...'
                    type='text'
                    value={dishInput}
                    onChange={handleDishInput}
                />
                <button className='dishCreator-button' type='submit' onClick={handleAddDish}/>
            </form>
        </div>
    )
}

export default DishCreator;
