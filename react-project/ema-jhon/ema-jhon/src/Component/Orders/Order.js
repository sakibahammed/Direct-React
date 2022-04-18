import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';


const Order = () => {
    const [products , setProducts] = useProducts();
    const [cart , setCart] = useCart(products);
    return (
        <div className='shop-container'>
            <div>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    >
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Order;