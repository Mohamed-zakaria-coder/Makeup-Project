import React, {useState} from 'react';
import './File.css';
import Navbar from './Navbar';
import Footer from './Footer';
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import CategoriesProducts from './CategoriesProducts';
import SpecificProduct from './SpecificProduct';
function App() {
    const [showList, setShowList] = useState(false)
    function showListComp(){
      setShowList(prev => !prev)
    }
  return (
    <div className='container'>
        <Navbar showListComp={showListComp}/>
       {showList && <List showListComp={showListComp}/>}
       
       <Footer />
       <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/categories' element={<Categories/>} />
        <Route path='/products/:product_type' element={<CategoriesProducts/>} />
        <Route path= '/products/:product_type/:id' element={<SpecificProduct/>} />
        <Route path='*' element={<Home />} />
       </Routes>
       

    </div>
  )
}

export default App;
