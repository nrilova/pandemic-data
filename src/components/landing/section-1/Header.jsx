import React from 'react'
import '../../../components/landing/section-1/Header.css';
import Navegation from '../../../components/landing/navbar/Navbar';
import Stayhome from '../../../components/atoms/Stayhome.jsx';



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