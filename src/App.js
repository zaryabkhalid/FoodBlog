import "./App.css";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
