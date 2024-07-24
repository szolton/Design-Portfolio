import React, { useState } from 'react';
import '../App.css';
import '../assets/style.css';
import Footer from './Footer';
import FullScreenImage from './FullScreenImage'; // Ensure correct import path

// Importing images
import halloweenSign from '../assets/images/POSTERS/halloween sign.png';
import yardSigns from '../assets/images/POSTERS/EH Lebanon Yard Signs 2022 EDIT.png';
import paramorePoster from '../assets/images/POSTERS/paramore-columbus-poster.png';
import cedarPoster from '../assets/images/POSTERS/cp poster.jpg';
import agoraMockup from '../assets/images/POSTERS/AGORA MOCKUP.png';
import screenprintMockup from '../assets/images/POSTERS/banner copy.jpg';

const PosterDesign = () => {
  const [fullScreenMedia, setFullScreenMedia] = useState(null);

  const mediaItems = [
    halloweenSign,
    yardSigns,
    paramorePoster,
    cedarPoster,
    agoraMockup,
    screenprintMockup
  ];

  const handleMediaClick = (src) => setFullScreenMedia(src);
  const handleCloseFullScreen = () => setFullScreenMedia(null);

  const handlePrevMedia = () => {
    const currentIndex = mediaItems.indexOf(fullScreenMedia);
    const prevIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    setFullScreenMedia(mediaItems[prevIndex]);
  };

  const handleNextMedia = () => {
    const currentIndex = mediaItems.indexOf(fullScreenMedia);
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    setFullScreenMedia(mediaItems[nextIndex]);
  };

  return (
    <div>
      {/* Navigation header info bar */}
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      {/* Poster designs */}
      <div className="columns-1 p-5 md:p-10 m-5 md:m-10">
        {/* Poster title and description */}
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Poster Designs
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          High quality artwork illustration designs created using Adobe Illustrator, Photoshop, InDesign, Fresco, and mixed media.
        </p>

        {/* Poster images */}
        {mediaItems.map((item, index) => (
          <div key={index}>
            <img
              src={item}
              className="w-300 h-200 object-cover rounded shadow-md mt-5 md:mt-0 cursor-pointer"
              alt={`Poster ${index + 1}`}
              onClick={() => handleMediaClick(item)}
            />
            <p className="text-center text-gray-600 mt-2 mb-4">
              {/* Add descriptive text for each image if needed */}
            </p>
          </div>
        ))}
      </div>

      {fullScreenMedia && (
        <FullScreenImage
          src={fullScreenMedia}
          onClose={handleCloseFullScreen}
          prevImage={handlePrevMedia}
          nextImage={handleNextMedia}
        />
      )}

    </div>
  );
}

export default PosterDesign;
