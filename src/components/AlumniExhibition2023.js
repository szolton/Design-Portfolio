import React, { useState } from 'react';

import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import Footer from './Footer';
import FullScreenImage from './FullScreenImage'; // Import FullScreenImage component

// Import your images
import ciaAlumniThumbnail from '../assets/images/ALUMNI-EXHIBITION/alumni-exhibitionthumbnail.png';
import vinylGroupPhoto from '../assets/images/ALUMNI-EXHIBITION/vinyl-group.webp';
import postcard1 from '../assets/images/ALUMNI-EXHIBITION/IMG_0843.webp';
import postcard2 from '../assets/images/ALUMNI-EXHIBITION/IMG_0844.webp';
import signageCheckIn from '../assets/images/ALUMNI-EXHIBITION/53812881998_16cd8538c6_3k.webp';
import monitorGraphic from '../assets/images/ALUMNI-EXHIBITION/monitor-graphic.webp';
import kioskAd from '../assets/images/ALUMNI-EXHIBITION/kiosk-ad.webp';
// import artwork1 from '../assets/images/AlumniExhibition2023/artwork1.png';
// import artwork2 from '../assets/images/AlumniExhibition2023/artwork2.png';
// import artwork3 from '../assets/images/AlumniExhibition2023/artwork3.png';
// import exhibitionBanner from '../assets/images/AlumniExhibition2023/banner.png';

const AlumniExhibition2023 = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  const images = [
    vinylGroupPhoto,
    // artwork1,
    // artwork2,
    // artwork3,
    // exhibitionBanner
  ];

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
      {/* Project Title and Introduction */}
      <div className="p-3 md:p-10 m-5 md:m-10">
        <main className="container mx-auto mt-0">
          <div className="md:p-20 sm:mx-8 md:mx-16 md:m-20 lg:mx-52">
            <h1 className="mt-0 md:-mt-48 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '3rem' }}>
              2023-24 Alumni Exhibition
            </h1>

            <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-84 mb-6 leading-relaxed">
              A showcase of art and creativity from talented alumni. This exhibition highlights a diverse range of mediums and styles from a variety of 
              artists who have contributed to the cultural landscape over the years, focusing on the theme 'Are We There Yet?' and what it means to be a mature artist.
              This exhibition includes: vinyl, a booklet, mailed invitations, and signage all working fluidly with the visual identity.

            
            </p>

            {/* Exhibition Banner */}
            <div className="p-3 md:p-10 m-5 md:m-10">
  <main className="container mx-auto mt-0">

      {/* Header above the image */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">'Are We There Yet?' Exhibition Vinyl in Reinberger Gallery</h2>

      {/* Exhibition Banner */}
      <div className="grid place-items-center">
        <img
          src={vinylGroupPhoto}
          className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
          alt="Exhibition Banner"
          onClick={() => handleImageClick(ciaAlumniThumbnail)}
        />
      </div>

      <p className="text-left text-gray-600 mt-4 max-w-3xl px-4 leading-relaxed">
        The exhibition banner designed for the event. It was well-received by alumni, and followed the identity.
      </p>
  
  </main>
</div>

 

{/* Second Image Section */}
<div className="w-full px-4 sm:px-6 lg:px-8 py-4">
  <div className="max-w-screen-lg mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Alumni Artist Exhibition Booklet
    </h2>
    <div className="aspect-video rounded-md overflow-hidden shadow-lg">
      <iframe
        title="Community Impact Report"
        src="https://player.vimeo.com/video/1080880076"
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>



  <p className="-mt-4 text-left text-gray-600 max-w-3xl px-4 leading-relaxed">
      I worked with the Guest Curator, Magdalena Moskalewicz, and Director of Reinberger Gallery Nikki Woods, to create this booklet that described
       every artist in the exhibition, and their pieces that were on display.
    </p>
  
</div>


{/* Postcard Section */}
<div className="p-3 md:p-10 m-5 md:m-10">
  <main className="container mx-auto mt-0">

    {/* Header above the images */}
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Postcard Designs</h2>

    {/* Postcard 1 */}
    <div className="grid place-items-center mb-6">
      <img
        src={postcard1}
        alt="Postcard Design 1"
        className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
        onClick={() => handleImageClick(postcard1)}
      />
    </div>

    {/* Postcard 2 */}
    <div className="grid place-items-center mb-6">
      <img
        src={postcard2}
        alt="Postcard Design 2"
        className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
        onClick={() => handleImageClick(postcard2)}
      />
    </div>

    <p className="text-left text-gray-600 mt-4 max-w-3xl px-4 leading-relaxed">
      I designed these postcards as promotional pieces for the exhibition. They were distributed across campus and at alumni events.
    </p>

  </main>
</div>

<div className="p-3 md:p-10 m-5 md:m-10">
  <main className="container mx-auto mt-0">

      {/* Header above the image */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Signage</h2>

      {/* Exhibition Banner */}
      <div className="grid place-items-center">
        <img
          src={signageCheckIn}
          className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
          alt="Exhibition Banner"
          onClick={() => handleImageClick(signageCheckIn)}
        />
      </div>

      <p className="text-left text-gray-600 mt-4 mb-4 max-w-3xl px-4 leading-relaxed">
        I designed signage for the check-in table for a last-minute venue update for the exhibition's after-party seen here, as well as monitor graphics that were
        viewed all over the building and kiosk ads supporting the exhibition.
      </p>

      
  
  </main>

  <div className="grid place-items-center">
        <img
          src={monitorGraphic}
          className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer mb-4"
          alt="Exhibition Banner"
          onClick={() => handleImageClick(monitorGraphic)}
        />
      </div>
  <div className="grid place-items-center">
        <img
          src={kioskAd}
          className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
          alt="Exhibition Banner"
          onClick={() => handleImageClick(kioskAd)}
        />
      </div>
</div>


          </div>
        </main>
      </div>

      



      {/* Footer */}
 
    </div>
  );
};

export default AlumniExhibition2023;
 