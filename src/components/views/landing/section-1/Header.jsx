import React from 'react'
import '../section-1/Header.css';
import Navegation from '../../../views/landing/navbar/Navbar';
import Stayhome from '../../../atoms/Stayhome.jsx';


 function Header() {
  return (
    <header>
        <div className="cover ">
            <Navegation />
            <Stayhome />   
        </div>
    </header>
  )
}
export default Header;