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
        <Route path="/kevin-gogic-cv" element={<Home />} />
        <Route path="/kevin-gogic-cv/about" element={<About />} />
        <Route path="/kevin-gogic-cv/tictoc" element={<TicToc />} />
      </Routes>
    </>
  );
}
export default App;