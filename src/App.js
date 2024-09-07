import './App.css';
import { Routes, Route } from "react-router-dom";
import CVA4 from "./routes/HomePage";
import About from "./routes/About";
import HomePage from "./routes/CVA4";
import Contact from "./routes/Contact";
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      {/** <Navbar />*/}
      <Routes>
        <Route path="/kevin-webdev" element={<HomePage />} />
        <Route path="/kevin-webdev/cvA4" element={<CVA4 />} />
        <Route path="/kevin-webdev/about" element={<About />} />
        <Route path="/kevin-webdev/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
