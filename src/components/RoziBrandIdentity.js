import React, { useState, useEffect } from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

// Importing images
import oldLogos from '../assets/images/ROZIS/Old logos.webp';
import rebrandLogo from '../assets/images/ROZIS/rozis rebrand logo stuff background-09.webp';
import menuMockup from '../assets/images/ROZIS/menu-mockup.webp';
import businessCards from '../assets/images/ROZIS/business_cards.webp';
import websiteMockupsA from '../assets/images/ROZIS/website mockups new/website mockups a.webp';
import websiteMockupsB from '../assets/images/ROZIS/website mockups new/website mockups b.webp';
import websiteMockupsC from '../assets/images/ROZIS/website mockups new/website mockups c.webp';
import websiteMockupsD from '../assets/images/ROZIS/website mockups new/website mockups d.webp';
import socialMediaAd1 from '../assets/images/ROZIS/rozistwitter-01.webp';
import socialMediaAd2 from '../assets/images/ROZIS/rozistwitter-05.webp';
import socialMediaAd3 from '../assets/images/ROZIS/rozistwitter-06.webp';

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
      {/* Rozi's Main Brand */}
      <div className="p-3 sm:px-2 md:p-10 m-5 md:m-10">
        <main className="container mx-auto mt-0">
          {/* Outer container div with responsive padding and margin settings for different screen sizes */}
          <div className="md:p-20 sm:mx-8 md:mx-16 md:m-20 lg:mx-52">
            <h1
              className="mt-0 md:-mt-48 text-center"
              style={{
                fontFamily: 'Bebas Neue',
                color: '#6ac9cb',
                fontSize: '3rem',
                textAlign: 'center'
              }}
            >
              Rozi's Brand Identity
            </h1>

            <p className="mb-3 text-left text-gray-600 mb-5 md:mb-10">
              A logo rebrand and collateral promotional materials for Rozi's Wine House using Adobe Illustrator, InDesign and Photoshop.
               The intention was to modernize the logo, website and a social media campaign by incorporating splashes of watercolor, a sense of elegance 
               and fun, and a strong color palette. In this brand identity you will find print collateral like business cards and a menu, some social media 
               marketing advertisements, and a website design. I wanted to tell a story through their history in the Greater Cleveland area and their updated logo.
            </p>
          </div>

          {/* Logo Video Presentation */}
          <div className="max-w-full mx-auto h-auto overflow-hidden shadow-md">
  
  <div className="w-full sm:w-[640px] md:w-[720px] lg:w-[900px] mx-auto">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Logo Redesign</h2> {/* Title above the video */}
    <iframe
      title="vimeo-player"
      src="https://player.vimeo.com/video/839750448?h=8ee1d8682d"
      className="w-full h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
      frameBorder="0"
      allowFullScreen
    ></iframe>
      <p className="text-left text-gray-600 mt-3 mb-6 px-4 sm:px-3 mx-2">
    A quick video of Rozi's new logo design presented in different shades and colors of the brand guide.
  </p>
  </div>

</div>



          {/* Logo Presentation */}
          <div className="columns-1 p-5 md:p-10 m-5 md:m-10">
          <div className="flex justify-center px-0 md:px-6">
  <img
    src={oldLogos}
    className="w-96 h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="rozi's logos"
    onClick={() => handleMediaClick(oldLogos)}
  />
</div>




            <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">Their old, original logos I referenced.</p>

            <div className="flex justify-center px-0 md:px-3">
  <img
    src={rebrandLogo}
    className="w-[500px] h-auto object-cover rounded shadow-md cursor-pointer"
    alt="rozi's logo"
    onClick={() => handleMediaClick(rebrandLogo)}
  />
</div>



            <p className="mt-3 text-center text-gray-600 mb-5 md:mb-10">The final design solution.</p>

        
{/* Wine Menu */}
<div className="flex flex-col justify-center items-center px-0 md:px-6">
  <img
    src={menuMockup}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="wine menu mockup"
    onClick={() => handleMediaClick(menuMockup)}
  />




<p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10">
  Wine Menu Printed Design. It uses subtle splashes of watercolor with a simple color palette that highlights the wines.
</p>



</div>






            {/* Business Cards */}
            
            <div className="w-full flex flex-col items-center">
  <img
    src={businessCards}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="business cards"
    onClick={() => handleMediaClick(businessCards)}
  />
  <p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-[900px]">
    Business cards designed to give a fresh take on an old design to reflect the new branding and typography.
  </p>
</div>

<div className="w-full flex flex-col items-center">
  <img
    src={websiteMockupsA}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="business cards"
    onClick={() => handleMediaClick(businessCards)}
  />
  <p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-[900px]">
  Website mockups showing different pages. This one is the hero bar and landing page.
  </p>
</div>

<div className="w-full flex flex-col items-center">
  <img
    src={websiteMockupsB}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="business cards"
    onClick={() => handleMediaClick(businessCards)}
  />
  <p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-[900px]">
  This shows what the user would see if they swiped right on the screen for a happy hour advertisement.
  </p>
</div>

<div className="w-full flex flex-col items-center">
  <img
    src={websiteMockupsC}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="business cards"
    onClick={() => handleMediaClick(businessCards)}
  />
  <p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-[900px]">
  This shows the user scrolling through the navigation tab to the About page.
  </p>
</div>

<div className="w-full flex flex-col items-center">
  <img
    src={websiteMockupsD}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="business cards"
    onClick={() => handleMediaClick(businessCards)}
  />
  <p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-[900px]">
  This shows the user scrolling through the About page that explains the history and culture behinid the business.
  </p>
</div>

<div className="w-full flex flex-col items-center">
  <img
    src={socialMediaAd1}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="business cards"
    onClick={() => handleMediaClick(businessCards)}
  />
  <p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-[900px]">
  Here are a few social media ads mocked up. These ads use consistent branding, incorporate fun typography and feature a clean design to promote the wine house.
  </p>
</div>

<div className="w-full flex flex-col items-center">
  <img
    src={socialMediaAd2}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="business cards"
    onClick={() => handleMediaClick(businessCards)}
  />
  {/* <p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-[900px]">
  Here are a few social media ads mocked up. 
  </p> */}
</div>

<div className="w-full flex flex-col items-center">
  <img
    src={socialMediaAd3}
    className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
    alt="business cards"
    onClick={() => handleMediaClick(businessCards)}
  />
  {/* <p className="mb-8 text-left text-gray-600 mt-2 sm:mt-2 md:-mt-5 mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-[900px]">
  Here are a few social media ads mocked up. 
  </p> */}
</div>

            {/* Social Media Ads */}
           

            {/* Footer */}
            {/* <Footer /> */}
          </div>
        </main>
      </div>

      {/* Fullscreen Image Modal */}
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
