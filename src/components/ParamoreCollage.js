import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import FullScreenImage from './FullScreenImage';

// Import your images
import paramoreBag from '../assets/images/APPAREL/paramore-bag.png';
import paramoreProcess from '../assets/images/APPAREL/paramore-work.png';
import paramoreWork from '../assets/images/APPAREL/paramore-collage-work.jpg';
import paramoreWork2 from '../assets/images/APPAREL/paramore-collage-work2.jpg';
import paramoreShirtPrint from '../assets/images/APPAREL/paramore-collage-shirt.jpg';
import paramoreShirt from '../assets/images/APPAREL/paramore-in-action.png';
import paramoreCollageFinal from '../assets/images/APPAREL/paramore-collage-final.png';

const ParamoreCollage = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  // Store images in an array
  const images = [paramoreBag, paramoreProcess, paramoreShirtPrint, paramoreShirt, paramoreCollageFinal];

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
      <h4 className="text-left p-5 pl-7 pt-5 mobile-padding" style={{ fontFamily: 'Alte Haas Grotesk, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
        <h1 className="-mt-8 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
          Paramore Collage Process
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          For this project, I wanted to create a collage that honored the history of Paramore over the years. I was inspired because I didn't like any of the official merch on their website or elsewhere, so I decided that I had the power to make my own, so I did. 

          I had already made other bags in this design style and felt like I was on a roll, so I kept the same kind of vector style as the others in my portfolio. 
         
      <br></br>
         <br></br>
          I started by sketching and brainstorming different elements to include, and settled on a color palette that was inspired by After Laughter. From there, I drew out different elements on an iPad and created the composition and typography in Illustrator.
         I wanted an illustration that was bright, energetic, professional and unique. Bringing together all the different pieces from different eras and making it cohesive was a real challenge, and I had a lot of fun creating the art and rising to the occasion. 
        </p>

        {/* Paramore Image Display */}
        <img
            src={paramoreBag}
            className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8 cursor-pointer"
            onClick={() => handleImageClick(paramoreBag, 0)}
            alt="Paramore bag mockup"
          />
             <p className="mb-3 text-center text-gray-600 mb-10">
        My final version of the artwork mocked up on a bag. It includes concept elements from the albums All We Know is Falling, Riot!, Brand New Eyes, self-titled, After Laughter, This is Why, as well as some of their most famous singles such as Decode and vampire fangs.  </p>


        <p className="-mb-8 pt-10 text-center text-gray-600">
        Here's some of my work process. It includes design research such as sketching, the final color palette, different iterations, close-ups of different collage pieces as I built the piece, as well as the final shirt that was worn to the Paramore concert in Columbus. </p>





<img
            src={paramoreProcess}
            className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8 cursor-pointer"
            onClick={() => handleImageClick(paramoreProcess, 0)}
            alt="Paramore bag work process with swatches, sketches and iterations"
          />

        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4"> 
        

          {/* Second Column (paramoreWork and paramoreWork2 side by side) */}
{/* Second Column (paramoreWork, paramoreWork2, paramoreShirtPrint, paramoreShirt) */}
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:w-1/2">
  <img
    src={paramoreWork}
    alt="Paramore Work"
    className="max-w-full sm:max-w-[48%] h-auto object-cover rounded shadow-md p-8 cursor-pointer"
    onClick={() => handleImageClick(paramoreWork)}
  />
  <img
    src={paramoreWork2}
    alt="Paramore Work 2"
    className="max-w-full sm:max-w-[48%] h-auto object-cover rounded shadow-md p-8 cursor-pointer"
    onClick={() => handleImageClick(paramoreWork2)}
  />
  <img
    src={paramoreShirtPrint}
    alt="Paramore Shirt Print"
    className="max-w-full sm:max-w-[48%] h-auto object-cover rounded shadow-md p-8 cursor-pointer"
    onClick={() => handleImageClick(paramoreShirtPrint)}
  />
  <img
    src={paramoreShirt}
    alt="Paramore Shirt"
    className="max-w-full sm:max-w-[48%] h-auto object-cover rounded shadow-md p-8 cursor-pointer"
    onClick={() => handleImageClick(paramoreShirt)}
  />
</div>

         
        </div>

        <p className="mb-3 text-center text-gray-600 mb-10">
This is the final artwork that went to print.
</p>
        <img
            src={paramoreCollageFinal}
            className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8 cursor-pointer"
            onClick={() => handleImageClick(paramoreCollageFinal, 0)}
            alt="Paramore bag mockup"
          />


     
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

export default ParamoreCollage;
