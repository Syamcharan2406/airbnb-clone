// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './components/style.css';
import Hero from './components/Hero';
import Card from './components/card';
import KatieImg from "./images/katie-zaferes.png";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img = {KatieImg}
        rating = "5.0"
        ratingCount = "6"
        country = "USA"
        text = "Life Lessons with Katie Zaferes"
        price = {136}      
      />
    </>
  );
}

export default App;
