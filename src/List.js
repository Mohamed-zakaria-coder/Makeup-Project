import React from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
const List = (props) => {
    return (
        <div className='list-container'>
            <NavLink to="Makeup-Project/" className='navLink' >
            <h2 onClick={props.showListComp}>Home </h2>
            </NavLink>
            <NavLink to="/categories" className='navLink' onClick={props.showListComp}>
            <h2>Categories </h2>
            </NavLink>
            <AiOutlineArrowUp className='list-top-arrow' onClick={props.showListComp}/>
        </div>
    );
}

export default List;
