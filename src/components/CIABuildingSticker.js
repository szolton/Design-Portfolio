import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import FullScreenImage from './FullScreenImage';

// Import your images

import ciaBuilding from '../assets/images/APPAREL/24-25_IA_Alumni spring appeal stickers_FINAL.webp';
import ciaBuildingProcess1 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-1.webp';
import ciaBuildingProcess2 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-2.webp';
import ciaBuildingProcess3 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-3.webp';
import ciaBuildingProcess4 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-4.webp';
import ciaBuildingProcess5 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-5.webp';
import ciaBuildingProcess6 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-6.webp';
import ciaBuildingProcess7 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-7.webp';
import ciaBuildingEmail from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia sticker email.webp';
import ciaBuildingEmail2 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 4.webp';
import ciaBuildingEmail3 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 5.webp';
import ciaBuildingEmail4 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 6.webp';




const CIABuildingSticker = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  // Store images in an array
  const images = [ciaBuilding, ciaBuildingEmail, ciaBuildingEmail2, ciaBuildingEmail3, ciaBuildingEmail4, ciaBuildingProcess1, ciaBuildingProcess2, ciaBuildingProcess3, ciaBuildingProcess4, ciaBuildingProcess5, ciaBuildingProcess6, ciaBuildingProcess7];

  const handlePrevImage = () => {
    if (!fullScreenImage) return;
    const currentIndex = images.indexOf(fullScreenImage);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setFullScreenImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    if (!fullScreenImage) return;
    const currentIndex = images.indexOf(fullScreenImage);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % images.length;
    setFullScreenImage(images[nextIndex]);
  };

  return (
    <div>
      {/* Navigation header info bar */}
   

      <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
        <h1 className="-mt-8 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
          CIA Alumni Building Illustration
        </h1>
        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 leading-relaxed">

          For this project, I was tasked to illustrate a typical builiding sticker to help fundraise for the Spring Appeal. The sticker was an incredibly successful fundraising campaign and returned immediate results, 
          $500 was donated right after the first email was sent. Complete results are not currently available.

         
      <br></br>
         <br></br>
          I started by sketching and researching the building, making sure the colors were CIA's brand. The simple 'CIA Alumni' text is nice because it ties the piece together and really encourages school pride in a fun way, and
          the purple text really helps the illustration pop.
          
        </p>

        {/* Paramore Image Display */}
        <img
  src={ciaBuilding}
  className="mx-auto w-full sm:w-[500px] md:w-[700px] lg:w-[500px] h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(ciaBuilding, 0)}
  alt="black parade art"
/>

<p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
       My final version of the artwork mocked up as a sticker. It uses bright colors and loose linework in a fun illustration style, and captures the building's character in a cute way. </p>


        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 leading-relaxed">
        Here's some of my work process. It includes design research such as sketching, the final color palette, different iterations, font explorations, and the final product deliverable. </p>

        <div className="flex flex-wrap justify-center gap-2">
  <img
    src={ciaBuildingProcess1}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess1, 0)}
    alt="cia building sketch process"
  />
  <img
    src={ciaBuildingProcess2}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess2, 0)}
    alt="cia building sketch process"
  />
  <img
    src={ciaBuildingProcess5}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess5, 0)}
    alt="cia building sketch process"
  />
</div>

<div className="flex flex-wrap justify-center gap-2 mt-3">
  <img
    src={ciaBuildingProcess6}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess6, 0)}
    alt="cia building sketch process"
  />
  <img
    src={ciaBuildingProcess4}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess4, 0)}
    alt="cia building sketch process"
  />
  <img
    src={ciaBuildingProcess3}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess3, 0)}
    alt="cia building sketch process"
  />
</div>








        <img
  src={ciaBuildingProcess7}
  className="mx-auto w-full sm:w-[500px] md:w-[700px] lg:w-[500px] h-auto object-cover rounded shadow-md cursor-pointer mt-3"
  onClick={() => handleImageClick(ciaBuildingProcess7, 0)}
  alt="black parade art"
/>


        <p className="mb-3 text-center text-gray-600 mb-10 mt-2">
This is the final artwork that went to print.
</p>
    
<h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 pl-8 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-36 2xl:pl-80">
  Email Campaign Promotions
</h2>

    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 mt-3 mx-4 2xl:mx-40">

  <img
    src={ciaBuildingEmail}
    className="w-full max-w-[400px] h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingEmail, 0)}
    alt="cia sticker promo email"
  />
  <img
    src={ciaBuildingEmail2}
    className="w-full max-w-[400px] h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingEmail2, 0)}
    alt="cia sticker promo email"
  />
  <img
    src={ciaBuildingEmail3}
    className="w-full max-w-[400px] h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingEmail3, 0)}
    alt="cia sticker promo email"
  />
</div>




<p className="mb-3 text-center text-gray-600 mb-10 mt-2">
These are examples of how the artwork was used for email campaigns to help fundraise.
</p>

     
      </div>

      {/* Full-screen image modal */}
      {fullScreenImage && (
        <FullScreenImage
          src={fullScreenImage}
          onClose={handleCloseFullScreen}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </div>
  );
};

export default CIABuildingSticker;
