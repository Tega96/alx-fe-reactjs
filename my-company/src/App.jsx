import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes >
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}
export default App;