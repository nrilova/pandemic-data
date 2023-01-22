import React from 'react'
import '../section-1/Header.css';
import Navegation from '../../../views/landing/navbar/Navbar';
import Stayhome from '../../../atoms/Stayhome';
import Cought from '../../../atoms/Cought';

 function Header() {
  return (
    <header>
        <div className="cover ">
            <Navegation />
             <Cought 
            imagen="banner1" />
            <Stayhome />          
        </div>
    </header>
  )
}
export default Header;