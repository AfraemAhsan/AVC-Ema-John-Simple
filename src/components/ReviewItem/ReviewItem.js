import React from "react";

const ReviewItem = ({ product, removehandle }) => {
  const { id, name, price, quantity, img } = product;
  return (
    <div className="review-item" style={{ display: "flex" }}>
      <div>
        <img style={{ width: "91px" }} src={img} alt="" />
      </div>
      <div className="review-details-container" style={{ display: "flex" }}>
        <div className="review-details">
          <p>{name}</p>
          <p>{price} </p>
          <p> {quantity} </p>
        </div>
        <div className="delete-container">
          <button onClick={() => removehandle(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
