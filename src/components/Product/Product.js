import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" /> 
           <div className='product-info'>
           <h2>{name}</h2>
           <p><b>Price:</b> {price}</p>
           <p><b>Manufacturer:</b> {seller}</p>
           <p><b>Ratings:</b> {ratings}</p>
           </div>
           <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;