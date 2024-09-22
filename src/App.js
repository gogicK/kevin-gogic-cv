import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CVA4 from "./routes/CVA4";
import About from "./routes/About";
import HomePage from "./routes/HomePage";
import Contact from "./routes/Contact";
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/kevin-webdev" element={<HomePage />} />
          <Route path="/kevin-webdev/cvA4" element={<CVA4 />} />
          <Route path="/kevin-webdev/about" element={<About />} />
          <Route path="/kevin-webdev/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
