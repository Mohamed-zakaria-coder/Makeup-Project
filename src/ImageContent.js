import React from 'react';
import img from './images/makeup1.png'
import img2 from './images/makeup4.png'
import img3 from './images/makeup3.jpg'
import img4 from './images/makeup2.png'
import img5 from './images/makeup5.png'
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
        <motion.img src={img3} alt="Makeup-img" className='img-2' initial={{
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
        <motion.img src={img4} alt="Makeup-img" className='img-4' initial={{
        x: "-100vw"
      }}
        animate={{
        x: 0
      }}
        transition={{
        duration: 2.1 
        }}/>
        <motion.img src={img5} alt="Makeup-img" className='img-5' initial={{
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
