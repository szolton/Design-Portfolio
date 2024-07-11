import React from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';

// Import your images
import logoPortfolio from '../assets/images/SBARRO/logo for portfolio.png';
import logoRefA from '../assets/images/SBARRO/logos-15-a.png';
import logoRefB from '../assets/images/SBARRO/logos-15-b.png';
import sketchesGif from '../assets/images/SBARRO/sbarro-sketches.gif';
import backgrounds from '../assets/images/SBARRO/logos on different backgrounds-28.png';
import brandGuideCover from '../assets/images/SBARRO/brand-guide/cover page.png';
import brandGuide34 from '../assets/images/SBARRO/brand-guide/page 3,4.png';
import brandGuide56 from '../assets/images/SBARRO/brand-guide/page 5,6.png';
import brandGuide78 from '../assets/images/SBARRO/brand-guide/page 7,8.png';
import brandGuide910 from '../assets/images/SBARRO/brand-guide/page 9,10.png';
import brandGuide1112 from '../assets/images/SBARRO/brand-guide/page 11,12.png';
import brandGuide1314 from '../assets/images/SBARRO/brand-guide/page 13,14.png';
import brandGuide1516 from '../assets/images/SBARRO/brand-guide/page 15,16.png';
import pizzaBoxMockup from '../assets/images/SBARRO/sbarro packaging-02.png';
import socialMediaMockups from '../assets/images/SBARRO/ig ad 2-02.png';
import appMockup from '../assets/images/SBARRO/more ig ads.png';

const SbarroPizza = () => {
  return (
    <div>
      {/* Navigation header info bar */}

      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Sbarro Rebranding Design
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          Together, I worked with Sbarro to create a new brand identity that captured their Italian roots with a modern, refreshed look that's fun and engaging. Using Adobe InDesign, Illustrator, Photoshop and AfterEffects, we created a brand identity with a clean, organic logo that's reflective of "A taste of Italy on the go." In this brand identity exploration, you will find the new logo for the company, some process sketches, a brand guide, a mobile app design, pizza box packaging, and social media campaign ads.
        </p>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src={logoPortfolio} className="w-300 h-200 object-cover rounded shadow-md" alt="final logo design" />
        </div>

        <div className="columns-3 p-1 md:p-7 m-1 md:m-7 flex flex-row gap-4">
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src={logoRefA} className="w-full h-full object-cover rounded shadow-md" alt="old sbarro logo reference" />
          </div>
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src={logoRefB} className="w-full h-full object-cover rounded shadow-md" alt="old sbarro logo reference" />
          </div>
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src={sketchesGif} className="w-full h-full object-cover rounded shadow-md" alt="gif of sketches, other iterations" />
          </div>
        </div>

        <p className="mb-3 text-center text-gray-600 mb-10 mt-2">
          Original Sbarro logo designs I referenced, and the beginning stages of my design process where you can see sketches and other iterations of the logo I explored as design solutions.
        </p>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src={backgrounds} className="w-300 h-200 object-cover rounded shadow-md" alt="logo on diff backgrounds" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Here, I explored how the logo would look against different backgrounds.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="p-6 -mt-3">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/745628232?h=0d3d1ad992" width="1120" height="670" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        <p className="-mb-8 text-center text-gray-600">
          <p className="mb-3 text-center text-gray-600 mb-10">A quick video animation of how the logo might look at the end of an advertisement.</p>
        </p>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src={pizzaBoxMockup} className="w-300 h-200 object-cover rounded shadow-md" alt="pizza box mockup" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Above, I explored how the logo might look printed on the pizza box packaging.
          </p>
        </div>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src={socialMediaMockups} className="w-300 h-200 object-cover rounded shadow-md" alt="social media ad mockup" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Here are some mockups of how the new brand identity might look on social media advertisements.
          </p>
        </div>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src={appMockup} className="w-300 h-200 object-cover rounded shadow-md" alt="mobile app mockup" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Above is a mobile app design to make ordering on the go quick and easy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SbarroPizza;
