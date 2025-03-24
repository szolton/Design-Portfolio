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
          Paramore Illustration Process
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          Together, I worked with Sbarro to create a...
        </p>

        {/* Paramore Image Display */}
        <img
            src={paramoreBag}
            className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8 cursor-pointer"
            onClick={() => handleImageClick(paramoreBag, 0)}
            alt="Paramore bag mockup"
          />

<img
            src={paramoreProcess}
            className="mx-auto mb-8 max-w-full h-auto object-cover rounded shadow-md p-8 cursor-pointer"
            onClick={() => handleImageClick(paramoreProcess, 0)}
            alt="Paramore bag mockup"
          />




        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-4"> 
        

          {/* Second Column (paramoreWork and paramoreWork2 side by side) */}
          <div className="flex flex-row justify-center gap-4 mb-8 md:w-1/2"> 
            <img
              src={paramoreWork}
              alt="Paramore Work"
              className="max-w-[48%] h-auto object-cover rounded shadow-md p-8 cursor-pointer"
              onClick={() => handleImageClick(paramoreWork)}
            />
            <img
              src={paramoreWork2}
              alt="Paramore Work 2"
              className="max-w-[48%] h-auto object-cover rounded shadow-md p-8 cursor-pointer"
              onClick={() => handleImageClick(paramoreWork2)}
            />
               <img
              src={paramoreShirtPrint}
              alt="Paramore Work 2"
              className="max-w-[48%] h-auto object-cover rounded shadow-md p-8 cursor-pointer"
              onClick={() => handleImageClick(paramoreWork2)}
            />
                 <img
              src={paramoreShirt}
              alt="Paramore Work 2"
              className="max-w-[48%] h-auto object-cover rounded shadow-md p-8 cursor-pointer"
              onClick={() => handleImageClick(paramoreWork2)}
            />


          </div>
         
        </div>
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
