import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
// import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
  const [products, setProductsπ] = useProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      // console.log(addedProduct)
    }
    setCart(savedCart);
  }, [products]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const addToCart = (selectdProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectdProduct.id);
    if (!exists) {
      selectdProduct.quantity = 1;
      newCart = [...cart, selectdProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectdProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // const newCart = [...cart,selectdProduct];
    setCart(newCart);
    addToDb(selectdProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
        <Link to='/orders'>
          <button>Review Order</button>
        </Link>
        </Cart>
        
      </div>
    </div>
  );
};

export default Shop;
