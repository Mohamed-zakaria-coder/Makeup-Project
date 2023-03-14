import React, { useEffect, useState}  from 'react'
import {useNavigate } from 'react-router-dom'

export default function TopProducts() {
    const [topProductsData, setTopProductsData] = useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick")
        .then(res => res.json())
        .then(data => setTopProductsData(data))
         
    }, [])
     
  return (
    <div className='top-products-container'>
      <h2 className='top-products-heading'>TOP PRODUCTS</h2>
      <div className='top-products-info-parent'> 
      {topProductsData.map(product =>  {
        return (
          
            <div className='top-products-info' onClick={() => Navigate(`/products/${product.product_type}/${product.id}`)}>
                <div className='top-productsImg-container'>
                <img src={product.image_link} alt={product.name}/>
                </div>
                <h5 className='top-products-name'>{product.name}</h5>
                <div>Brand:{product.brand}</div>
                <div>Category:{product.category}</div>
                <div>${product.price}</div>
            </div>
        )
    })}
      </div>
    </div>
  )
}
