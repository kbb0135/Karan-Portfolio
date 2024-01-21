
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutme" element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
