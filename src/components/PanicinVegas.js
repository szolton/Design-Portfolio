import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import FullScreenImage from './FullScreenImage';

// Import your images
import panicYoungFinal from '../assets/images/APPAREL/PANIC WWWY/panic when we were young.webp';

import mcrprocessSketch from '../assets/images/BLACK PARADE/mcrbp-process-sketch.webp';
import panicprocess1 from '../assets/images/APPAREL/PANIC WWWY/panic-process-1.webp';
import panicprocess2 from '../assets/images/APPAREL/PANIC WWWY/panic-process-2.webp';
import panicprocess3 from '../assets/images/APPAREL/PANIC WWWY/panic-process-3.webp';
import panicprocess4 from '../assets/images/APPAREL/PANIC WWWY/panic-process-4.webp';
import panicprocess5 from '../assets/images/APPAREL/PANIC WWWY/panic-process-5.webp';
import panicprocess6 from '../assets/images/APPAREL/PANIC WWWY/panic-process-6.webp';
import panicprocess7 from '../assets/images/APPAREL/PANIC WWWY/panic-process-7.webp';
import panicprocess8 from '../assets/images/APPAREL/PANIC WWWY/panic-process-8.webp';
import panicprocess9 from '../assets/images/APPAREL/PANIC WWWY/panic-process-9.webp';



const PanicinVegas = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  // Store images in an array
  const images = [panicYoungFinal, mcrprocessSketch, panicprocess1, panicprocess2, panicprocess3, panicprocess4, panicprocess5, panicprocess6, panicprocess7, panicprocess8, panicprocess9];

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
          Panic! at When We Were Young Illustration
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
  src={panicYoungFinal}
  className="mx-auto w-full sm:w-[500px] md:w-[700px] lg:w-[500px] h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(panicYoungFinal, 0)}
  alt="black parade art"
/>

<p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
        My final version of the artwork mocked up on a bag. It includes concept elements from the albums All We Know is Falling, Riot!, Brand New Eyes, self-titled, After Laughter, This is Why, as well as some of their most famous singles such as Decode and vampire fangs.  </p>


        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 leading-relaxed">
        Here's some of my work process. It includes design research such as sketching, the final color palette, different iterations, close-ups of different collage pieces as I built the piece, as well as the final product. The hardest part of this design was getting the
        skeleton hand to look natural, I went back and forth on the natural hand motion too many times before working it out. </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-72">

  <img
    src={panicprocess1}
    className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(panicprocess1, 0)}
    alt="black parade art"
  />
  <img
    src={panicprocess2}
    className="max-w-[400px] w-full h-[500px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(panicprocess2, 0)}
    alt="black parade art"
  />


  <img
    src={panicprocess3}
    className="max-w-[400px] w-full h-[500px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(panicprocess3, 0)}
    alt="black parade art"
  />
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-72 mt-7">

<img
  src={panicprocess4}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(panicprocess4, 0)}
  alt="black parade art"
/>
<img
  src={panicprocess5}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(panicprocess5, 0)}
  alt="black parade art"
/>


<img
  src={panicprocess6}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(panicprocess6, 0)}
  alt="black parade art"
/>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-72 mt-7">

<img
  src={panicprocess7}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(panicprocess7, 0)}
  alt="black parade art"
/>
<img
  src={panicprocess8}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(panicprocess8, 0)}
  alt="black parade art"
/>


<img
  src={panicprocess9}
  className="max-w-[400px] w-full h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(panicprocess9, 0)}
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
  src={panicYoungFinal}
  className="mx-auto w-full sm:w-[500px] md:w-[700px] lg:w-[500px] h-auto object-cover rounded shadow-md cursor-pointer"
  onClick={() => handleImageClick(panicYoungFinal, 0)}
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

export default PanicinVegas;
