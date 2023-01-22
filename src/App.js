import React from "react";
import style from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/views/trakers/tracker-1/Cards";
import { fetchData } from "./components/api/index";
import Landing from "./components/views/landing/Landing";

// import Questions from './components/views/landing/section-5/Question';
class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={style.container}>
        <Cards data={data} />

        <div> 
          <Landing/>
        </div>
      </div>
    );
  }
}

export default App;
