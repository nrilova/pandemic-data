import React from 'react'
import '../atoms/Cought.css';

 function Cought(props) {
  return (
   
         <div>
              <img className="imagen-banner1"
              src={require(`../asset/images/${props.imagen}.png`)}
              alt='pulmones'/> 
            </div>
   
  )
}export default Cought;
