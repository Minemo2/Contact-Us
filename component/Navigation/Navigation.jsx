import React from 'react';
import styles from "./Navigation.module.css";

const path = "./images/Frame 2 1.png"
// console.log(styles);
const Navigation = () => {
  
  return (
    <nav className={`container ${styles.navigation}`} >
        <div className='logo'> 
            <img src={path} alt='brand logo' />
        </div>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Locations</li>
            <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navigation