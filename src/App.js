// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import './components/style.css';
import Hero from './components/Hero';
import Card from './components/card';
// import KatieImg from "./images/katie-zaferes.png";
import data from './data';


function App() {

  const cards = data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})    

  return (
    <>
      <Navbar />
      <Hero />
      {cards}
    </>
  );
}

export default App;
