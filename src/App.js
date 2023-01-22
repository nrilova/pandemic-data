import React from 'react';
import style from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/views/trakers/traker1/Cards';
import { fetchData } from './components/api/index';
import Basic from './components/atoms/Basic';
import  Header from '../src/components/views/landing/section-1/Header';
import Symptom from '../src/components/views/landing/section-1/Symptom';




class App extends React.Component {
  state={
    data:{},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});

  }
  
  render(){
    const {data} = this.state;

return(
<div className={style.container}>
      <Cards data={data}/>

    <div className="App">
      <Header />
      <Basic />
    </div> 
      <div className="Symptom">
        <Symptom
          titulo="Aches and pains"
          text="Fever is a Key symptom,experts say. Don't fixate an a number, but know it's really not a fiver until your temperature reaches at least 100."
          imagen="banner-right"
        />
        <Symptom
          titulo="Runny nose"
          text="People of all ages who experience fever and/or cough associated withdifficulty breathing/shortness of breath."
          imagen="banner-right-image"
        />
        <Symptom
          titulo="Sore throat"
          text="Older people,and those with underlying medical problems like high bloos pressure,heart and lung problems, diabetes,or cancer."
          imagen="banner-right"
        />
       
      </div>
     
     </div>
  
  );
  }
}

export default App;
