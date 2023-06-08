import React, { useState } from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false);
  const inTheCart = addCart ? "in-cart" : "";
  return (
    <li className={inTheCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        onClick={() => {
          console.log("asd");
          setAddCart(!addCart);
        }}
        className="add"
      >
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
