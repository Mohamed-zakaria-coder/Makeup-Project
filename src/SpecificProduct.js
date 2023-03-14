import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const SpecificProduct = () => {
  const idParam = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://makeup-api.herokuapp.com/api/v1/products/${Number(
        idParam.id
      )}.json`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [idParam.id]);

  return (
    <>
    
        <div>
          <motion.div
            className="specific-product"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="main-content-parent">
              <h2>{products.name}</h2>
              <img src={products.api_featured_image} alt={products.name} />
            </div>
            <div className="product-category item">{products.category}</div>
            <div className="product-color-parent item">
              {products.product_colors &&
                products.product_colors.map((product) => {
                  return (
                    <div key={product.id}>
                      <div
                        className="product-color"
                        style={{
                          backgroundColor: product.hex_value,
                        }}
                      ></div>
                    </div>
                  );
                })}
            </div>
            {products.price && <div className="product-price item">Price:{products.price}$</div>} 
            {products.brand &&<div className="product-brand item">Brand:{products.brand}</div> } 
            <p className="product-description item">{products.description}</p>
          </motion.div>
        </div>
      ;
    </>
  );
};

export default SpecificProduct;
