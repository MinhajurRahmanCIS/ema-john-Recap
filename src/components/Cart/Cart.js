import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        //One way

      //  product.quantity = product.quantity || 1;
      
        // Second way
      // if( product.quantity === 0){
      //   product.quantity = 1;
      // }
        totalPrice = totalPrice + product.price* product.quantity ;
        quantity = quantity + product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*(10 / 100);
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <p>Select Item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${parseInt(grandTotal)}</h6>

        </div>
    );
};

export default Cart;