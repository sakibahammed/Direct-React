import { faCake, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';


const Product = (props) => {
    const {addToCart} = props;
    
    const{name, img , seller ,  price , ratings} = props.product;

    
    // console.log(props)
    
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className="product-info">
            <h4>{name}</h4>
            <p>Price : {price}$</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Ratings : {ratings} stars</small></p>
            </div>
            <button onClick={()=> props.addToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

            
        </div>
    );
};

export default Product;