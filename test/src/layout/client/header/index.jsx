import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss';
import { wishlistContext } from '../../../context/wishlist';
import { basketContext } from '../../../context/basket';
import MenuIcon from '@mui/icons-material/Menu';

const ClientHeader = () => {
  const {wishlist} = useContext(wishlistContext)
  const {basket} = useContext(basketContext)
  console.log(basket);
  
  let count = 0;
  basket && basket.map((b) => {
    count+= b.quantity
  })
  console.log(count);
  

  
  return (
    <>

      <section 
        id={styles.header} 
        style={{backgroundColor:"aqua", padding:"1.5rem 2rem", display:"flex", justifyContent:"space-between"}}
      >
        <div className="logo" style={{fontSize:"2rem"}}>
          React App 
        </div>
        <MenuIcon className={styles.menu}/>
        <ul style={{display:'flex', gap:'2rem', listStyle:'none', textDecoration:"none"} } className={styles.navul}>
          <li>
            <NavLink to={'/'} style={{textDecoration:"none"}}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={'/products'}>Products</NavLink>
          </li>
          <li>
            <NavLink to={'/wishlist'}>
              Wishlist
              <sup>{wishlist.length}</sup>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/basket'}>
              Basket
              <sup>{count}</sup>
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ClientHeader;
