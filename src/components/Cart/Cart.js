import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let totalPrice = 0;
    for(const price of cart){
        totalPrice = totalPrice + price.price;
    }
    let ShippingCharge = 0;
    for(const shipping of cart){
        ShippingCharge = ShippingCharge + shipping.shipping;
    }
    const tax = totalPrice*(10 / 100);
    const grandTotal = totalPrice + ShippingCharge + tax;

    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <p>Select Item: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${ShippingCharge}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${parseInt(grandTotal)}</h6>

        </div>
    );
};

export default Cart;