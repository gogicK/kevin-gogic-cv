import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import HomePage from "./routes/HomePage";
import Contact from "./routes/Contact";
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/kevin-gogic-cv" element={<Home />} />
        <Route path="/kevin-gogic-cv/home" element={<HomePage />} />
        <Route path="/kevin-gogic-cv/about" element={<About />} />
        <Route path="/kevin-gogic-cv/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
