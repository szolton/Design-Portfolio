import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Miley from './components/Miley';
import Rozi from './components/RozisBrandIdentity';
import PosterDesign from './components/PosterDesign';
import WebPlanner from './components/WebPlanner';
import WebScheduler from './components/WebScheduler';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/miley" element={<Miley />} />
        <Route path="/rozi" element={<Rozi />} />
        <Route path="/PosterDesign" element={<PosterDesign />} />
        <Route path="/WebPlanner" element={<WebPlanner />} />
        <Route path="/WebScheduler" element={<WebScheduler />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
