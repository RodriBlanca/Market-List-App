import React from 'react';
import './menu.css';

const Menu = () => {
    return (
        <>
            <input type='checkbox' className='menu-input' id='menu-toggle'/>
            <label 
                className='menu-label' htmlFor='menu-toggle'>
                    <span className='menu-label__line'></span>
            </label>
            <div className='menu-options'>
                <h1 className='menu-options__title'>Menu</h1>
                <ul>
                    <li>Dark / Light Mode</li>
                </ul>
            </div>
        </>
    )
}

export default Menu;
