import React from 'react';
import './assets/style.css';
import 'tailwindcss/tailwind.css';

const SbarroPizza = () => {
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
            <li>
              <a href="./index-apparel.html" className="hover:text-gray-600">ILLUSTRATIONS</a>
            </li>
            <li>
              <a href="./index-web.html" className="hover:text-gray-600">WEB DESIGN</a>
            </li>
            <li>
              <a href="./index-about.html" className="hover:text-gray-600">ABOUT</a>
            </li>
            <li>
              <a href="./images/Zolton_resume.pdf" className="hover:text-gray-600">RESUME</a>
            </li>
          </ul>
        </nav>

        <style jsx>{`
          nav ul li a {
            padding: 0 10px; /* Adjust the padding as needed */
            white-space: nowrap; /* Prevent line breaks */
            font-size: 20px; /* Adjust the font size as needed */
          }
        `}</style>
      </header>
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
          <img src="./images/SBARRO/logo for portfolio.png" className="w-300 h-200 object-cover rounded shadow-md" alt="final logo design" />
        </div>

        <div className="columns-3 p-1 md:p-7 m-1 md:m-7 flex flex-row gap-4">
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src="./images/SBARRO/logos-15-a.png" className="w-full h-full object-cover rounded shadow-md" alt="old sbarro logo reference" />
          </div>
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src="./images/SBARRO/logos-15-b.png" className="w-full h-full object-cover rounded shadow-md" alt="old sbarro logo reference" />
          </div>
          <div className="aspect-w-3 aspect-h-2 flex-grow">
            <img src="./images/SBARRO/sbarro-sketches.gif" className="w-full h-full object-cover rounded shadow-md" alt="gif of sketches, other iterations" />
          </div>
        </div>

        <p className="mb-3 text-center text-gray-600 mb-10 mt-2">
          Original Sbarro logo designs I referenced, and the beginning stages of my design process where you can see sketches and other iterations of the logo I explored as design solutions.
        </p>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src="./images/SBARRO/logos on different backgrounds-28.png" className="w-300 h-200 object-cover rounded shadow-md" alt="logo on diff backgrounds" />
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
          <img src="./images/SBARRO/SBARRO-23.png" className="w-300 h-200 object-cover rounded shadow-md" alt="logo on diff backgrounds" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Here, I explored the supportive pizza pattern illustration elements would look.
          </p>
        </div>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src="./images/SBARRO/brand-guide/cover page.png" className="w-300 h-200 object-cover rounded shadow-md" alt="brand guide book" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Here is the brand guide booklet that I put together for the client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/SBARRO/brand-guide/page 3,4.png" className="w-300 h-200 object-cover rounded shadow-md" alt="brand guide page 3+4" />
          <img src="./images/SBARRO/brand-guide/page 5,6.png" className="w-300 h-200 object-cover rounded shadow-md" alt="brand guide page 5+6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/SBARRO/brand-guide/page 7,8.png" className="w-300 h-200 object-cover rounded shadow-md" alt="brand guide page 7+8" />
          <img src="./images/SBARRO/brand-guide/page 9,10.png" className="w-300 h-200 object-cover rounded shadow-md" alt="brand guide page 9+10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/SBARRO/brand-guide/page 11,12.png" className="w-300 h-200 object-cover rounded shadow-md" alt="brand guide page 11+12" />
          <img src="./images/SBARRO/brand-guide/page 13,14.png" className="w-300 h-200 object-cover rounded shadow-md" alt="brand guide page 13+14" />
        </div>

        <div className="columns-1 pt-4">
          <img src="./images/SBARRO/brand-guide/page 15,16.png" className="w-300 h-200 object-cover rounded shadow-md" alt="brand guide page 15+16" />
        </div>

        <div className="flex justify-center">
          <div className="p-6 -mt-3">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/743827620?h=af27440a45" width="1120" height="670" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>

        <p className="mb-3 text-center text-gray-600 mb-10 mt-2">
          Here is the brand guide animated.
        </p>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src="./images/SBARRO/pizza box mockup with logo-16.png" className="w-300 h-200 object-cover rounded shadow-md" alt="pizza box mockup" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Above, I explored how the logo might look printed on the pizza box packaging.
          </p>
        </div>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src="./images/SBARRO/social media mockups-17.png" className="w-300 h-200 object-cover rounded shadow-md" alt="social media ad mockup" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Here are some mockups of how the new brand identity might look on social media advertisements.
          </p>
        </div>

        <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
          <img src="./images/SBARRO/app mockup.png" className="w-300 h-200 object-cover rounded shadow-md" alt="mobile app mockup" />
          <p className="mb-3 text-center text-gray-600 mt-2">
            Above is a mobile app design to make ordering on the go quick and easy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SbarroPizza;
