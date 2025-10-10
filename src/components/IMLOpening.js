import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import FullScreenImage from './FullScreenImage';

// Import your images

import imlPosterInvite from '../assets/images/CIA IML Grand Opening/25-26_IA_IML Opening Invite.webp';
import imlEmailInvite from '../assets/images/CIA IML Grand Opening/Email invite.webp';
import imlPosterRSVP from '../assets/images/CIA IML Grand Opening/poster.webp';

import ciaBuilding from '../assets/images/APPAREL/24-25_IA_Alumni spring appeal stickers_FINAL.webp';
import ciaBuildingProcess1 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-1.webp';
import ciaBuildingProcess2 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-2.webp';
import ciaBuildingProcess3 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-3.webp';
import ciaBuildingProcess4 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-4.webp';
import ciaBuildingProcess5 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-5.webp';
import ciaBuildingProcess6 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-6.webp';
import ciaBuildingProcess7 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-7.webp';
import ciaBuildingEmail from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia sticker email.webp';
import ciaBuildingEmail2 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 4.webp';
import ciaBuildingEmail3 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 5.webp';
import ciaBuildingEmail4 from '../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 6.webp';




const IMLOpening = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  // Store images in an array
  const images = [ imlPosterInvite,

    imlEmailInvite,

    imlPosterInvite,
    
    ciaBuilding, ciaBuildingEmail, ciaBuildingEmail2, ciaBuildingEmail3, ciaBuildingEmail4, ciaBuildingProcess1, ciaBuildingProcess2, ciaBuildingProcess3, ciaBuildingProcess4, ciaBuildingProcess5, ciaBuildingProcess6, ciaBuildingProcess7];

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
          Interactive Media Lab Grand Opening
        </h1>
        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 leading-relaxed">

          The IML Opening celebrated the launch of the Cleveland Institute of Art’s Interactive Media Lab, a new creative hub for students exploring digital media, interactive design, and emerging technologies. 
          I created the designs behind the event campaign that used a bold, fun and contemporary palette that reflected CIA’s forward-thinking spirit and the innovation behind the lab.



         
      <br></br>
         <br></br>
         A cohesive visual language was developed across print and digital applications, using photography and clean typography to express both the energy and precision of interactive design and showcase what the IML can offer the community.
          
        </p>

        {/* Paramore Image Display */}
        
        
        <div className="mb-12 text-left">
  <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
    IML Grand Opening Emailed Invitation
  </h2>

  <div className="flex flex-col sm:flex-row justify-center items-start gap-6">
    <img
      src={imlPosterInvite}
      className="w-full sm:w-[45%] h-[800px] object-cover rounded cursor-pointer 2xl:pl-44"
      onClick={() => handleImageClick(imlPosterInvite, 0)}
      alt="IML Poster Invitation"
    />

    <img
      src={imlEmailInvite}
      className="w-full sm:w-[45%] h-[800px] object-cover rounded  cursor-pointer 2xl:pr-44"
      onClick={() => handleImageClick(imlEmailInvite, 1)}
      alt="IML Email Invitation"
    />
  </div>
</div>

<div className="mb-12 text-left">
  <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
    IML Grand Opening Emailed Invitation
  </h2>

  <div className="flex flex-col sm:flex-row justify-center items-start gap-6">
    <img
      src={imlPosterRSVP}
      className="w-full sm:w-[45%] h-[800px] object-cover rounded cursor-pointer 2xl:pl-44"
      onClick={() => handleImageClick(imlPosterInvite, 0)}
      alt="IML Poster Invitation"
    />

    <img
      src={imlEmailInvite}
      className="w-full sm:w-[45%] h-[800px] object-cover rounded  cursor-pointer 2xl:pr-44"
      onClick={() => handleImageClick(imlEmailInvite, 1)}
      alt="IML Email Invitation"
    />
  </div>
</div>




<p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
The email invitation was designed to generate excitement and anticipation for the Cleveland Institute of Art’s Interactive Media Lab grand opening. 
The design translated the event’s visual identity into a dynamic digital format that was both clean and engaging.

<br></br>
<br></br>

Featuring bold typography, vibrant accent colors, and geometric graphic elements inspired by interactive design, the layout guided the reader’s eye seamlessly 
from headline to RSVP. Subtle animation and layered composition added a sense of depth and movement, reflecting the innovative spirit of the new lab.

Consistent with the overall event branding, the email balanced modernity and clarity—delivering key details at a glance while conveying the creative energy behind 
CIA’s new interactive media space. The invitation on the left was emailed to donors and the right was used for internal advertising for the event.</p>



        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 leading-relaxed">
        Here's some of my work process. It includes design research such as sketching, the final color palette, different iterations, font explorations, and the final product deliverable. </p>

        <div className="flex flex-wrap justify-center gap-2">
  <img
    src={ciaBuildingProcess1}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess1, 0)}
    alt="cia building sketch process"
  />
  <img
    src={ciaBuildingProcess2}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess2, 0)}
    alt="cia building sketch process"
  />
  <img
    src={ciaBuildingProcess5}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess5, 0)}
    alt="cia building sketch process"
  />
</div>

<div className="flex flex-wrap justify-center gap-2 mt-3">
  <img
    src={ciaBuildingProcess6}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess6, 0)}
    alt="cia building sketch process"
  />
  <img
    src={ciaBuildingProcess4}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess4, 0)}
    alt="cia building sketch process"
  />
  <img
    src={ciaBuildingProcess3}
    className="max-w-[400px] w-full h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingProcess3, 0)}
    alt="cia building sketch process"
  />
</div>








        <img
  src={ciaBuildingProcess7}
  className="mx-auto w-full sm:w-[500px] md:w-[700px] lg:w-[500px] h-auto object-cover rounded shadow-md cursor-pointer mt-3"
  onClick={() => handleImageClick(ciaBuildingProcess7, 0)}
  alt="black parade art"
/>


        <p className="mb-3 text-center text-gray-600 mb-10 mt-2">
This is the final artwork that went to print.
</p>
    
<h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 pl-8 sm:pl-12 md:pl-20 lg:pl-28 xl:pl-36 2xl:pl-80">
  Email Campaign Promotions
</h2>

    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 mt-3 mx-4 2xl:mx-40">

  <img
    src={ciaBuildingEmail}
    className="w-full max-w-[400px] h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingEmail, 0)}
    alt="cia sticker promo email"
  />
  <img
    src={ciaBuildingEmail2}
    className="w-full max-w-[400px] h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingEmail2, 0)}
    alt="cia sticker promo email"
  />
  <img
    src={ciaBuildingEmail3}
    className="w-full max-w-[400px] h-[400px] object-cover rounded shadow-md cursor-pointer"
    onClick={() => handleImageClick(ciaBuildingEmail3, 0)}
    alt="cia sticker promo email"
  />
</div>




<p className="mb-3 text-center text-gray-600 mb-10 mt-2">
These are examples of how the artwork was used for email campaigns to help fundraise.
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

export default IMLOpening;
