import React from 'react'
import Symptom from './Symptom'

function Section1() {
  return (
    <div>
       <div className="Symptom">
        <Symptom
          titulo="Aches and pains"
          text="Fever is a Key symptom,experts say. Don't fixate an a number, but know it's really not a fiver until your temperature reaches at least 100."
          imagen="banner-right"
        />
        <Symptom
          titulo="Runny nose"
          text="People of all ages who experience fever and/or cough associated withdifficulty breathing/shortness of breath."
          imagen="banner-right"
        />
        <Symptom
          titulo="Sore throat"
          text="Older people,and those with underlying medical problems like high bloos pressure,heart and lung problems, diabetes,or cancer."
          imagen="banner-right"
        />
      </div>
    </div>
  )
}

export default Section1
