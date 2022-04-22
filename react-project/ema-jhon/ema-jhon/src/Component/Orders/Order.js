import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';


const Order = () => {
    const [products , setProducts] = useProducts();
    const [cart , setCart] = useCart(products);

    const handelRemoveProduct = product =>{
        console.log(product)
        const rest = cart.filter(pd=>pd.id !==product.id);
        setCart(rest);
    }
    return (
        <div className='shop-container'>
            <div>
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
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Order;