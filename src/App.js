import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import TicToc from './routes/Game/TicToc';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tictoc" element={<TicToc />} />
      </Routes>
    </>
  );
}
export default App;