import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import Footer from './Footer';
import FullScreenImage from './FullScreenImage'; // Import the FullScreenImage component

// Import your images
import logoPortfolio from '../assets/images/SBARRO/logo for portfolio.png';
import logoRefA from '../assets/images/SBARRO/logos-15-a.png';
import logoRefB from '../assets/images/SBARRO/logos-15-b.png';
import sketchesGif from '../assets/images/SBARRO/sbarro-sketches.gif';
import backgrounds from '../assets/images/SBARRO/logos on different backgrounds-28.png';
import pizzaBoxMockup from '../assets/images/SBARRO/sbarro packaging-02.png';
import socialMediaMockups from '../assets/images/SBARRO/ig ad 2-02.png';
import brandGuideCover from '../assets/images/SBARRO/brand-guide/cover page.png';
import brandGuidePg3 from '../assets/images/SBARRO/brand-guide/page 3,4.png';
import brandGuidePg5 from '../assets/images/SBARRO/brand-guide/page 5,6.png';
import brandGuidePg7 from '../assets/images/SBARRO/brand-guide/page 7,8.png';
import brandGuidePg9 from '../assets/images/SBARRO/brand-guide/page 9,10.png';
import brandGuidePg11 from '../assets/images/SBARRO/brand-guide/page 11,12.png';
import brandGuidePg13 from '../assets/images/SBARRO/brand-guide/page 13,14.png';
import brandGuidePg15 from '../assets/images/SBARRO/brand-guide/page 15,16.png';
import appMockup from '../assets/images/SBARRO/more ig ads.png';


const SbarroPizza = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  const images = [
    logoPortfolio,
    logoRefA,
    logoRefB,
    sketchesGif,
    backgrounds,
    pizzaBoxMockup,
    socialMediaMockups,
    appMockup,
    brandGuideCover,
    brandGuidePg3,
    brandGuidePg5,
    brandGuidePg7,
    brandGuidePg9,
    brandGuidePg11,
    brandGuidePg13,
    brandGuidePg15,
    
  ];

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(fullScreenImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setFullScreenImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(fullScreenImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setFullScreenImage(images[nextIndex]);
  };

  return (
    <div>
      {/* Navigation header info bar */}
      <h4 className="text-left p-5 pl-7 pt-5 mobile-padding" style={{ fontFamily: 'Alte Haas Grotesk, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
        <h1 className="-mt-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Sbarro Rebranding Design
        </h1>

        {/* Project Description and introduction */}
        <p className="mb-3 text-center text-gray-600 mb-10">
          Together, I worked with Sbarro to create a new brand identity that captured their Italian roots with a modern, refreshed look that's fun and engaging. Using Adobe InDesign, Illustrator, Photoshop and AfterEffects, we created a brand identity with a clean, organic logo that's reflective of "A taste of Italy on the go." In this brand identity exploration, you will find the new logo for the company, some process sketches, a brand guide, a mobile app design, pizza box packaging, and social media campaign ads.
        </p>

        <div className="columns-1 p-1 md:p-7 m-1 md:m-10">
          <img src={logoPortfolio} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="final logo design" onClick={() => handleImageClick(logoPortfolio)} />
        </div>

{/* original logos, sketches and references */}
        <div className="columns-3 p-1 md:p-4 m-1 md:m-4 flex flex-row gap-4">
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src={logoRefA} className="w-full h-full object-cover rounded shadow-md cursor-pointer" alt="old sbarro logo reference" onClick={() => handleImageClick(logoRefA)} />
          </div>
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src={logoRefB} className="w-full h-full object-cover rounded shadow-md cursor-pointer" alt="old sbarro logo reference" onClick={() => handleImageClick(logoRefB)} />
          </div>
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src={sketchesGif} className="w-full h-full object-cover rounded shadow-md cursor-pointer" alt="gif of sketches, other iterations" onClick={() => handleImageClick(sketchesGif)} />
          </div>
        </div>

        <p className="mb-3 text-center text-gray-600 mb-10 mt-2">
          Original Sbarro logo designs I referenced, and the beginning stages of my design process where you can see sketches and other iterations of the logo I explored as design solutions.
        </p>

        <div className="columns-1 p-1 md:p-10 m-1 md:m-10">
          <img src={backgrounds} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="logo on diff backgrounds" onClick={() => handleImageClick(backgrounds)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Here, I explored how the logo would look against different backgrounds.
          </p>
        </div>

{/* logo video animation */}
        <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              title="vimeo-player" 
              src="https://player.vimeo.com/video/745628232?h=0d3d1ad992" 
              width="1100" 
              height="625" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-3 mb-10">
            A quick video animation of how the logo might look at the end of an advertisement.
          </p>
        </div>
{/* Brand Guide */}

<div className="columns-1 p-1 md:p-10 m-1 md:m-10">
          <img src={brandGuideCover} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="Brand Guide Cover page" onClick={() => handleImageClick(brandGuideCover)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Here is the completed Brand Guide for Sbarro where I worked closely to incorporate the updated brand with company values.
          </p>
        </div>

        <div className="columns-1 pt-0 px-1 md:px-10 m-1 md:m-10">


          <img src={brandGuidePg3} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="Brand Guide Page 3, Mission statement" onClick={() => handleImageClick(brandGuidePg3)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
           
          </p>
        </div>

        <div className="columns-1 p-1 md:p-10 m-1 md:m-10">
          <img src={brandGuidePg5} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="Brand Guide Page 5, Tone and Message w Logo" onClick={() => handleImageClick(brandGuidePg5)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
           
          </p>
        </div>

        <div className="columns-1 pt-0 px-1 md:px-10 m-1 md:m-10">
          <img src={brandGuidePg7} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="Brand Guide Page 7, Clear Space and Inccorect uses" onClick={() => handleImageClick(brandGuidePg7)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
           
          </p>
        </div>

        <div className="columns-1 p-1 md:p-10 m-1 md:m-10">
          <img src={brandGuidePg9} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="Brand Guide Page 9, Tagline and Pattern illustrations" onClick={() => handleImageClick(brandGuidePg9)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
           
          </p>
        </div>

        <div className="columns-1 pt-0 px-1 md:px-10 m-1 md:m-10">
          <img src={brandGuidePg11} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="Brand Guide Page 11, Typography" onClick={() => handleImageClick(brandGuidePg11)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
           
          </p>
        </div>

        <div className="columns-1 p-1 md:p-10 m-1 md:m-10">
          <img src={brandGuidePg13} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="Brand Guide Page 13, Color Palette" onClick={() => handleImageClick(brandGuidePg13)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
           
          </p>
        </div>

        <div className="columns-1 pt-0 px-1 md:px-10 m-1 md:m-10">
          <img src={brandGuidePg15} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="Brand Guide Page 15, Photography" onClick={() => handleImageClick(brandGuidePg15)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
           
          </p>
        </div>








{/* Packaging */}
        <div className="columns-1 p-1 md:p-10 m-1 md:m-10">
          <img src={pizzaBoxMockup} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="pizza box mockup" onClick={() => handleImageClick(pizzaBoxMockup)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Above, I explored how the logo might look printed on the pizza box packaging.
          </p>
        </div>

        <div className="columns-1 p-1 md:p-10 m-1 md:m-10">
          <img src={socialMediaMockups} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="social media ad mockup" onClick={() => handleImageClick(socialMediaMockups)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Here are some mockups of how the new brand identity might look on social media advertisements.
          </p>
        </div>

        <div className="columns-1 p-1 md:p-10 m-1 md:m-10">
          <img src={appMockup} className="w-300 h-200 object-cover rounded shadow-md cursor-pointer" alt="mobile app mockup" onClick={() => handleImageClick(appMockup)} />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Above is a mobile app design to make ordering on the go quick and easy.
          </p>
        </div>
      </div>

      {fullScreenImage && (
        <FullScreenImage 
          src={fullScreenImage} 
          onClose={handleCloseFullScreen} 
          prevImage={handlePrevImage} 
          nextImage={handleNextImage} 
        />
      )}


    </div>
  );
};

export default SbarroPizza;
