import "./App.css"
import Hero from "./Components/Hero/Hero";
import Navbar from './Components/Navbar/Navbar';
import Three from "./Components/Three/Three";
import Two from "./Components/Two/Two";

function App() {
  return (
    <div className="cont">
      <Navbar/>
      <Hero/>
      <Two/>
      <Three/>
    </div>
  );
}

export default App;
