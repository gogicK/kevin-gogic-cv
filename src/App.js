import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navbar from './Navbar';
import TicToc from './routes/Game/TicToc';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Game/TicToc" element={<TicToc />} />
      </Routes>
    </>
  );
}
export default App;