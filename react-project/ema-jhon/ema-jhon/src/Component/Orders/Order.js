import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Order = () => {
    const [products , setProducts] = useProducts();
    const [cart , setCart] = useCart(products);

    const handelRemoveProduct = product =>{
        console.log(product)
        const rest = cart.filter(pd=>pd.id !==product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handelRemoveProduct = {handelRemoveProduct}
                    >
                    </ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart= {cart}>
                    <Link to='/inventory'>
                        <button>Proceed CheckOut</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;