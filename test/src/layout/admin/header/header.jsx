import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const AdminHeader = () => {
  return (
    <>
                    <section id={styles.header} style={{backgroundColor:"aqua",padding:"1.5rem 2rem",display:"flex",justifyContent:"space-between",
          }}>
              <div className="logo" style={{fontSize:"2rem"}}>
                  React App 
                              </div>
            <ul style={{display:'flex',gap:'2rem',listStyle:'none',textDecoration:"none"}}>
                <li>
                    <NavLink to={'/admin'}>Home</NavLink>     
                </li>
                <li>
                    <NavLink to={'/admin/addproducts'}>addProducts</NavLink>   
                </li>
                <li>
                    <NavLink to={'/admin/products'}>Products</NavLink>   
                </li>
            </ul>
    </section>
    </>
  )
}

export default AdminHeader