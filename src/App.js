import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/style.css'; // Import your custom styles where you have Tailwind CSS
import './index.css';

import Miley from './components/Miley';
import Rozi from './components/RoziBrandIdentity';
import PosterDesign from './components/PosterDesign';
import WebPlanner from './components/WebPlanner';
import WebScheduler from './components/WebScheduler';
import Home from './components/Home';
import PrintMedia from './components/PrintMedia';
import Illustrations from './components/Illustrations';
import SbarroPizza from './components/SbarroPizza';
import Magazine from './components/Magazine';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/PrintMedia" element={<PrintMedia />} />
      <Route path="/SbarroPizza" element={<SbarroPizza />} />
      <Route path="/Magazine" element={<Magazine />} />
        <Route path="/Miley" element={<Miley />} />
        <Route path="/Rozi" element={<Rozi />} />
        <Route path="/PosterDesign" element={<PosterDesign />} />
        <Route path="/WebPlanner" element={<WebPlanner />} />
        <Route path="/WebScheduler" element={<WebScheduler />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
