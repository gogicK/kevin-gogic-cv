import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;