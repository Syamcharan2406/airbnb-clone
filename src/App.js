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
            key={item.id}
            {...item}
            
        />
    )
})       

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
      </section>
    </>
  );
}

export default App;
