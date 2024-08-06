import React, { useState } from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component
import FullScreenImage from './FullScreenImage'; // Ensure correct import path

// Importing images
import page1 from '../assets/images/LAGUNA/page 1 copy.png';
import page2 from '../assets/images/LAGUNA/page 2 copy.png';
import page3 from '../assets/images/LAGUNA/page 4 copy.png';
import page4 from '../assets/images/LAGUNA/page 6 copy.png';
import page5 from '../assets/images/LAGUNA/page 8 copy.png';
import page6 from '../assets/images/LAGUNA/page 10 copy.jpg';
import page7 from '../assets/images/LAGUNA/page 12 copy.jpg';
import page8 from '../assets/images/LAGUNA/page 14 copy.png';

const Laguna = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const images = [page1, page2, page3, page4, page5, page6, page7, page8];

  const handleImageClick = (src) => setFullScreenImage(src);
  const handleCloseFullScreen = () => setFullScreenImage(null);

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(fullScreenImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setFullScreenImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(fullScreenImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setFullScreenImage(images[nextIndex]);
  };

  return (
    <div>
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'Alte Haas Grotesk, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>
      <div className="columns-1 p-5 md:p-10 m-5 md:m-10">
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          'Laguna' Typeface Design
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          The purpose of this project was to design a cohesive typeface for a client. Laguna is a natural display typeface designed for print and is intended to combine blackletter with slab serif typefaces.
        </p>
        <img 
          src={page1} 
          className="mx-auto w-full object-cover rounded shadow-md" 
          style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} 
          alt="laguna page 1" 
          onClick={() => handleImageClick(page1)}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img 
            src={page2} 
            className="mx-auto w-full object-cover rounded shadow-md" 
            style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} 
            alt="laguna page 2" 
            onClick={() => handleImageClick(page2)}
          />
          <img 
            src={page3} 
            className="mx-auto w-full object-cover rounded shadow-md" 
            style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} 
            alt="laguna page 3" 
            onClick={() => handleImageClick(page3)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img 
            src={page4} 
            className="mx-auto w-full object-cover rounded shadow-md" 
            style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} 
            alt="laguna page 4" 
            onClick={() => handleImageClick(page4)}
          />
          <img 
            src={page5} 
            className="mx-auto w-full object-cover rounded shadow-md" 
            style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} 
            alt="laguna page 5" 
            onClick={() => handleImageClick(page5)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img 
            src={page6} 
            className="mx-auto w-full object-cover rounded shadow-md" 
            style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} 
            alt="laguna page 6" 
            onClick={() => handleImageClick(page6)}
          />
          <img 
            src={page7} 
            className="mx-auto w-full object-cover rounded shadow-md" 
            style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} 
            alt="laguna page 7" 
            onClick={() => handleImageClick(page7)}
          />
        </div>
        <img 
          src={page8} 
          className="mx-auto w-full object-cover rounded shadow-md" 
          style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} 
          alt="laguna page 8" 
          onClick={() => handleImageClick(page8)}
        />
      </div>

      {fullScreenImage && (
        <FullScreenImage
          src={fullScreenImage}
          onClose={handleCloseFullScreen}
          prevImage={handlePrevImage}
          nextImage={handleNextImage}
        />
      )}
    </div>
  );
};

export default Laguna;
