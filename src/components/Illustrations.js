import React from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';


const Illustrations = () => {
  return (
    <div>
      {/* Navigation Header Info Bar */}
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
            padding: 0 10px;
            white-space: nowrap;
            font-size: 20px;
          }
        `}</style>
      </header>
      
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      {/* Illustration Main */}
      <div className="columns-1 md:p-20 md:m-20 sm:p-5">
        <h1 className="-mt-28" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Illustrations
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          Designs and illustrations created using Adobe Illustrator, InDesign, Photoshop, and Fresco. Composition, typography, and creative illustration were key components in creating these designs.
        </p>

        {/* Paramore Illustrated Collage */}
        <img src="./images/APPAREL/paramore-bag.png" className="max-w-full mx-auto h-auto object-cover rounded shadow-md p-8" style={{ width: '100%' }} alt="paramore bag mockup" />

        {/* Fall Out Boy and Pumpkin/Puppy Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/APPAREL/mockup.png" className="object-cover rounded shadow-md h-full" alt="mockup illustration" />
          <img src="./images/APPAREL/puppies mixer.png" className="object-cover rounded shadow-md h-full" alt="pumpkin puppy illustration" />
        </div>

        {/* Lovin Life Illustrations x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/APPAREL/lovin-life-fest.png" className="object-cover rounded shadow-md h-full mx-auto" alt="lovin life illustration" />
          <img src="./images/APPAREL/Lovin_Life_Photo_Collage.png" className="object-cover rounded shadow-md h-full" alt="lovin life illustration" />
        </div>

        {/* Cleveland Baseball, Paramore Cleveland, Homecoming Football */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="./images/APPAREL/cleveland-baseball.png" className="object-cover rounded shadow-md h-full" alt="cleveland baseball illustration" />
          <img src="./images/APPAREL/paramore-cle-mockup.png" className="object-cover rounded shadow-md h-full" alt="paramore cleveland illustration" />
          <img src="./images/APPAREL/homecoming-football-stadium.png" className="object-cover rounded shadow-md h-full" alt="homecoming football illustration" />
        </div>

        {/* Steel Vengeance Drawing */}
        <img src="./images/APPAREL/STEEVE.png" className="max-w-full mx-auto h-auto object-cover rounded shadow-md p-8 mt-4" style={{ width: '100%' }} alt="steel vengeance illustration" />

        {/* Kent State and Akron */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="./images/APPAREL/0d98ae77-212b-42c0-9c00-17eb2dc24491_rw_1920.png" className="object-cover rounded shadow-md h-full" alt="kent state bag illustration" />
          <img src="./images/APPAREL/3a1fbe17-b07b-4966-9ebc-a9d01fe4e5fb_rw_1920.png" className="object-cover rounded shadow-md h-full" alt="akron bag illustration" />
          <img src="./images/APPAREL/uakronshirts.png" className="object-cover rounded shadow-md h-full" alt="akron chinese new year illustration" />
        </div>

        {/* Paramore Detroit, Avocado Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/APPAREL/paramore detroit 2-01.png" className="object-cover rounded shadow-md h-full" alt="paramore detroit poster" />
          <img src="./images/APPAREL/avocados.png" className="object-cover rounded shadow-md h-full" alt="avocado illustration" />
        </div>

        {/* UA Greek Life Collage */}
        <img src="./images/APPAREL/UA Greek Life Collage Shirts 2023 VC-02.png" className="object-cover rounded shadow-md h-full mb-4 mt-4" alt="akron illustration for greek life" />

        {/* Paramore Art, Cedar Point Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/APPAREL/running out of time-01.png" className="object-cover rounded shadow-md h-full" alt="running out of time paramore illustration" />
          <img src="./images/APPAREL/cp poster 2 copy.png" className="object-cover rounded shadow-md h-full" alt="cedar point photo illustrated collage" />
        </div>

        {/* Iowa Football Stadium, House Illustration, House Drawing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src="./images/APPAREL/iowa.jpg" className="object-cover rounded shadow-md h-full" alt="iowa football stadium" />
          <img src="./images/APPAREL/house-sticker.png" className="object-cover rounded shadow-md h-full" alt="house illustration" />
          <img src="./images/APPAREL/tote.jpg" className="object-cover rounded shadow-md h-full" alt="one color house drawing" />
        </div>

        {/* Illustrated Collage */}
        <img src="./images/APPAREL/e1869b4f-92c1-4e96-baa4-0ba88ad8fd78_rw_1920.png" className="object-cover rounded shadow-md h-full mt-4" alt="illustrated collage" />

        {/* Fall House Sticker and Pumpkin Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/APPAREL/pike-halloween.png" className="object-cover rounded shadow-md h-full" alt="fall house illustration" />
          <img src="./images/APPAREL/pumpkin-halloween.png" className="object-cover rounded shadow-md h-full" alt="pumpkin illustration" />
        </div>

        {/* Indy Bar Crawl Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="./images/APPAREL/gamma phi watercolor copy.png" className="object-cover rounded shadow-md h-full" alt="gamma phi watercolor illustration" />
          <img src="./images/APPAREL/indy bar crawl.png" className="object-cover rounded shadow-md h-full" alt="bar crawl indy illustration" />
        </div>

        {/* Sigma Kappa Artsy Design */}
        <img src="./images/APPAREL/sigma kappa.png" className="object-cover rounded shadow-md h-full mb-4 mt-4" alt="sigma kappa artsy design" />
      </div>
    </div>
  );
};

export default Illustrations;
