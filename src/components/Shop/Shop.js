import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
const Shop = () => {
  // const [products] = useState([]);
  const [cart, setCart] = useState([]);
  const products = useLoaderData();

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
  const handleAddtoClick = (selecteddProduct) => {
    console.log(selecteddProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selecteddProduct.id);
    if (!exists) {
      selecteddProduct.quantity = 1;
      newCart = [...cart, selecteddProduct];
    } else {
      const rest = cart.filter((product) => product.id === selecteddProduct.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selecteddProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddtoClick={handleAddtoClick}
          ></Product>
        ))}
      </div>
      <h2>{products.length}</h2>
      <div
        className="cart-container"
        style={{ backgroundColor: "blue", top: "0px", position: "sticky" }}
      >
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
