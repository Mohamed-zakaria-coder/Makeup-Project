import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Data from './Data'; 
import { motion } from 'framer-motion'
const CategoriesProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const params = useParams();
  const Navigate = useNavigate()
  const [loading,
    setLoading] = useState(false)
  const [products,
    setProducts] = useState([])
  useEffect(() => {
    setLoading(true)
    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${params.product_type}`)
      .then(res => res.json())
      .then(data => ((setFilteredProducts(data), setProducts(data))))
    setLoading(false)
    setSelectCategory('all')
    setSelectBrand('all')
  }, [params.product_type])
  
  function HandleFilters(){
      if(selectBrand !== "all"){
        setFilteredProducts(products.filter(product => product.brand === selectBrand)
        )
      }else{
        setFilteredProducts(products)
      }
      if(selectCategory !== "all"){
        setFilteredProducts(products.filter(product => product.category === selectCategory)
        )
      }
      if(selectCategory !== "all" && selectBrand !=="all"){
        setFilteredProducts(products.filter(product => product.category === selectCategory && product.brand === selectBrand))
      }
  }
 
  const [selectCategory,
    setSelectCategory] = useState('')
  const [selectBrand,
    setSelectBrand] = useState('')
  function ChangeCategory(e) {
    setSelectCategory(e.target.value)
    
  }
  function ChangeBrand(e) {
    setSelectBrand(e.target.value)
    
  }
  const filterProducts = products.filter(prod => prod.product_type === params.product_type)
  const filterCategroy = new Set(filterProducts.map(product => product.category))
  const filterBrand = new Set(filterProducts.map(product => product.brand))
  const productsPageHeading = Data.filter(prod => prod.name.toLowerCase() === params.product_type)

  return (
    <div className='category-products-container'>
      <hr></hr>
      { productsPageHeading.map(product => {
        return (
          <h3 className='product-page-name'>{product.name}s</h3>
        )
      })}
      <div className='select-parent'>
        <div class="select-brand-parent">
          <label htmlFor="select-brand" className='select-brand-label'>Brand</label>
          <select onChange={ChangeBrand} className="select-brand" value={selectBrand}>
            <option value='all'>All</option>
            {([...filterBrand].filter(prod => prod != null).map(product => {
              return (
                <option>{product}</option>
              )
            }))}

          </select>
        </div>
      <div className='filter-button-parent'>
        <motion.button class="filter-button" onClick={HandleFilters} 
        whileHover={{
          scale: 1.1,
          transition: {
            yoyo: Infinity
          }
        }}
        >Filter</motion.button>
        </div>
        <div className='select-category-parent'>
          <label htmlFor="select-category" className='select-category-label'>Category</label>
          <select
            
            onChange={ChangeCategory}
            value={selectCategory}
            className="select-category">
            <option value='all'>All</option>

            {([...filterCategroy].filter(prod => prod != null).map(product => {
              return (
                <option>{product}</option>
                )
              }))}
          </select>
        </div>
      </div>
      <div className='products-container'>

        {loading
          ? <div className='loading'>
              "Loading..."
            </div>
          : ''}
        {filteredProducts.map(product => {
            return (
              <div className='products-parent'>
                <motion.div initial= {{y : '100vh'}} animate= {{y : 0}} transition={{duration: 0.3}}
                  class="products-card"
                  onClick={() => Navigate(`/products/${product.product_type}/${product.id}`)}>
                  <div className='img-container'>
                    <img src={product.api_featured_image} alt={product.name}/></div>
                  <p className='product-name product'>{product.name}</p>
                  <p className='product-brand product'>Brand:{product.brand}</p>
                  <p className='product-category product'>Category:{product.category}</p>
                  <p className='product-price product'>Price:{product.price}$</p>
                </motion.div>
              </div>
            )
            })}
      </div>
    </div>
  );
}

export default CategoriesProducts;
