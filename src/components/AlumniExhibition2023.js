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

            <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-16 mb-6 leading-relaxed">

              Led the design and production of all visual materials for a curated alumni exhibition at CIA, including a 40-page exhibition program booklet, hanging wall vinyl, printed collateral, and event signage. The goal was
              to celebrate alumni artists and create a cohesive, professional experience for all audiences.
              <br></br>
              <br></br>

              Key responsibilities were creating an exhibition booklet that was a catalog featuring artists, artwork, etc and managed layout, image placement, and typography to ensure visual cohesion and readability, wall vinyl, event signage
              that included directional signage, mailed invitations, print production management where I coordinated with vendors to ensure the project was in-budget and doable in our timeframe, and collaboration. It was a huge collaboration with leadership, the
              gallery director, and the guest curator.
              

            
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
        The exhibition banner designed for the event.
      </p>
  
  </main>
</div>

 

{/* Second Image Section */}
<div className="w-full px-4 sm:px-6 lg:px-8 py-4">
  <div className="max-w-screen-lg mx-auto">
   
    <div className="aspect-video rounded-md overflow-hidden shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 -mb-6">
      Alumni Artist Exhibition Booklet
    </h2>
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




  

</div>

<p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-84 mb-6 leading-relaxed">
      I designed this booklet that detailed every artist in the exhibition, and their pieces that were on display. It has a blurb from the artist and images of their work in the exhibition.
    </p>


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

    <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-84 mb-6 leading-relaxed">
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

      <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-84 mb-6 mt-3 leading-relaxed">
        I designed signage for the check-in table for a last-minute venue update for the exhibition's after-party seen here, as well as monitor graphics that were
        viewed all over the building and kiosk ads supporting the exhibition.
      </p>

      
  
  </main>

  <div className="grid place-items-center">
        <img
          src={monitorGraphic}
          className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer mb-4"
          alt="monitor graphics"
          onClick={() => handleImageClick(monitorGraphic)}
        />

<p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-84 mb-6 mt-0 leading-relaxed">
        This is an example of the monitor graphics I made for the exhibition to advertise it within the visual identity.
      </p>
      </div>
  <div className="grid place-items-center">
        <img
          src={kioskAd}
          className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
          alt="Exhibition Banner"
          onClick={() => handleImageClick(kioskAd)}
        />
        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-84 mb-6 mt-3 leading-relaxed">
        This is an example of the UCI Kiosk Ad I designed that was on display at University Circle. It was a large scale formatted print that was printed in-house and coordinated with UCI to set up.
      </p>
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
 