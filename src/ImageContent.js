import React from 'react';
import img from "./images/1.00141963.png"
import img1 from "./images/pexels-emma-bauso-2253835.jpg"
import img2 from "./images/4.16ba0907.png"
import img3 from  "./images/2.a4899794.png"
import img4 from "./images/5.ee1c89f9.png"
import {AiOutlineArrowRight} from 'react-icons/ai'
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion'
const ImageContent = () => {

  return (
    <div className='ImageContent-container'>
      <div
        className='images-parent'
        >
        <motion.img src={img} alt="Makeup-img" className='img-1'  initial={{
        x: "-100vw"
      }}
        animate={{
        x: 0
      }}
        transition={{
        
        duration: 1.8    
        }}/>
        <motion.img src={img1} alt="Makeup-img" className='img-2' initial={{
        x: "-100vw"
      }}
        animate={{
        x: 0
      }}
        transition={{
        
        duration: 1.5    
        }}/>
        <motion.img src={img2} alt="Makeup-img" className='img-3' initial={{
        x: "-100vw"
      }}
        animate={{
        x: 0
      }}
        transition={{
        
        duration: 0.8  
        }}/>
        <motion.img src={img3} alt="Makeup-img" className='img-4' initial={{
        x: "-100vw"
      }}
        animate={{
        x: 0
      }}
        transition={{
        duration: 2.1 
        }}/>
        <motion.img src={img4} alt="Makeup-img" className='img-5' initial={{
        x: "-100vw"
      }}
        animate={{
        x: 0
      }}
        transition={{
        
        duration: 1.2    
        }}/>
      </div>
      <NavLink to="/categories" className="navLink">
        <p className='show-categories'>SHOW CATEGORIES
          <AiOutlineArrowRight className='arrow-icon'/></p>
      </NavLink>
    </div>
  );
}

export default ImageContent;
