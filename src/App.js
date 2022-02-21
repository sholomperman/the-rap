import { Routes, Route } from "react-router-dom";
import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';
import Calender from './views/Calender';
import Donate from './views/Donate';
import Videos from './views/Videos';
import Apply from './views/Apply';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Calender" element={<Calender />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Apply" element={<Apply />} />
      </Routes>
    </div>
  );
}

export default App;
