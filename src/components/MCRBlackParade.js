import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import FullScreenImage from './FullScreenImage';

// Import your images
import mcrBlackParadeFinal from '../assets/images/APPAREL/black-parade.webp';

import mcrprocessSketch from '../assets/images/BLACK PARADE/mcrbp-process-sketch.webp';
import mcrprocess1 from '../assets/images/BLACK PARADE/mcrbp-process-1.webp';
import mcrprocess2 from '../assets/images/BLACK PARADE/mcrbp-process-2.webp';
import mcrprocess3 from '../assets/images/BLACK PARADE/mcrbp-process-3.webp';
import mcrprocess4 from '../assets/images/BLACK PARADE/mcrbp-process-4.webp';
import mcrprocess5 from '../assets/images/BLACK PARADE/mcrbp-process-5.webp';
import mcrprocess6 from '../assets/images/BLACK PARADE/mcrbp-process-6.webp';
import mcrprocess65 from '../assets/images/BLACK PARADE/mcrbp-process-6.5.webp';
import mcrprocess7 from '../assets/images/BLACK PARADE/mcrbp-process-7.webp';
import mcrprocess8 from '../assets/images/BLACK PARADE/mcr-final-tablet-pic.webp';
import paramoreProcess from '../assets/images/APPAREL/paramore-work.png';
import paramoreWork from '../assets/images/APPAREL/paramore-collage-work.jpg';
import paramoreWork2 from '../assets/images/APPAREL/paramore-collage-work2.jpg';
import paramoreShirtPrint from '../assets/images/APPAREL/paramore-collage-shirt.jpg';
import paramoreShirt from '../assets/images/APPAREL/paramore-in-action.png';
import paramoreCollageFinal from '../assets/images/APPAREL/paramore-collage-final.png';

const MCRBlackParade = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  // Store images in an array
  const images = [mcrBlackParadeFinal, mcrprocessSketch, mcrprocess1, mcrprocess2, mcrprocess3, mcrprocess4, mcrprocess5, mcrprocess6, mcrprocess65, mcrprocess7, mcrprocess8, paramoreProcess, paramoreShirtPrint, paramoreShirt, paramoreCollageFinal];

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
          'Long Live' the Black Parade
        </h1>
        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 leading-relaxed">

          For this project, I wanted to create an illustration to wear for a tour date. I wanted to make something that didn't really exist much anywhere else, and
          I really enjoy drawing skeletons and creating concept art, so this is the direction I went with. I like the tarot card look, and pulled together something that's
          fun, boujie, and unique.

         
      <br></br>
         <br></br>
          I started by sketching and brainstorming different elements to include, and settled on a color palette that was inspired by muted tones of black, navy, old gold, and a light lavendar. From there, I drew out different elements in Photoshop,
          and created the composition. 
          
         I wanted an illustration that was emo, energetic, professional and unique to my style that engages the audience. The skeleton flying the Black Parade flag, moons, and bats are all symbolic to this era of music. 
        </p>

        {/* Paramore Image Display */}
        <img
  src={mcrBlackParadeFinal}
  className="mx-auto w-full sm:w-[500px] md:w-[700px] lg:w-[500px] h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(mcrBlackParadeFinal, 0)}
  alt="black parade art"
/>

<p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
        My final version of the artwork mocked up on a bag. It includes concept elements from the albums All We Know is Falling, Riot!, Brand New Eyes, self-titled, After Laughter, This is Why, as well as some of their most famous singles such as Decode and vampire fangs.  </p>


        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 leading-relaxed">
        Here's some of my work process. It includes design research such as sketching, the final color palette, different iterations, close-ups of different collage pieces as I built the piece, as well as the final shirt that was worn to the Paramore concert in Columbus. </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-72">

  <img
    src={mcrprocessSketch}
    className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(mcrprocessSketch, 0)}
    alt="black parade art"
  />
  <img
    src={mcrprocess1}
    className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(mcrprocess1, 0)}
    alt="black parade art"
  />


  <img
    src={mcrprocess2}
    className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(mcrprocess2, 0)}
    alt="black parade art"
  />
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-72 mt-7">

<img
  src={mcrprocess3}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(mcrprocess3, 0)}
  alt="black parade art"
/>
<img
  src={mcrprocess4}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(mcrprocess4, 0)}
  alt="black parade art"
/>


<img
  src={mcrprocess5}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(mcrprocess5, 0)}
  alt="black parade art"
/>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-72 mt-7">

<img
  src={mcrprocess6}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(mcrprocess6, 0)}
  alt="black parade art"
/>
<img
  src={mcrprocess65}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(mcrprocess65, 0)}
  alt="black parade art"
/>


<img
  src={mcrprocess7}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(mcrprocess7, 0)}
  alt="black parade art"
/>
</div>




        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4"> 
        

          {/* Second Column (paramoreWork and paramoreWork2 side by side) */}
{/* Second Column (paramoreWork, paramoreWork2, paramoreShirtPrint, paramoreShirt) */}
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:w-1/2">
 


</div>

         
        </div>

        <img
  src={mcrprocess8}
  className="mx-auto w-full sm:w-[500px] md:w-[700px] lg:w-[500px] h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(mcrBlackParadeFinal, 0)}
  alt="black parade art"
/>


        <p className="mb-3 text-center text-gray-600 mb-10">
This is the final artwork that went to print.
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

export default MCRBlackParade;
