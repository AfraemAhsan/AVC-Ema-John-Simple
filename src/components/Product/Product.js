import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddtoClick }) => {
  const { name, img, seller, price, rating } = product;

  return (
    <div className="product">
      <img src={img} style={{ objectFit: "cover" }} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: {price}</p>
        <p>
          <small>seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {rating}</small>
        </p>
      </div>
      <button onClick={() => handleAddtoClick(product)} className="btn-cart">
        <p className="btn-text">Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
