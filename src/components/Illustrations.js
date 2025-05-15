import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Importing images
import paramoreBag from '../assets/images/APPAREL/paramore-bag.webp';
import fobMockup from '../assets/images/APPAREL/mockup.webp';
import puppiesMixer from '../assets/images/APPAREL/puppies.webp';
import lovinLifeFest from '../assets/images/APPAREL/lovin-life-fest.webp';
import lovinLifeCollage from '../assets/images/APPAREL/Lovin_Life_Photo_Collage.webp';
import clevelandBaseball from '../assets/images/APPAREL/cleveland-baseball.webp';
import paramoreCleMockup from '../assets/images/APPAREL/paramore-cle-mockup.webp';
import homecomingFootball from '../assets/images/APPAREL/homecoming-football-stadium.webp';
import steelVengeance from '../assets/images/APPAREL/STEEVE.webp';
import kentStateBag from '../assets/images/APPAREL/0d98ae77-212b-42c0-9c00-17eb2dc24491_rw_1920.webp';
import akronBag from '../assets/images/APPAREL/3a1fbe17-b07b-4966-9ebc-a9d01fe4e5fb_rw_1920.webp';
import akronChineseNewYear from '../assets/images/APPAREL/uakronshirts.webp';
import paramoreDetroit from '../assets/images/APPAREL/paramore_detroit.webp';
import avocados from '../assets/images/APPAREL/avocados.webp';
import uaGreekLifeCollage from '../assets/images/APPAREL/UA Greek Life Collage Shirts 2023 VC-02.webp';
import runningOutOfTime from '../assets/images/APPAREL/running out of time-01.webp';
import cedarPointCollage from '../assets/images/APPAREL/cp poster 2 copy.webp';
import iowaFootballStadium from '../assets/images/APPAREL/iowa.webp';
import houseSticker from '../assets/images/APPAREL/house-sticker.webp';
import houseDrawing from '../assets/images/APPAREL/tote.webp';
import illustratedCollage from '../assets/images/APPAREL/e1869b4f-92c1-4e96-baa4-0ba88ad8fd78_rw_1920.webp';
import pikeHalloweenHouse from '../assets/images/APPAREL/pike-halloween.webp';
import pumpkinIllustration from '../assets/images/APPAREL/pumpkin-halloween.webp';
import gammaPhiWatercolor from '../assets/images/APPAREL/gamma phi watercolor copy.webp';
import indyBarCrawl from '../assets/images/APPAREL/indy bar crawl.webp';
import sigmaKappa from '../assets/images/APPAREL/sigma kappa.webp';
import blackParade from '../assets/images/APPAREL/black-parade.webp';
import mcrYoung from '../assets/images/APPAREL/mcr when we were young.webp';
import whatsernameGreenDay from '../assets/images/APPAREL/whatsername.webp';
import panicYoung from '../assets/images/APPAREL/panic when we were young_final.webp';
import ciaBuilding from '../assets/images/APPAREL/24-25_IA_Alumni spring appeal stickers_FINAL.webp';
import skBag from '../assets/images/APPAREL/bag.webp';
import alphaPhiHouse from '../assets/images/APPAREL/t shirt copy.webp';

// FullScreenImage component
const FullScreenImage = ({ src, onClose, prevImage, nextImage }) => {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, prevImage, nextImage]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white text-3xl bg-black p-2 rounded-full focus:outline-none"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <img
        src={src}
        className="max-w-full max-h-full object-contain"
        alt="Full screen"
        aria-label="Full screen view"
      />
      <button
        className="absolute top-1/2 left-4 text-white text-3xl bg-black p-2 rounded-full focus:outline-none"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className="absolute top-1/2 right-4 text-white text-3xl bg-black p-2 rounded-full focus:outline-none"
        onClick={nextImage}
        aria-label="Next image"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

// Main Illustrations component
const Illustrations = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    paramoreBag,
    fobMockup,
    puppiesMixer,
    lovinLifeFest,
    lovinLifeCollage,
    clevelandBaseball,
    paramoreCleMockup,
    homecomingFootball,
    steelVengeance,
    kentStateBag,
    akronBag,
    akronChineseNewYear,
    paramoreDetroit,
    avocados,
    uaGreekLifeCollage,
    runningOutOfTime,
    cedarPointCollage,
    iowaFootballStadium,
    houseSticker,
    houseDrawing,
    illustratedCollage,
    pikeHalloweenHouse,
    pumpkinIllustration,
    gammaPhiWatercolor,
    indyBarCrawl,
    sigmaKappa,
    mcrYoung,
    whatsernameGreenDay,
    blackParade,
    panicYoung,
    ciaBuilding,
    skBag,
    alphaPhiHouse
  ];

  const handleImageClick = (src, index) => {
    setFullScreenImage(src);
    setCurrentIndex(index);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
    setCurrentIndex(null);
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setFullScreenImage(images[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setFullScreenImage(images[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>

    
  

      <div className="container mx-auto">
        <div className="p-5 sm:p-10">
          <h1 className="text-center mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb', fontSize: '48px' }}>
            Illustrations
          </h1>
          <p className="text-center text-gray-600 mb-10 -mt-7">
            Designs and illustrations created using Adobe Illustrator, InDesign, Photoshop, and Fresco. Composition, typography, and 
            creative illustration were key components in creating these designs.
<br></br>
<br></br>
            **UNDER CONSTRUCTION**
          </p>

{/* Row 1: MCR, CIA, Panic */}
<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 justify-items-center items-start">

  {/* MCR Black Parade illustration */}
  <a href="/mcr-black-parade" target="_blank" rel="noopener noreferrer">
    <img
      src={blackParade}
      className="w-full max-w-[68] md:max-w-[68] h-auto object-cover rounded cursor-pointer transition duration-300 hover:opacity-50"
      alt="Black Parade skeleton illustration"
    />
  </a>

  {/* CIA Alumni building drawing */}
  <a href="/cia-alumni" target="_blank" rel="noopener noreferrer">
    <img
      src={ciaBuilding}
      className="w-full max-w-[68] md:max-w-[68] h-auto object-cover rounded cursor-pointer transition duration-300 hover:opacity-50"
      alt="CIA Alumni building drawing"
    />
  </a>

  {/* Panic at the Disco When We Were Young 2025 */}
  <a href="/panic-young" target="_blank" rel="noopener noreferrer">
    <img
      src={panicYoung}
      className="w-full max-w-[68] md:max-w-[68] h-auto object-cover rounded cursor-pointer transition duration-300 hover:opacity-50 -mb-10 sm:mb-0"

      alt="Panic! At the Disco When We Were Young Illustration"
    />
  </a>

</div>




{/* Process Link */}
{/* <p className="text-blue-500 underline cursor-pointer mt-4 text-center">
  <Link to="/ParamoreCollage">Check out my process!</Link>
</p> */}
</div>

{/* Row 2: Paramore, WWWY, Lovin Life */}
<div
  className="
    grid
    grid-cols-1
    md:grid-cols-1
    lg:grid-cols-3
    gap-6
    justify-items-center
    items-start
    lg:-mt-12
  "
>
  {/* Paramore bag collage */}
  <img
  src={paramoreBag}
  className="
  w-full
  max-w-[68]
  h-auto
  pr-6
  pl-6
  
  -mb-16              // Apply negative bottom margin on mobile
  sm:mb-0             // Reset bottom margin from small screens up
  
  sm:ml-4
  sm:pr-10
  sm:pl-10
  sm:mr-4
  sm:-mt-8
  sm:pt-0             // Remove top padding on small screens

  md:-mt-8
  md:mr-6
  md:ml-6
  md:pl-10
  md:pr-10

  lg:-mt-3
  lg:pr-0
  lg:pl-5
  lg:mr-0
  lg:ml-11

  xl:-mt-9
  xl:pt-5
  xl:mr-9

  xl:ml-20
  xl:pr-0

  2xl:-mt-11
  2xl:mr-0
  2xl:pr-0
  2xl:ml-10
  object-cover
  rounded
  mt-8

  cursor-pointer
  transition
  duration-300
  hover:opacity-50
  
  "
  onClick={() => handleImageClick(mcrYoung, 0)}
  alt="When We Were Young 2024 My Chemical Romance skeleton illustration"
/>


  {/* MCR When We Were Young illustration */}
  <img
  src={mcrYoung}
  className="

  w-full
  max-w-[68]
  h-auto
  p-6
  sm:ml-4
  sm:pr-10
  sm:pl-10
  sm:mr-4
  sm:-mt-6                // Small mobile margin-top
  sm:pt-2                 // Reduced padding-top on small mobile screens

  md:-mt-6
  md:pr-10
  md:pl-10

  lg:-mt-40
  lg:pt-3
  lg:pr-2
  lg:pl-2
  lg:mr-4

  xl:-mt-52
  xl:pt-4
  xl:mr-12
  xl:ml-12
  xl:pr-2

  2xl:-mt-64
  2xl:pt-5
  2xl:mr-8
  2xl:pr-2
  2xl:ml-8
  object-cover
  rounded
  mt-8
  cursor-pointer
  transition
  duration-300
  hover:opacity-50
"

  onClick={() => handleImageClick(mcrYoung, 0)}
  alt="When We Were Young 2024 My Chemical Romance skeleton illustration"
/>



  {/* Lovin Life Fest Illustrations 2024 */}
  <img
    src={lovinLifeFest}
    className="
    w-full 
    max-w-[68] 
    h-auto 


    -mt-0
    pr-6
    pl-6
               // Default top margin on mobile
                // Default padding on mobile

    sm:p-0 
    sm:-mt-10 
    sm:mr-4 
    sm:ml-4 
    sm:pr-10
    sm:pl-10
  
    md:-mt-12 
    md:ml-8 
    md:mr-8 
    md:pt-2 
    md:pr-10 
    md:pl-10
  
    lg:mt-2 
    lg:mr-20 
    lg:pt-2 
    lg:ml-8
    lg:pr-4
    lg:pl-0
  
    xl:mt-1
    xl:ml-13 
    xl:mr-24 
    xl:pt-3 
    xl:pr-2
    xl:pl-2
  
    2xl:mt-4 
    2xl:ml-20 
    2xl:mr-32 
    2xl:pt-0 
    2xl:pr-4
    2xl:pl-0
  
  
    object-cover 
    rounded 
    mt-8 
    cursor-pointer 
    transition 
    duration-300 
    hover:opacity-50
  "
  
    onClick={() => handleImageClick(lovinLifeFest, 0)}
    alt="Loving Life music fest collage"
  />
</div>





{/* Row 3: Lovin Life, Green Day, Halloween puppies */}
          <div className="grid
    grid-cols-1
    md:grid-cols-1
    lg:grid-cols-3 gap-2 justify-items-center items-start">
                       
                  {/* Lovin Life collage */}
            <img src={lovinLifeCollage}
            className="
            mx-auto
            h-auto
            max-w-full
          
            mt-2           // Default top margin on mobile
            pr-6            // Default padding on mobile
            pl-6
          
            sm:-mt-2
            sm:pr-10
            sm:pl-10
            s
          
            md:-mt-2
            md:p-4
            md:pr-16
            md:ml-6
          
            lg:-mt-36
            lg:pt-4
            lg:ml-6
            lg:pr-3 
            
          
            xl:-mt-44
          
            xl:ml-6
            xl:pr-3
          
            2xl:-mt-56
            2xl:pt-7
            2xl:ml-6
            2xl:
          
            object-cover
            rounded
            cursor-pointer
            transition duration-300 hover:opacity-50
          "
          
            onClick={() => handleImageClick(lovinLifeCollage, 0)}
            alt="2024 Lovin Life fest illustration"
          />

       {/* Green Day Whatsername American Idiot illustration */}
<img
    src={whatsernameGreenDay}
    className="

  w-78
  h-auto
  object-cover
  rounded
  cursor-pointer
  
  mt-0              // Adjust the margin-top for mobile only
  -mt-32            // Default for mobile
  pr-6
  pl-6
  
  sm:-mt-0        // Smaller negative margin on sm+
  sm:pr-10
  sm:pl-10
  
  md:-mt-4
  md:pr-10
  md:pl-10

  
  lg:-mt-24
  lg:pt-6
  lg:pr-3
  lg:pl-3
  
  xl:-mt-32
  xl:pt-9
  xl:pr-3
  xl:pl-3
  
  2xl:-mt-32
  2xl:pt-4
  2xl:pr-4
  2xl:pl-3
  
  transition duration-300 hover:opacity-50
"

  
    onClick={() => handleImageClick(whatsernameGreenDay, 0)}
    alt="Whatsername Green Day American Idiot skeleton illustration"
  />
 


          {/* Pumpkin Puppy illustration */}
          <img
            src={puppiesMixer}
            className="
  mx-auto
  mb-8
  -mt-6
  max-w-full
  h-auto
  object-cover
  rounded
 
  p-6
  cursor-pointer

  sm:-mt-8
  sm:py-6

  md:-mt-6
  md:px-10
  md:py-6

  lg:-mt-4
  lg:pl-0
  lg:pr-7
  lg:-ml-3

  xl:-mt-4
  xl:pr-7
  xl:pl-0
  xl:-ml-3

  2xl:-mt-8
  2xl:pr-5
  2xl:pl-2
  2xl:-ml-5
"

            onClick={() => handleImageClick(puppiesMixer, 0)}
            alt="Pumpkin Puppy mixer illustration"
          />

          </div>





         {/* Row 4: Cedar Point, Paramore Running out of Time, UAkron design */}
          <div className="grid
    grid-cols-1
    md:grid-cols-1
    lg:grid-cols-3 gap-2 justify-items-center items-start">
                       
                 {/* Cedar Point Photo collage */}
            <img src={cedarPointCollage}
            className="
            w-68
            mx-auto
            -mt-12              // Default margin-top for mobile
            pr-6
            pl-6
           
            sm:-mt-12           // Smaller negative margin for sm screens
            sm:pr-8
            sm:pl-8

            md:-mt-12            // Smaller negative margin for md screens
            md:w-[1000px]
            md:pl-10
        
            md:pr-10

            lg:-mt-32            // Smaller negative margin for lg screens
            lg:pt-2
            lg:pl-7
            lg:pr-0
            lg:ml-3
            


            xl:-mt-36            // Larger negative margin for xl screens
            xl:pt-3
            xl:pr-1
            xl:pl-6
            xl:ml-4

            2xl:-mt-36          // Adjusted negative margin for 2xl screens
            2xl:pt-2
            2xl:pr-0
            2xl:pl-7
            2xl:ml-3

           
            h-auto
            object-cover
            rounded
     
            cursor-pointer
            transition duration-300 hover:opacity-50
          "
      
            onClick={() => handleImageClick(cedarPointCollage, 0)}
            alt="Cedar Point photo collage"
          />
       {/* Paramore Running out of Time concept art illustration */}
<img
    src={runningOutOfTime}
    className="
  w-70
  h-auto
  object-cover
  -mt-0       /* Default for small mobile */
  pr-6
  pl-6
  rounded

  cursor-pointer
  transition
  duration-300
  hover:opacity-50

  sm:mt-0
  sm:px-6
  sm:mr-4

  md:mt-0
  md:px-8
  md:mr-4

  lg:-mt-16
  lg:pt-5
  lg:pr-3
  lg:pl-3
  lg:ml-4

  xl:-mt-20
  xl:pt-9
  xl:pr-3
  xl:pl-3
  xl:ml-4

  2xl:-mt-16
  2xl:pt-8
  2xl:pr-3
  2xl:pl-4
  2xl:ml-2
"

    onClick={() => handleImageClick(runningOutOfTime, 0)}
    alt="Paramore Running out of Time concept art illustration"
  />
 


          {/* UAkron collage illustration */}
          <img
            src={uaGreekLifeCollage}
            className="
  mx-auto
  h-auto
  max-w-full
  object-cover
  rounded
  cursor-pointer
  transition
  duration-300
  hover:opacity-50

  mt-0            /* Default for smallest screens */
  pr-6
  pl-6


  sm:-mt-4
  sm:px-6
  sm:mr-4
  sm:pr-8

  md:-mt-0
  md:px-8
  md:ml-0
  md:mr-4

  lg:-mt-12
  lg:pr-4
  lg:pl-3
  lg:ml-0
  lg:mr-12

  xl:-mt-20
  xl:pt-8
  xl:pr-4
  xl:pl-3
  xl:ml-0
  xl:mr-12

  2xl:mt-[-5rem]     /* cleaner way to express -mt-20 */
  2xl:pt-8
  2xl:pl-0
  2xl:pr-7
  2xl:ml-0
  2xl:mr-6
  2xl:w-[1500px]
  
"

            onClick={() => handleImageClick(uaGreekLifeCollage, 0)}
            alt="University of Akron collage illustration"
          />

          </div>


{/* Row 5: Fall Out Boy, Paramore Detroit, Homecoming football stadium */}
          <div className="grid
    grid-cols-1
    md:grid-cols-1
    lg:grid-cols-3 gap-2 justify-items-center items-start">
                       
                 {/*Fall Out Boy */}
            <img src={fobMockup}
            className="
            mx-auto 
            max-w-full 
            h-auto 
            object-cover 
            rounded 
         
            cursor-pointer
          
            mt-2           /* Default for mobile */
            pr-6
            pl-6
          
            sm:mt-2
            sm:px-6
            sm:mr-4
            sm:pr-8
          
            md:mt-2
            md:pr-10
          
            lg:mt-[-7rem]
            lg:pt-1
            lg:pr-4
            lg:pl-3
            lg:ml-14
            lg:mr-0
          
            xl:mt-[-9rem]
            xl:pt-4
            xl:pr-4
            xl:pl-3
            xl:ml-13
            
          
            2xl:mt-[-10rem]
             
            2xl:pl-0 
            2xl:pr-7 
            2xl:ml-20 
            2xl:w-[1500px]
          "
          
            onClick={() => handleImageClick(fobMockup, 0)}
            alt="Fall Out Boy concept art"
          />
       {/* Paramore Detroit Tour 2023 Photo illustration */}
<img
    src={paramoreDetroit}
    className="
  w-70 
  h-auto 
  object-cover 
  mt-0 
  pr-6 
  pl-6
 
  rounded 

  cursor-pointer

  sm:mt-0 
  sm:px-6
  sm:mr-4

  md:mt-0 
  md:px-8
  md:mr-4

  lg:mt-2 
  lg:pr-3
  lg:pl-3
  lg:ml-4

  xl:mt-2 
  xl:pr-3
  xl:pl-3
  xl:ml-4

  2xl:mt-[-1rem]
  2xl:pt-6 
  2xl:pl-0 
  2xl:pr-7 
  2xl:ml-10 
  2xl:w-[1500px]
"

    onClick={() => handleImageClick(paramoreDetroit, 0)}
    alt="Paramore Detroit Tour 2023 Photo illustration"
  />
 


          {/* Homecoming football stadium illustration */}
          <img
            src={homecomingFootball}
            className="
            mx-auto
            h-auto
            max-w-full
            object-cover
            rounded
            cursor-pointer
            transition
            duration-300
            hover:opacity-50
          
            mt-0            /* Default for smallest screens */
            pr-6
            pl-6
          
          
            sm:-mt-0
            sm:px-6
            sm:mr-4
            sm:pr-8
          
            md:-mt-0
            md:px-8
            md:ml-0
            md:mr-4
          
            lg:mt-[-7rem]
            lg:pt-3
            lg:pr-4
            lg:pl-3
            lg:ml-0
            lg:mr-12
          
            xl:mt-[-10rem]
            xl:pt-8
            xl:pr-4
            xl:pl-3
            xl:ml-0
            xl:mr-12
          
            2xl:mt-[-12rem]     /* cleaner way to express -mt-20 */
            2xl:pt-8
            2xl:pl-0
            2xl:pr-7
            2xl:ml-0
            2xl:mr-6
            2xl:w-[1500px]
            
          "
            onClick={() => handleImageClick(homecomingFootball, 0)}
            alt="Homecoming football stadium illustration"
          />

          </div>

{/* Row 6: Paramore Cleveland, Iowa Football, Steel Vengeance */}
<div className="grid
    grid-cols-1
    md:grid-cols-1
    lg:grid-cols-3 gap-2 justify-items-center items-start">
                       
                 {/*Paramore Cleveland Mockup  */}
            <img src={paramoreCleMockup}
            className="   mx-auto 
            max-w-full 
            h-auto 
            object-cover 
            rounded 
         
            cursor-pointer
          
            mt-2           /* Default for mobile */
            pr-6
            pl-6
          
            sm:mt-2
            sm:px-6
            sm:mr-4
            sm:pr-8
          
            md:mt-2
            md:pr-10
          
            lg:mt-[-16rem]
            lg:pt-1
            lg:pr-4
            lg:pl-3
            lg:ml-14
            lg:mr-0
          
            xl:mt-[-21rem]
            xl:pt-7
            xl:pr-4
            xl:pl-3
            xl:ml-13
            
          
            2xl:mt-[-24rem]
             2xl:pt-7
            2xl:pl-0 
            2xl:pr-7 
            2xl:ml-20 
            2xl:w-[1500px]
         "
            onClick={() => handleImageClick(paramoreCleMockup, 0)}
            alt="Paramore Cleveland Tour 2023 Design"
          />
       {/* Iowa Football stadium illustration */}
<img
    src={iowaFootballStadium}
    className=" w-70 
    h-auto 
    object-cover 
    mt-0 
    pr-6 
    pl-6
   
    rounded 
  
    cursor-pointer
  
    sm:mt-0 
    sm:px-6
    sm:mr-4
    sm:pr-6
    sm:pl-8
  
    md:mt-0 
    md:px-8
    md:mr-4
  
    lg:mt-2 
    lg:pr-3
    lg:pl-3
    lg:ml-4
  
    xl:mt-2 
    xl:pr-3
    xl:pl-3
    xl:ml-4
  
    2xl:mt-[-1rem]
    2xl:pt-6 
    2xl:pl-0 
    2xl:pr-7 
    2xl:ml-10 
    2xl:w-[1500px]"
    onClick={() => handleImageClick(iowaFootballStadium, 0)}
    alt="Iowa Football stadium illustration"
  />

          {/* Steel Vengeance illustration */}
          <img
            src={steelVengeance}
            className="   mx-auto
            h-auto
            max-w-full
            object-cover
            rounded
            cursor-pointer
            transition
            duration-300
            hover:opacity-50
          
            mt-0            /* Default for smallest screens */
            pr-6
            pl-6
          
          
            sm:-mt-0
            sm:px-6
            sm:mr-4
            sm:pr-8
          
            md:-mt-0
            md:px-8
            md:ml-0
            md:mr-4
          
            lg:mt-[-11rem]
            lg:pt-3
            lg:pr-4
            lg:pl-3
            lg:ml-0
            lg:mr-12
          
            xl:mt-[-15rem]
            xl:pt-8
            xl:pr-4
            xl:pl-3
            xl:ml-0
            xl:mr-12
          
            2xl:mt-[-18rem]     /* cleaner way to express -mt-20 */
            2xl:pt-10
            2xl:pl-0
            2xl:pr-7
            2xl:ml-0
            2xl:mr-6
            2xl:w-[1500px]"
            onClick={() => handleImageClick(steelVengeance, 0)}
            alt="Steel Vengeance illustration"
          />

          </div>

         {/* Row 7: PIKE Halloween House, KSU Bag Collage, avocados */}
         <div className="grid
    grid-cols-1
    md:grid-cols-1
    lg:grid-cols-3 gap-2 justify-items-center items-start">
                       
                       
                 {/* PIKE Halloween House */}
            <img src={pikeHalloweenHouse}
            className=" mx-auto 
            max-w-full 
            h-auto 
            object-cover 
            rounded 
         
            cursor-pointer
          
            mt-2           /* Default for mobile */
            pr-6
            pl-6
          
            sm:mt-2
            sm:px-6
            sm:mr-4
            sm:pr-8
          
            md:mt-2
            md:pr-10
          
            lg:mt-[-13rem]
            lg:pt-4
            lg:pr-4
            lg:pl-3
            lg:ml-14
            lg:mr-0
          
            xl:mt-[-16rem]
            xl:pt-7
            xl:pr-4
            xl:pl-3
            xl:ml-13
            
          
            2xl:mt-[-18rem]
             2xl:pt-8
            2xl:pl-0 
            2xl:pr-7 
            2xl:ml-20 
            2xl:w-[1500px]"
            onClick={() => handleImageClick(pikeHalloweenHouse, 0)}
            alt="Pi Kappa Alpha Halloween house illustration"
          />
       {/* KSU bag collage illustration */}
<img
    src={kentStateBag}
    className="  mx-auto
    h-auto
    max-w-full
    object-cover
    rounded
    cursor-pointer
    transition
    duration-300
    hover:opacity-50
  
    mt-0            /* Default for smallest screens */
    pr-6
    pl-6
  
  
    sm:-mt-0
    sm:px-6
    sm:mr-4
    sm:pr-8
  
    md:-mt-0
    md:px-8
    md:ml-0
    md:mr-4
  
    lg:mt-[-1rem]
    lg:pt-6
    lg:pr-3
    lg:pl-3
    lg:ml-0
    lg:mr-0
  
    xl:mt-[-2rem]
    xl:pt-10
    xl:pr-3
    xl:pl-3
    xl:ml-0
    xl:mr-0
  
    2xl:mt-[-2rem]     /* cleaner way to express -mt-20 */
    2xl:pt-10
    2xl:pl-0
    2xl:pr-7
    2xl:ml-6
    2xl:mr-0
    2xl:w-[1500px]"
    onClick={() => handleImageClick(kentStateBag, 0)}
    alt="Kent State tote bag collage illustration"
  />
 


          {/* Avocados illustration */}
          <img
            src={avocados}
            className="  mx-auto
            h-auto
            max-w-full
            object-cover
            rounded
            cursor-pointer
            transition
            duration-300
            hover:opacity-50
          
            mt-0            /* Default for smallest screens */
            pr-6
            pl-6
          
          
            sm:-mt-0
            sm:px-6
            sm:mr-4
            sm:pr-8
          
            md:-mt-0
            md:px-8
            md:ml-0
            md:mr-4
          
            lg:mt-[-11rem]
            lg:pt-3
            lg:pr-4
            lg:pl-3
            lg:ml-0
            lg:mr-12
          
            xl:mt-[-15rem]
            xl:pt-8
            xl:pr-4
            xl:pl-3
            xl:ml-0
            xl:mr-12
          
            2xl:mt-[-20rem]     /* cleaner way to express -mt-20 */
            2xl:pt-11
            2xl:pl-0
            2xl:pr-7
            2xl:ml-0
            2xl:mr-6
            2xl:w-[1500px]"
            onClick={() => handleImageClick(avocados, 0)}
            alt="Avocado fruit illustration"
          />

          </div>

         {/* Row 8: CLE Baseball, Akron bag, Akron new year shirt */}
          <div className="grid grid-cols-3 gap-2 justify-items-center items-start">
                       
                 {/* CLE baseball */}
                       <img src={clevelandBaseball}
                       className="mx-auto max-w-full h-auto object-cover rounded shadow-md cursor-pointer"
                       onClick={() => handleImageClick(clevelandBaseball, 0)}
                       alt="Cleveland baseball stadium illustration"
                     />
                  {/* UA bag illustration */}
           <img
               src={akronBag}
               className="w-70 h-auto object-cover -mt-12 rounded shadow-md cursor-pointer"
               onClick={() => handleImageClick(kentStateBag, 0)}
               alt="University of Akron collage bag illustration"
             />
            
           
           
                     {/* UA New Years shirt illustration */}
                     <img
                       src={akronChineseNewYear}
                       className="mx-auto max-w-full -mt-24 pt-1 h-auto object-cover rounded shadow-md cursor-pointer"
                       onClick={() => handleImageClick(akronChineseNewYear, 0)}
                       alt="University of Akron Chinese New Year shirt illustration"
                     />
           
                     </div>



           
                    {/* Row 9: Graffiti, house, pumpkins */}
                     <div className="grid grid-cols-3 gap-2 justify-items-center items-start">
                       
                 {/* SDT graffiti  */}
                       <img src={skBag}
                       className="mx-auto max-w-full -mt-28 pt-2 h-auto object-cover rounded shadow-md cursor-pointer"
                       onClick={() => handleImageClick(skBag, 0)}
                       alt="Sigma Delta Tau graffiti style text illustration"
                     />
                  {/* house collage drawing illustration */}
           <img
               src={illustratedCollage}
               className="w-70 h-auto object-cover mt-3 rounded shadow-md cursor-pointer"
               onClick={() => handleImageClick(illustratedCollage, 0)}
               alt="house drawing campus collage illustration"
             />
            
           
           
                     {/* Pumpkin illustration */}
                     <img
                       src={pumpkinIllustration}
                       className="mx-auto max-w-full -mt-36 pt-6 h-auto object-cover rounded shadow-md cursor-pointer"
                       onClick={() => handleImageClick(pumpkinIllustration, 0)}
                       alt="Pumpkin/fall illustration"
                     />
           
                     </div>
           
            {/* Row 10: Indy bar crawl, house, watercolor text */}
                     <div className="grid grid-cols-3 gap-2 justify-items-center items-start">
                       
                 {/* Indy bar crawl collage */}
                       <img src={indyBarCrawl}
                       className="mx-auto max-w-full mt-2 h-auto object-cover rounded shadow-md cursor-pointer"
                       onClick={() => handleImageClick(indyBarCrawl, 0)}
                       alt="Indiana bar crawl collage illustration"
                     />
                  {/* House illustration */}
           <img
               src={houseSticker}
               className="w-70 h-auto object-cover -mt-64 pt-1 rounded shadow-md cursor-pointer"
               onClick={() => handleImageClick(houseSticker, 0)}
               alt="Cartoon style house illustration"
             />
            
           
           
                     {/* Gamma Phi watercolor  */}
                     <img
                       src={gammaPhiWatercolor}
                       className="mx-auto max-w-full -mt-40 pt-1 h-auto object-cover rounded shadow-md cursor-pointer"
                       onClick={() => handleImageClick(gammaPhiWatercolor, 0)}
                       alt="Gamma Phi watercolor illustration"
                     />
           
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
    </>
  );
};

export default Illustrations;
