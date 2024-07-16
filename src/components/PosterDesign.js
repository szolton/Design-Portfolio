import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

// Importing images
import halloweenSign from '../assets/images/POSTERS/halloween sign.png';
import yardSigns from '../assets/images/POSTERS/EH Lebanon Yard Signs 2022 EDIT.png';
import paramorePoster from '../assets/images/POSTERS/paramore-columbus-poster.png';
import cedarPoster from '../assets/images/POSTERS/cp poster.jpg';
import agoraMockup from '../assets/images/POSTERS/AGORA MOCKUP.png';
import screenprintMockup from '../assets/images/POSTERS/banner copy.jpg';

const PosterDesign = () => {
  return (
    <div>
      {/* Navigation header info bar */}
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      {/* Poster designs */}
      <div className="columns-1 p-5 md:p-10 m-5 md:m-10">
        {/* Embassy Halloween signs */}
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Poster Designs
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          High quality artwork illustration designs created using Adobe Illustrator, Photoshop, InDesign, Fresco, and mixed media.
        </p>
        <img src={halloweenSign} className="w-300 h-200 object-cover rounded shadow-md mt-5 md:mt-0" alt="embassy halloween illustration sign" />
        <p className="text-center text-gray-600 mt-2 mb-4">
          A sign that I created for Embassy Healthcare Lebanon's Halloween Trunk or Treat Event
        </p>
        <img src={yardSigns} className="w-300 h-200 object-cover rounded shadow-md mt-5 md:mt-0" alt="embassy halloween illustration sign" />

        {/* Paramore Columbus poster */}
        <img src={paramorePoster} className="w-300 h-200 object-cover rounded shadow-md mt-5 md:mt-0" alt="paramore columbus poster" />
        <p className="mb-3 text-center text-gray-600 mt-2">
          A personal project where I designed a poster for the Paramore Tour 2023 Columbus date, it's part of a series.
        </p>

        {/* Cedar Point poster */}
        <img src={cedarPoster} className="w-300 h-200 object-cover rounded shadow-md mt-5 md:mt-0" alt="cedar point photo collage illustration" />
        <p className="mb-3 text-center text-gray-600 mt-2">
          An illustrative Photoshop Poster Design for Cedar Fair.
        </p>

        {/* Agora building drawing */}
        <img src={agoraMockup} className="w-300 h-200 object-cover rounded shadow-md mt-5 md:mt-0" alt="the agora building illustration" />
        <p className="mb-3 text-center text-gray-600 mt-2">
          An illustrative Poster Design Advertisement for The Agora in Cleveland.
        </p>

        {/* Cleveland screenprint mockup */}
        <img src={screenprintMockup} className="w-300 h-200 object-cover rounded shadow-md mt-5 md:mt-0" alt="cle screenprint mockup" />
        <p className="mb-3 text-center text-gray-600 mt-2">
          Cleveland Skyline Screenprints for a building in downtown Cleveland.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default PosterDesign;
