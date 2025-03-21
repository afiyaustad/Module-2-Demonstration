
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
