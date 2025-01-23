import './App.css';
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Creations from './Pages/Creations';
import GiftIdeas from './Pages/GiftIdeas';
import Contact from './Pages/Contact';
import ScrollToTop from './Components/ScrollToTop';


const App = () => {
  return (
    <Router>
    <div className='appli'>
      <NavBar/>
      <ScrollToTop />
      <Routes>
            {/* Définissez vos routes ici */}
            <Route path="/" element={<Home />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/cadeaux" element={<GiftIdeas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
    </div>
    </Router>
  
  );
};

export default App;
