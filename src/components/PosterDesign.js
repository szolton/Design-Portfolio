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
  Paramore Live in Columbus Poster
</h1>


          {/* Project Description and Introduction */}
          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-84 mb-6 leading-relaxed">
            I designed an original promotional poster for a live performance by Paramore for their June 2023 concert at the Schottenstein Center in Columbus, Ohio. The poster blends bold visuals, concert photography, and
            stylized illustration to capture the energy of the performance and resonate with the band's aesthetic and fan base. I developed a high-energy composition that featured my original concept: a stylized image of the lead singer
            Hayley Williams, framed within the state shape of Ohio to further anchor the location, as well as integrating rays of light and dynamic elements to highlight a sense of fluidity within the design.
            <br></br>
            <br></br>
            I balanced bold headline typography with handwritten script accents to reflect Paramore's edgy, fun tone, as well as a cool-toned, high-contrast color palette inspired by vintage poster design to incorporate both a modern yet nostalgic
            vibe to the piece. The band's music is always changing and evolving, and the artwork should also be dynamic and fluid and energetic to reflect that. Overall, the poster captures the excitement of a one-night-only event and was designed
            to stand out and be a unique, special piece of art fans are proud to have.
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
