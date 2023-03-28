import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Packages from './Routes/Packages';
import Contact from './Routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='packages' element={<Packages />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
