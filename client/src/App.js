import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Two from "./Components/Two/Two";
import Three from "./Components/Three/Three";
import Four from "./Components/Four/Four";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="cont">
      <Navbar />
      <Hero />
      <Two />
      <Three />
      <Four />
      <Footer />
    </div>
  );
}

export default App;
