import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <>
            <label className='menu-label' htmlFor='menu-toggle'></label>
            <input type='checkbox' className='menu-input' id='menu-toggle'/>
            <div className='menu-options'>
                <h1 className='menu-options__title'>Market List</h1>
            </div>
        </>
    )
}

export default Menu;
