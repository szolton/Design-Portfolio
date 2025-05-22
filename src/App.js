import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/style.css'; // Import your custom styles
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './components/Layout'; // Import the Layout component

import Miley from './components/Miley';
import Rozi from './components/RoziBrandIdentity';
import PosterDesign from './components/PosterDesign';
import Home from './components/Home';
import CIAImpactReport from './components/CIAImpactReport';
import Illustrations from './components/Illustrations';
import SbarroPizza from './components/SbarroPizza';
import WinterLinkMagazine from './components/WinterLinkMagazine';
import InteractiveDailyPlanner from './components/InteractiveDailyPlanner';
import About from './components/About';
import AlumniExhibition2023 from './components/AlumniExhibition2023';
// import WebHome from './components/WebDesign';
// import PasswordGenerator from './components/PasswordGenerator';
// import Planisphere from './components/Planisphere';
// import WebPlanner from './components/WebPlanner';
// import WorkdayCalendar from './components/WorkdayCalendar';
// import WebWeather from './components/WebWeather';
// import WebCodingQuiz from './components/WebCodingQuiz';
import ParamoreCollage from './components/ParamoreCollage';
import MCRBlackParade from './components/MCRBlackParade';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/CIAImpactReport" element={<CIAImpactReport />} />
          <Route path="/About" element={<About />} />
          <Route path="/Illustrations" element={<Illustrations />} />
          <Route path="/SbarroPizza" element={<SbarroPizza />} />
          <Route path="/WinterLinkMagazine" element={<WinterLinkMagazine />} />
          <Route path="/InteractiveDailyPlanner" element={<InteractiveDailyPlanner />} />
          <Route path="/Miley" element={<Miley />} />
          <Route path="/RoziBrandIdentity" element={<Rozi />} />
          <Route path="/PosterDesign" element={<PosterDesign />} />
          {/* <Route path="/WebDesign" element={<WebHome />} /> */}
          {/* <Route path="/PasswordGenerator" element={<PasswordGenerator />} /> */}
          {/* <Route path="/Planisphere" element={<Planisphere />} /> */}
          {/* <Route path="/WebPlanner" element={<WebPlanner />} /> */}
          {/* <Route path="/WorkdayCalendar" element={<WorkdayCalendar />} /> */}
          {/* <Route path="/WebWeather" element={<WebWeather />} /> */}
          {/* <Route path="/WebCodingQuiz" element={<WebCodingQuiz />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/ParamoreCollage" element={<ParamoreCollage />} />
          <Route path="/AlumniExhibition2023" element={<AlumniExhibition2023 />} />
          <Route path="/MCRBlackParade" element={<MCRBlackParade />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
