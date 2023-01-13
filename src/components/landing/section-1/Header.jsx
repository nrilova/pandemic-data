import React from 'react'
import '../../../components/landing/section-1/Header.css';
import Navegation from '../../../components/landing/navbar/Navbar';
import Stayhome from '../../../components/atoms/Stayhome';
import Cough from '../../../components/atoms/Cough';



 function Header() {
  return (
    <header>
        <div className="cover ">
            <Navegation />
            <Stayhome />  
            <Cough 
            image="banner-right-image1"
            />
        </div>
    </header>
  )
}
export default Header;