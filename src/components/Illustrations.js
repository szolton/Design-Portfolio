import React from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';

// Importing images
import paramoreBag from '../assets/images/APPAREL/paramore-bag.png';
import mockup from '../assets/images/APPAREL/mockup.png';
import puppiesMixer from '../assets/images/APPAREL/puppies mixer.png';
import lovinLifeFest from '../assets/images/APPAREL/lovin-life-fest.png';
import lovinLifeCollage from '../assets/images/APPAREL/Lovin_Life_Photo_Collage.png';
import clevelandBaseball from '../assets/images/APPAREL/cleveland-baseball.png';
import paramoreCleMockup from '../assets/images/APPAREL/paramore-cle-mockup.png';
import homecomingFootball from '../assets/images/APPAREL/homecoming-football-stadium.png';
import steelVengeance from '../assets/images/APPAREL/STEEVE.png';
import kentStateBag from '../assets/images/APPAREL/0d98ae77-212b-42c0-9c00-17eb2dc24491_rw_1920.png';
import akronBag from '../assets/images/APPAREL/3a1fbe17-b07b-4966-9ebc-a9d01fe4e5fb_rw_1920.png';
import akronChineseNewYear from '../assets/images/APPAREL/uakronshirts.png';
import paramoreDetroit from '../assets/images/APPAREL/paramore detroit 2-01.png';
import avocados from '../assets/images/APPAREL/avocados.png';
import uaGreekLifeCollage from '../assets/images/APPAREL/UA Greek Life Collage Shirts 2023 VC-02.png';
import runningOutOfTime from '../assets/images/APPAREL/running out of time-01.png';
import cedarPointCollage from '../assets/images/APPAREL/cp poster 2 copy.png';
import iowaFootballStadium from '../assets/images/APPAREL/iowa.jpg';
import houseSticker from '../assets/images/APPAREL/house-sticker.png';
import houseDrawing from '../assets/images/APPAREL/tote.jpg';
import illustratedCollage from '../assets/images/APPAREL/e1869b4f-92c1-4e96-baa4-0ba88ad8fd78_rw_1920.png';
import fallHouseSticker from '../assets/images/APPAREL/pike-halloween.png';
import pumpkinIllustration from '../assets/images/APPAREL/pumpkin-halloween.png';
import gammaPhiWatercolor from '../assets/images/APPAREL/gamma phi watercolor copy.png';
import indyBarCrawl from '../assets/images/APPAREL/indy bar crawl.png';
import sigmaKappa from '../assets/images/APPAREL/sigma kappa.png';

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
        <img src={paramoreBag} className="max-w-full mx-auto h-auto object-cover rounded shadow-md p-8" style={{ width: '100%' }} alt="paramore bag mockup" />

        {/* Fall Out Boy and Pumpkin/Puppy Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={mockup} className="object-cover rounded shadow-md h-full" alt="mockup illustration" />
          <img src={puppiesMixer} className="object-cover rounded shadow-md h-full" alt="pumpkin puppy illustration" />
        </div>

        {/* Lovin Life Illustrations x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={lovinLifeFest} className="object-cover rounded shadow-md h-full mx-auto" alt="lovin life illustration" />
          <img src={lovinLifeCollage} className="object-cover rounded shadow-md h-full" alt="lovin life illustration" />
        </div>

        {/* Cleveland Baseball, Paramore Cleveland, Homecoming Football */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src={clevelandBaseball} className="object-cover rounded shadow-md h-full" alt="cleveland baseball illustration" />
          <img src={paramoreCleMockup} className="object-cover rounded shadow-md h-full" alt="paramore cleveland illustration" />
          <img src={homecomingFootball} className="object-cover rounded shadow-md h-full" alt="homecoming football illustration" />
        </div>

        {/* Steel Vengeance Drawing */}
        <img src={steelVengeance} className="max-w-full mx-auto h-auto object-cover rounded shadow-md p-8 mt-4" style={{ width: '100%' }} alt="steel vengeance illustration" />

        {/* Kent State and Akron */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src={kentStateBag} className="object-cover rounded shadow-md h-full" alt="kent state bag illustration" />
          <img src={akronBag} className="object-cover rounded shadow-md h-full" alt="akron bag illustration" />
          <img src={akronChineseNewYear} className="object-cover rounded shadow-md h-full" alt="akron chinese new year illustration" />
        </div>

        {/* Paramore Detroit, Avocado Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={paramoreDetroit} className="object-cover rounded shadow-md h-full" alt="paramore detroit poster" />
          <img src={avocados} className="object-cover rounded shadow-md h-full" alt="avocado illustration" />
        </div>

        {/* UA Greek Life Collage */}
        <img src={uaGreekLifeCollage} className="object-cover rounded shadow-md h-full mb-4 mt-4" alt="akron illustration for greek life" />

        {/* Paramore Art, Cedar Point Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={runningOutOfTime} className="object-cover rounded shadow-md h-full" alt="running out of time paramore illustration" />
          <img src={cedarPointCollage} className="object-cover rounded shadow-md h-full" alt="cedar point photo illustrated collage" />
        </div>

        {/* Iowa Football Stadium, House Illustration, House Drawing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src={iowaFootballStadium} className="object-cover rounded shadow-md h-full" alt="iowa football stadium" />
          <img src={houseSticker} className="object-cover rounded shadow-md h-full" alt="house illustration" />
          <img src={houseDrawing} className="object-cover rounded shadow-md h-full" alt="one color house drawing" />
        </div>

        {/* Illustrated Collage */}
        <img src={illustratedCollage} className="object-cover rounded shadow-md h-full mt-4" alt="illustrated collage" />

        {/* Fall House Sticker, Pumpkin Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={fallHouseSticker} className="object-cover rounded shadow-md h-full" alt="fall house sticker" />
          <img src={pumpkinIllustration} className="object-cover rounded shadow-md h-full" alt="pumpkin illustration" />
        </div>

        {/* Gamma Phi Watercolor, Indy Bar Crawl, Sigma Kappa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src={gammaPhiWatercolor} className="object-cover rounded shadow-md h-full" alt="gamma phi watercolor poster" />
          <img src={indyBarCrawl} className="object-cover rounded shadow-md h-full" alt="indy bar crawl poster" />
          <img src={sigmaKappa} className="object-cover rounded shadow-md h-full" alt="sigma kappa poster" />
        </div>
      </div>

      {/* Nav Footer */}
      <footer className="py-12 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Stephanie Zolton. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Illustrations;
