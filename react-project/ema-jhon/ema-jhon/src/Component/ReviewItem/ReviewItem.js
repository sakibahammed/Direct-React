import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name , price , shipping , quantity , img} = props.product
    return (
        <div className='review-item-container'>
           <div className='review-item'>
               <img src={img} alt="" />
           </div>
           <div className='review-item-details-container'>
                <div className="review-item-container">
                    <p className="product-name">{name}</p>
                    <p>price : <span>{price}</span></p>
                    <p><small>Shipping : {shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button>delete</button>
                </div>
           </div>
        </div>
    );
};

export default ReviewItem;