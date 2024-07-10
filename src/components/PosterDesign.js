// src/PosterDesign.js

import React from 'react';
import '../App.css';
import '../assets/style.css';


const PosterDesign = () => {
  return (
    <div>
      {/* Navigation header info bar */}
      <header className="nav-header bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="./index.html">
            <h1 style={{ fontFamily: 'Bebas Neue', fontSize: '90px' }}>Stephanie Zolton</h1>
          </a>
        </div>

        <nav className="mt-8">
          <ul className="flex">
            <li><a href="./index-apparel.html" className="hover:text-gray-600">ILLUSTRATIONS</a></li>
            <li><a href="./index-web.html" className="hover:text-gray-600">WEB DESIGN</a></li>
            <li><a href="./index-about.html" className="hover:text-gray-600">ABOUT</a></li>
            <li><a href="./images/Zolton_resume.pdf" className="hover:text-gray-600">RESUME</a></li>
          </ul>
        </nav>

        <style>
          {`
            /* Adjust the font size and spacing */
            nav ul li a {
              padding: 0 10px; /* Adjust the padding as needed */
              white-space: nowrap; /* Prevent line breaks */
              font-size: 20px; /* Adjust the font size as needed */
            }
          `}
        </style>
      </header>

      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      {/* Poster designs */}
      <div className="columns-1 p-10 m-10">
        {/* Embassy Halloween signs */}
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Poster Designs
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          High quality artwork illustration designs created using Adobe Illustrator, Photoshop, InDesign, Fresco, and mixed media.
        </p>
        <img src="./images/POSTERS/halloween sign.png" className="w-300 h-200 object-cover rounded shadow-md" alt="embassy halloween illustration sign" />
        <p className="text-center text-gray-600 mt-2 mb-4">
          A sign that I created for Embassy Healthcare Lebanon's Halloween Trunk or Treat Event
        </p>
        <img src="./images/POSTERS/EH Lebanon Yard Signs 2022 EDIT (1)-02.png" className="w-300 h-200 object-cover rounded shadow-md" alt="embassy halloween illustration sign" />

        {/* Paramore Columbus poster */}
        <img src="./images/POSTERS/paramore-columbus-poster.png" className="w-300 h-200 object-cover rounded shadow-md mt-5" alt="paramore columbus poster" />
        <p className="mb-3 text-center text-gray-600 mt-2">
          A personal project where I designed a poster for the Paramore Tour 2023 Columbus date, it's part of a series.
        </p>

        {/* Cedar Point poster */}
        <img src="./images/POSTERS/cp poster.jpg" className="w-300 h-200 object-cover rounded shadow-md mt-5" alt="cedar point photo collage illustration" />
        <p className="mb-3 text-center text-gray-600 mt-2">
          An illustrative Photoshop Poster Design for Cedar Fair.
        </p>

        {/* Agora building drawing */}
        <img src="./images/POSTERS/AGORA MOCKUP.png" className="w-300 h-200 object-cover rounded shadow-md mt-5" alt="the agora building illustration" />
        <p className="mb-3 text-center text-gray-600 mt-2">
          An illustrative Poster Design Advertisement for The Agora in Cleveland.
        </p>

        {/* Cleveland screenprint mockup */}
        <img src="./images/POSTERS/banner copy.jpg" className="w-300 h-200 object-cover rounded shadow-md mt-5" alt="cle screenprint mockup" />
        <p className="mb-3 text-center text-gray-600 mt-2">
          Cleveland Skyline Screenprints for a building in downtown Cleveland.
        </p>
      </div>
    </div>
  );
}

export default PosterDesign;
