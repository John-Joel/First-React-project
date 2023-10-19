import React, { useState } from 'react';
import './HeaderCss.css';
import { FaShoppingCart, FaCartPlus } from 'react-icons/fa';
const Header = (props, product, { ToggleCart }) => {
    const handleChange = (e) => {
        const searchTerm = e.target.value;
        props.setSearchTerm(searchTerm);
    };

    return (
        <>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                <div id="logo">
                    <FaShoppingCart className='img' />
                    <p id="logoName"><b><i>Shoppi</i></b></p>
                </div>
                <div>
                    <input type="text" placeholder="Search for products" onChange={() => handleChange(product)} />
                </div>
                <div id='registerBox'>
                    <button className='register'>Sign in</button>
                    <button className='register'>Log in</button>
                </div>

                <FaCartPlus id='icons' onClick={() => ToggleCart(product)} />
                {/* <p className='cartQuantity'>{size}</p> */}
            </header>
        </>
    );
};

export default Header;