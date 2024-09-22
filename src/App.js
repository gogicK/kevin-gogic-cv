import './App.css';
import { Routes, Route } from "react-router-dom";
import CVA4 from "./routes/CVA4";
import About from "./routes/About";
import HomePage from "./routes/HomePage";
import Contact from "./routes/Contact";
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/cvA4" element={<CVA4 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
