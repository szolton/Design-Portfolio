import React from 'react';
import '../assets/style.css'; // Assuming this is your custom CSS file
import 'tailwindcss/tailwind.css'; // Importing Tailwind CSS
import Footer from './Footer'; // Importing the Footer component

// Importing images (example import, ensure paths are correct)
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
    <>
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      {/* Illustration Main */}
      <div className="container mx-auto">
      <div className="p-5 sm:p-10">
        <h1 className="text-center mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb', fontSize: '48px' }}>
          Illustrations
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Designs and illustrations created using Adobe Illustrator, InDesign, Photoshop, and Fresco. Composition, typography, and creative illustration were key components in creating these designs.
        </p>

        {/* Paramore Illustrated Collage */}
        <img src={paramoreBag} className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8" style={{ maxWidth: '100%' }} alt="paramore bag mockup" />

        {/* Fall Out Boy and Pumpkin/Puppy Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={mockup} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="mockup illustration" />
          <img src={puppiesMixer} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="pumpkin puppy illustration" />
        </div>

        {/* Lovin Life Illustrations x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={lovinLifeFest} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="lovin life illustration" />
          <img src={lovinLifeCollage} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="lovin life illustration" />
        </div>

        {/* Cleveland Baseball, Paramore Cleveland, Homecoming Football */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src={clevelandBaseball} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="cleveland baseball illustration" />
          <img src={paramoreCleMockup} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="paramore cleveland illustration" />
          <img src={homecomingFootball} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="homecoming football illustration" />
        </div>

        {/* Steel Vengeance Drawing */}
        <img src={steelVengeance} className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8 mt-4" style={{ maxWidth: '100%' }} alt="steel vengeance illustration" />

        {/* Kent State and Akron */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src={kentStateBag} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="kent state bag illustration" />
          <img src={akronBag} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="akron bag illustration" />
          <img src={akronChineseNewYear} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="akron chinese new year illustration" />
        </div>

        {/* Paramore Detroit, Avocado Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={paramoreDetroit} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="paramore detroit poster" />
          <img src={avocados} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="avocado illustration" />
        </div>

        {/* UA Greek Life Collage */}
        <img src={uaGreekLifeCollage} className="mx-auto mb-4 max-w-full h-auto object-cover rounded shadow-md mt-4" alt="akron illustration for greek life" />

        {/* Paramore Art, Cedar Point Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={runningOutOfTime} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="running out of time paramore illustration" />
          <img src={cedarPointCollage} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="cedar point photo illustrated collage" />
        </div>

        {/* Iowa Football Stadium, House Illustration, House Drawing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src={iowaFootballStadium} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="iowa football stadium" />
          <img src={houseSticker} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="house sticker illustration" />
          <img src={houseDrawing} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="house drawing illustration" />
        </div>

        {/* Illustrated Collage, Fall House Sticker, Pumpkin Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <img src={illustratedCollage} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="illustrated collage" />
          <img src={fallHouseSticker} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="fall house sticker" />
          <img src={pumpkinIllustration} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="pumpkin illustration" />
        </div>

        {/* Gamma Phi Watercolor and Indy Bar Crawl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={gammaPhiWatercolor} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="gamma phi watercolor illustration" />
          <img src={indyBarCrawl} className="mx-auto max-w-full h-full object-cover rounded shadow-md" style={{ maxWidth: '100%' }} alt="indy bar crawl poster" />
        </div>

        {/* Sigma Kappa Illustration */}
        <img src={sigmaKappa} className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8 mt-4" style={{ maxWidth: '100%' }} alt="sigma kappa illustration" />
      </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default Illustrations;
