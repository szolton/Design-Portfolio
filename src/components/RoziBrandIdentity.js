import React, { useState, useEffect } from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

// Importing images
import oldLogos from '../assets/images/ROZIS/Old logos.png';
import rebrandLogo from '../assets/images/ROZIS/rozis rebrand logo stuff background-09.png';
import menuMockup from '../assets/images/ROZIS/menu-mockup.png';
import businessCards from '../assets/images/ROZIS/business_cards.png';
import websiteMockupsA from '../assets/images/ROZIS/website mockups new/website mockups a.png';
import websiteMockupsB from '../assets/images/ROZIS/website mockups new/website mockups b.png';
import websiteMockupsC from '../assets/images/ROZIS/website mockups new/website mockups c.png';
import websiteMockupsD from '../assets/images/ROZIS/website mockups new/website mockups d.png';
import socialMediaAd1 from '../assets/images/ROZIS/rozistwitter-01.png';
import socialMediaAd2 from '../assets/images/ROZIS/rozistwitter-05.png';
import socialMediaAd3 from '../assets/images/ROZIS/rozistwitter-06.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FullScreenImage = ({ src, onClose, prevImage, nextImage }) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose, prevImage, nextImage]);

  return (
    <div
      className="fixed inset-0 bg-red-800 bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose} // Close on overlay click
    >
      <button
        className="absolute top-4 right-4 text-white text-3xl"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          onClose();
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      {src.includes('vimeo.com') ? (
        <iframe
          src={src}
          className="w-full h-full max-w-screen-lg max-h-screen-lg"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video
        ></iframe>
      ) : (
        <img
          src={src}
          className="max-w-full max-h-full object-contain"
          alt="Full screen"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
        />
      )}
      <button
        className="absolute top-1/2 left-4 text-white text-3xl"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          prevImage();
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute top-1/2 right-4 text-white text-3xl"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          nextImage();
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

const RoziBrandIdentity = () => {
  const [fullScreenMedia, setFullScreenMedia] = useState(null);

  const mediaItems = [
    oldLogos,
    rebrandLogo,
    menuMockup,
    businessCards,
    websiteMockupsA,
    websiteMockupsB,
    websiteMockupsC,
    websiteMockupsD,
    socialMediaAd1,
    socialMediaAd2,
    socialMediaAd3,
    'https://player.vimeo.com/video/839750448' // Vimeo video link
  ];

  const handleMediaClick = (src) => setFullScreenMedia(src);
  const handleCloseFullScreen = () => setFullScreenMedia(null);

  const handlePrevMedia = () => {
    const currentIndex = mediaItems.indexOf(fullScreenMedia);
    const prevIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    setFullScreenMedia(mediaItems[prevIndex]);
  };

  const handleNextMedia = () => {
    const currentIndex = mediaItems.indexOf(fullScreenMedia);
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    setFullScreenMedia(mediaItems[nextIndex]);
  };

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
      <div className="mx-auto h-auto overflow-hidden rounded shadow-md p-5 md:p-10 max-w-full md:max-w-6xl"> {/* Adjust max width for desktop */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            title="vimeo-player" 
            src="https://player.vimeo.com/video/839750448?h=8ee1d8682d" 
            className="w-full h-full" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
        </div>
        <p className="mb-3 text-center text-gray-600 mb-5 md:mb-10">A quick video of Rozi's new logo design presented in different shades and colors of the brand guide.</p>
      </div>

      {/* Logo Presentation */}
      <div className="columns-1 p-5 md:p-10 m-5 md:m-10"> {/* Adjust padding for desktop and mobile */}
        <img src={oldLogos} className="w-300 h-200 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="rozi's logos" onClick={() => handleMediaClick(oldLogos)} />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">Their old, original logos I referenced.</p>
        <img src={rebrandLogo} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="rozi's logo" onClick={() => handleMediaClick(rebrandLogo)} />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">The final design solution.</p>

        {/* Wine Menu */}
        <img src={menuMockup} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="wine menu mockup" onClick={() => handleMediaClick(menuMockup)} />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">Wine Menu Printed Design. It uses subtle splashes of watercolor with a simple color palette that highlights the wines.</p>

        {/* Business Cards */}
        <img src={businessCards} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="business cards" onClick={() => handleMediaClick(businessCards)} />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">Business cards designed to give a fresh take on an old design to reflect the new branding and typography.</p>

        {/* Website Mockups */}
        <img src={websiteMockupsA} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="website mockups" onClick={() => handleMediaClick(websiteMockupsA)} />
        <img src={websiteMockupsB} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="website mockups" onClick={() => handleMediaClick(websiteMockupsB)} />
        <img src={websiteMockupsC} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="website mockups" onClick={() => handleMediaClick(websiteMockupsC)} />
        <img src={websiteMockupsD} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="website mockups" onClick={() => handleMediaClick(websiteMockupsD)} />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">Website mockups showing different pages including the homepage and the menu page.</p>

        {/* Social Media Ads */}
        <img src={socialMediaAd1} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="social media ad 1" onClick={() => handleMediaClick(socialMediaAd1)} />
        <img src={socialMediaAd2} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="social media ad 2" onClick={() => handleMediaClick(socialMediaAd2)} />
        <img src={socialMediaAd3} className="w-150 h-100 object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer" alt="social media ad 3" onClick={() => handleMediaClick(socialMediaAd3)} />
        <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">A few social media ad designs showcasing the rebrand.</p>
      </div>

      {fullScreenMedia && (
        <FullScreenImage
          src={fullScreenMedia}
          onClose={handleCloseFullScreen}
          prevImage={handlePrevMedia}
          nextImage={handleNextMedia}
        />
      )}
    </>
  );
};

export default RoziBrandIdentity;
