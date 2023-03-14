import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "./Data";
export default function Categories() {
  const Navigate = useNavigate();
  return (
    <div className="categories-parent">
      {Data.map((category) => {
        return (
          <div
            class="card"
            onClick={() => Navigate(`/products/${category.product_type}`)}
          >
            <div class="product-img-container">
              <img src={category.img} alt={category.name} />
            </div>
            <h3>{category.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
