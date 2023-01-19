import React from 'react';
import Style from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Section2 from './components/views/landing/section-2/Section-2';
import Header from "../src/components/views/landing/section-1/Header";
import Symptom from "../src/components/views/landing/section-1/Symptom";
import Section3 from './components/views/landing/section-3/Section-3';
import Section4 from './components/views/landing/section-4/Section-4';
import Tracker3 from "./components/views/trackers/tracker-3/Tracker3";
import Table from './components/views/trackers/tracker-3/Table';
import Cards from './components/views/trackers/tracker-1/Cards';
import { fetchData } from './components/module/Apiconsum';





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
<div className={Style.container}>
      <Cards data={data}/>

    <div className="App">
      <Header />
      <Basic />
    </div> 

    <div className="App">
      <Header />

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
      <Cards/>
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
    <Tracker3 data={data}  />
    <Table data={data} />
    </div>
  );
}
}
export default App;
