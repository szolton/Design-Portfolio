// src/components/RoziBrandIdentity.js
import React from 'react';
import '../assets/style.css';

const RoziBrandIdentity = () => {
  return (
    <>
      {/* Navigation Header Info Bar */}
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
      </header>

      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      {/* Rozi's Main Brand */}
      <div className="columns-1 p-10 m-10">
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Rozi's Brand Identity
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          A logo rebrand and collateral promotional materials for Rozi's Wine House using Adobe Illustrator, InDesign and Photoshop. The intention was to modernize the logo, website and a social media campaign by incorporating splashes of watercolor, a sense of elegance and fun, and a strong color palette. In this brand identity you will find print collateral like business cards and a menu, some social media marketing advertisements, and a website design. I wanted to tell a story through their history in the Greater Cleveland area and their updated logo.
        </p>
      </div>

      {/* Logo Video Presentation */}
      <div className="flex justify-center">
        <div className="p-6 -mt-12 shadow-md">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/839750448?h=8ee1d8682d" width="1200" height="675" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
      <p className="mb-3 text-center text-gray-600 mb-10">A quick video of Rozi's new logo design presented in different shades and colors of the brand guide.</p>

      {/* Logo Presentation */}
      <div className="columns-1 p-10 m-10">
        <img src="./images/ROZIS/Old logos.png" className="w-300 h-200 object-cover rounded shadow-md" alt="rozi's logos" />
        <p className="mt-3 text-center text-gray-600 mb-10">Their old, original logos I referenced.</p>
        <img src="./images/ROZIS/rozi's rebrand logo stuff background-09.png" className="w-150 h-100 object-cover rounded shadow-md" alt="rozi's logo" />
        <p className="mt-3 text-center text-gray-600 mb-10">The final design solution.</p>

        {/* Wine Menu */}
        <img src="./images/ROZIS/menu-mockup.png" className="w-150 h-100 object-cover rounded shadow-md" alt="wine menu mockup" />
        <p className="mt-3 text-center text-gray-600 mb-10">Wine Menu Printed Design. It uses subtle splashes of watercolor with a simple color palette that highlights the wines.</p>

        {/* Business Cards */}
        <img src="./images/ROZIS/business_cards.png" className="w-150 h-100 object-cover rounded shadow-md" alt="business cards" />
        <p className="mt-3 text-center text-gray-600 mb-10">Business Cards for Rozi's. It helps demonstrate how the logo's flexibility and how it can be broken up but still be easily recognizable to the brand and its integrity.</p>

        {/* Website Mockups */}
        <img src="./images/ROZIS/website mockups new/website mockups.png" className="w-150 h-100 object-cover rounded shadow-md" alt="website design" />
        <p className="mt-3 text-center text-gray-600 mb-10">The website redesigned -- it comes with a pop-up modal on the landing page.</p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src="./images/ROZIS/website mockups new/website mockups a.png" className="w-150 h-100 object-cover rounded shadow-md" alt="website design mockup" />
          <img src="./images/ROZIS/website mockups new/website mockups b.png" className="w-150 h-100 object-cover rounded shadow-md" alt="website design mockup" />
        </div>
        <p className="mb-3 text-center text-gray-600 mt-2">Here, is the landing page where you can scroll through the main highlights of the brand.</p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src="./images/ROZIS/website mockups new/website mockups c.png" className="w-150 h-100 object-cover rounded shadow-md" alt="website design mockup" />
          <img src="./images/ROZIS/website mockups new/website mockups d.png" className="w-150 h-100 object-cover rounded shadow-md" alt="website design mockup" />
        </div>
        <p className="mb-3 text-center text-gray-600 mt-2">Here, is where you can see how it would look when you hover over the navigation bar and when you click on the about page.</p>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <img src="./images/ROZIS/rozistwitter-01.png" className="w-150 h-100 object-cover rounded shadow-md" alt="social media instagram ads" />
          <img src="./images/ROZIS/rozistwitter-05.png" className="w-150 h-100 object-cover rounded shadow-md" alt="social media instagram ads" />
          <img src="./images/ROZIS/rozistwitter-06.png" className="w-150 h-100 object-cover rounded shadow-md" alt="social media instagram ads" />
        </div>
        <p className="mb-3 text-center text-gray-600 mt-2">Here, are some examples of social media instagram campaign ads I mocked up for them.</p>
      </div>
    </>
  );
};

export default RoziBrandIdentity;
