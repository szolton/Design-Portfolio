import React from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

// Importing images
import oldLogos from '../assets/images/ROZIS/Old logos.png';
import rebrandLogo from '../assets/images/ROZIS/rozis rebrand logo stuff background-09.png';
import menuMockup from '../assets/images/ROZIS/menu-mockup.png';
import businessCards from '../assets/images/ROZIS/business_cards.png';
import websiteMockups from '../assets/images/ROZIS/website mockups new/website mockups.png';
import websiteMockupsA from '../assets/images/ROZIS/website mockups new/website mockups a.png';
import websiteMockupsB from '../assets/images/ROZIS/website mockups new/website mockups b.png';
import websiteMockupsC from '../assets/images/ROZIS/website mockups new/website mockups c.png';
import websiteMockupsD from '../assets/images/ROZIS/website mockups new/website mockups d.png';
import socialMediaAd1 from '../assets/images/ROZIS/rozistwitter-01.png';
import socialMediaAd2 from '../assets/images/ROZIS/rozistwitter-05.png';
import socialMediaAd3 from '../assets/images/ROZIS/rozistwitter-06.png';

const RoziBrandIdentity = () => {
  return (
    <>
      {/* Navigation Header Info Bar */}
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      {/* Rozi's Main Brand */}
      <div className="columns-1 p-5 md:p-10 m-5 md:m-10"> {/* Adjust padding for desktop and mobile */}
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Rozi's Brand Identity
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-5 md:mb-10"> {/* Adjust margin bottom for desktop and mobile */}
          A logo rebrand and collateral promotional materials for Rozi's Wine House using Adobe Illustrator, InDesign and Photoshop. The intention was to modernize the logo, website and a social media campaign by incorporating splashes of watercolor, a sense of elegance and fun, and a strong color palette. In this brand identity you will find print collateral like business cards and a menu, some social media marketing advertisements, and a website design. I wanted to tell a story through their history in the Greater Cleveland area and their updated logo.
        </p>
      </div>

      {/* Logo Video Presentation */}
      <div className="max-w-4xl mx-auto h-auto overflow-hidden rounded shadow-md">
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/839750448?h=8ee1d8682d" 
            width="100%" 
            height="auto" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="mb-3 text-center text-gray-600 mb-5 md:mb-10">A quick video of Rozi's new logo design presented in different shades and colors of the brand guide.</p>

      {/* Logo Presentation */}
      <div className="columns-1 p-5 md:p-10 m-5 md:m-10"> {/* Adjust padding for desktop and mobile */}
        <img src={oldLogos} className="w-300 h-200 object-cover rounded shadow-md mb-3 md:mb-10" alt="rozi's logos" />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">Their old, original logos I referenced.</p>
        <img src={rebrandLogo} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="rozi's logo" />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">The final design solution.</p>

        {/* Wine Menu */}
        <img src={menuMockup} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="wine menu mockup" />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">Wine Menu Printed Design. It uses subtle splashes of watercolor with a simple color palette that highlights the wines.</p>

        {/* Business Cards */}
        <img src={businessCards} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="business cards" />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">Business Cards for Rozi's. It helps demonstrate how the logo's flexibility and how it can be broken up but still be easily recognizable to the brand and its integrity.</p>

        {/* Website Mockups */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:hidden">
          <img src={websiteMockupsA} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="website design mockup" />
          <img src={websiteMockupsB} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="website design mockup" />
        </div>
        <p className="mb-3 text-center text-gray-600 mt-2">Here, is the landing page where you can scroll through the main highlights of the brand.</p>

        <div className="grid grid-cols-1 gap-4 mt-4">
        
          
          <img src={websiteMockupsC} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="website design mockup" />
          <p className="mb-3 text-center text-gray-600">Here, is where you can see how it would look when you hover over the navigation bar and when you click on the about page.</p>

          <img src={websiteMockupsD} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="website design mockup" />
       
        </div>
       
        {/* Social Media Ads */}
        <div className="grid grid-cols-1 gap-4 mt-4">
        <p className="mb-3 text-center text-gray-600 mt-2">Here, are some examples of social media instagram campaign ads I mocked up for them.</p>
     
          <img src={socialMediaAd1} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="social media instagram ads" />
          <img src={socialMediaAd2} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="social media instagram ads" />
          <img src={socialMediaAd3} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10" alt="social media instagram ads" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RoziBrandIdentity;
