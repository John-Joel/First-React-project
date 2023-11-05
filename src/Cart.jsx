import React from 'react';
import "./Cart.css"

const Cart = ({ cart, handleRemoveProduct, handleAddProduct, handleDeleteItem, convertToINR }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <div className='cart-item'>
            <h3 className="cart-item-header">Cart Items</h3>
            {cart.length === 0 ? (<p className='emptyTitle'>Your cart is empty.</p>
            ) : (
                <div id='cart-container'>
                    {cart.map((item) => (
                        <>
                            <div key={item.id} className='cart-item-list'>
                                <div className='cartImg'>
                                    <img src={item.images[0]} alt={item.title} className='cart-items-image' />
                                </div>
                                <div>
                                    <p className='cart-items-name'>{item.title}</p>
                                    <p>Price: &#8377;{((convertToINR(item.price)) *
                                        (1 - (item.discountPercentage / 100))).toFixed(2)}</p>
                                </div>
                                <div className='cart-items-function'>
                                    <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                                    <div>{item.quantity}</div>
                                    <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                                    <button className="cart-delete-item" onClick={() => handleDeleteItem(item)}>Delete</button>
                                </div>
                                <div className='cart-item-price'>&#8377;{((convertToINR(item.price)) *
                                    (1 - (item.discountPercentage / 100))).toFixed(2) * item.quantity}</div>
                            </div>
                            <hr></hr>
                        </>



                    ))}
                    <hr />
                    <div className='total-container'>
                        <div className='total'>Total
                            ({cart.length})</div>
                        <div>&#8377;{(totalPrice * 80)}</div>
                    </div>
                </div>

            )
            }
        </div >
    )
}

// {
//     <div className='cart-items-total-price-name'>
//         Total price
//         <div className='cart-items-total-price'>${totalPrice}</div>
//     </div>
// }

export default Cart;
