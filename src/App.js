import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/style.css'; // Import your custom styles
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Miley from './components/Miley';
import Rozi from './components/RoziBrandIdentity';
import PosterDesign from './components/PosterDesign';
import WebPlanner from './components/WebPlanner';
import WebScheduler from './components/WebScheduler';
import Home from './components/Home';
import PrintMedia from './components/PrintMedia';
import Illustrations from './components/Illustrations';
import SbarroPizza from './components/SbarroPizza';
import Magazine from './components/magazine';
import Laguna from './components/Laguna';
import WebHome from './components/WebDesign';
import WebWeather from './components/WebWeather';
import WebCodingQuiz from './components/WebCodingQuiz';
import About from './components/About';

import PasswordGenerator from './components/PasswordGenerator';
import Planisphere from './components/Planisphere';


function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <Header />
        <Routes>
          <Route path="/PrintMedia" element={<PrintMedia />} />
          <Route path="/About" element={<About />} />
          <Route path="/Illustrations" element={<Illustrations />} />
          <Route path="/SbarroPizza" element={<SbarroPizza />} />
          <Route path="/Magazine" element={<Magazine />} />
          <Route path="/Laguna" element={<Laguna />} />
          <Route path="/Miley" element={<Miley />} />
          <Route path="/RoziBrandIdentity" element={<Rozi />} />
          <Route path="/PosterDesign" element={<PosterDesign />} />
          <Route path="/WebDesign" element={<WebHome />} />
          <Route path="/WebPlanner" element={<WebPlanner />} />
          <Route path="/WebScheduler" element={<WebScheduler />} />
          <Route path="/WebWeather" element={<WebWeather />} />
          <Route path="/WebCodingQuiz" element={<WebCodingQuiz />} />
          <Route path="/" element={<Home />} />
          <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
          <Route path="/Planisphere" element={<Planisphere />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
