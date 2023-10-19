import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className='cart-item'>
            <div className="cart-item-header">Cart Items</div>

            {cart.length === 0 && (<div className='cart-items-empty'>No items are added.</div>
            )}
            <div>
                {cart.map((item) => (
                    <div key={item.id} className='cart-item-list'>
                        <img className='cart-items-image' src={item.image} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};


