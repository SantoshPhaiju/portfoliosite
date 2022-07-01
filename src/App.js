// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>

      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/protfolio' element={<Portfolio />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
