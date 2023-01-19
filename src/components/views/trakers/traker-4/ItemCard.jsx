import React from 'react'

function Item({data}) {
  console.log(data);
  return (
    <div>
      {
        (!data) ? "Not Found" :data.map(item=> {
          return (
            <div className="card">
            <img src={item.strMealThumb} alt="imagen portada" />
            <h3>{item.strMeal}</h3>
        </div>
    
          )
        })
      }
      </div>
  )
}

export default Item;