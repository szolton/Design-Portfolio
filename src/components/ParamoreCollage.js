import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import Footer from './Footer';
import FullScreenImage from './FullScreenImage';

// Import your images
import paramoreBag from '../assets/images/APPAREL/paramore-bag.png';

const ParamoreCollage = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  // Store images in an array
  const images = [paramoreBag];

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

        {/* Display images */}
        <div className="flex justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Paramore Image ${index + 1}`}
              className="cursor-pointer w-64 h-auto m-2 transition-transform transform hover:scale-105"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
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

      <Footer />
    </div>
  );
};

export default ParamoreCollage;
