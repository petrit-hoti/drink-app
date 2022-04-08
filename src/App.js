import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Drink from "./pages/Drink";
import About from "./pages/About";
import DrinksForSpecificLetter from "./pages/DrinksForSpecificLetter";
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/drinks" element={<Drinks/>} />
          <Route path="/drinks/:letter" element={<DrinksForSpecificLetter />} />
          <Route path="/drink/ingredients/:id" element={<Drink/>} />
          <Route path="/favourites" element={<Favourites/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
