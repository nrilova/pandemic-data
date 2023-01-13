import './App.css';
import Navbar from '../src/components/landing/navbar/Navbar';
import Card from './components/landing/section-3/Card';
import CardReact from './components/landing/section-3/CardReact';
import Section from './components/landing/section-3/Section-3';
import Section4 from './components/landing/section-4/Section-4';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <CardReact />
      <Section />
      <Section4 />

    </div>
  );
}

export default App;
