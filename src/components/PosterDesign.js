import React, { useState } from 'react';
import '../App.css';
import '../assets/style.css';
import Footer from './Footer';
import FullScreenImage from './FullScreenImage'; // Ensure correct import path

// Importing images
import paramorePoster from '../assets/images/POSTERS/paramore-columbus-poster.webp';

const PosterDesign = () => {
  const [fullScreenMedia, setFullScreenMedia] = useState(null);

  const mediaItems = [paramorePoster]; // Only keeping the paramorePoster image

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
      {/* Poster designs */}
      <div className="columns-1 p-5 md:p-10 m-5 md:m-10">
        <div className="md:p-20 sm:mx-8 md:mx-16 md:m-20 lg:mx-52">
        <h1
  className="mt-0 md:-mt-48 text-center leading-tight md:leading-normal"
  style={{
    fontFamily: 'Bebas Neue',
    color: '#6ac9cb',
    fontSize: '3rem',
    textAlign: 'center'
  }}
>
  Paramore 'This is Why' Tour Poster
</h1>


          {/* Project Description and Introduction */}
          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-84 mb-6 leading-relaxed">
            This tour poster was designed in Adobe Photoshop and Illustrator and was a very fun self-oriented project to work on. I saw the need for a separate tour poster series
            because I saw someone on Instagram make a whole series of posters for another tour, and thought it would be a cool thing to do myself. I also didn't like the actual tour posters
            very much, so I designed my own.
          </p>

          {/* Poster image */}
          {mediaItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center">
  <img
    src={item}
    className="w-[700px] h-auto object-cover rounded shadow-md mt-5 md:mt-0 cursor-pointer"
    alt={`Poster ${index + 1}`}
    onClick={() => handleMediaClick(item)}
  />
</div>


              <p className="text-center text-gray-600 mt-2 mb-4">
                {/* Add descriptive text for the image if needed */}
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
    </div>
  );
}

export default PosterDesign;
