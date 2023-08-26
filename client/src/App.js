import "./App.css"
import Hero from "./Components/Hero/Hero";
import Navbar from './Components/Navbar/Navbar';
import Two from "./Components/Two/Two";

function App() {
  return (
    <div className="cont">
      <Navbar/>
      <Hero/>
      <Two/>
    </div>
  );
}

export default App;
