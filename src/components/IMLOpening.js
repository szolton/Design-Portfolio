import React, { useState } from "react";
import "../assets/style.css";
import "tailwindcss/tailwind.css";
import FullScreenImage from "./FullScreenImage";

// Import your images
import imlPosterInvite from "../assets/images/CIA IML Grand Opening/25-26_IA_IML Opening Invite.webp";
import imlEmailInvite from "../assets/images/CIA IML Grand Opening/Email invite.webp";
import imlPosterRSVP from "../assets/images/CIA IML Grand Opening/poster.webp";
import imlPosterRSVP2 from "../assets/images/CIA IML Grand Opening/25-26_IA_IML Opening Poster.webp";
import imlProgramCover from "../assets/images/CIA IML Grand Opening/IMLProgram.webp";
import imlProgramInside from "../assets/images/CIA IML Grand Opening/IML Program Inside.webp";
import imlProgramBack from "../assets/images/CIA IML Grand Opening/IML Program Back page.webp";
import imlTableOrange from "../assets/images/CIA IML Grand Opening/IMG_2781.webp";
import imlTableBlue from "../assets/images/CIA IML Grand Opening/IMG_2784.webp";

import ciaBuilding from "../assets/images/APPAREL/24-25_IA_Alumni spring appeal stickers_FINAL.webp";
import ciaBuildingProcess1 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-1.webp";
import ciaBuildingProcess2 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-2.webp";
import ciaBuildingProcess3 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-3.webp";
import ciaBuildingProcess4 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-4.webp";
import ciaBuildingProcess5 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-5.webp";
import ciaBuildingProcess6 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-6.webp";
import ciaBuildingProcess7 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia-building-process-7.webp";
import ciaBuildingEmail from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/cia sticker email.webp";
import ciaBuildingEmail2 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 4.webp";
import ciaBuildingEmail3 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 5.webp";
import ciaBuildingEmail4 from "../assets/images/APPAREL/CIA ALUM STICKER BUILDING/sticker email 6.webp";

const IMLOpening = () => {
  // 👇 use index instead of image src for reliability
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    imlPosterInvite,
    imlEmailInvite,
    imlPosterInvite,
    imlPosterRSVP,
    imlPosterRSVP2,
    imlProgramCover,
    imlProgramInside,
    imlProgramBack,
    imlTableOrange,
    imlTableBlue,
    ciaBuilding,
    ciaBuildingEmail,
    ciaBuildingEmail2,
    ciaBuildingEmail3,
    ciaBuildingEmail4,
    ciaBuildingProcess1,
    ciaBuildingProcess2,
    ciaBuildingProcess3,
    ciaBuildingProcess4,
    ciaBuildingProcess5,
    ciaBuildingProcess6,
    ciaBuildingProcess7,
  ];

  // Open image by index
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCloseFullScreen = () => {
    setCurrentIndex(null);
  };

  const handlePrevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
        <h1
          className="-mt-8 text-center"
          style={{ fontFamily: "Bebas Neue", color: "#6ac9cb", fontSize: "48px" }}
        >
          Interactive Media Lab Grand Opening
        </h1>

        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 leading-relaxed">
          The IML Opening celebrated the launch of the Cleveland Institute of Art’s Interactive
          Media Lab, a new creative hub for students exploring digital media, interactive design,
          and emerging technologies. I created the designs behind the event campaign that used a
          bold, fun and contemporary palette that reflected CIA’s forward-thinking spirit and the
          innovation behind the lab.
          <br />
          <br />
          A cohesive visual language was developed across print and digital applications, using
          photography and clean typography to express both the energy and precision of interactive
          design and showcase what the IML can offer the community.
        </p>

        {/* --- EMAIL INVITE SECTION --- */}
        <div className="mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
            IML Grand Opening Emailed Invitation
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-start gap-6">
            <img
              src={imlPosterInvite}
              className="w-full sm:w-[45%] h-[800px] object-cover rounded cursor-pointer 2xl:pl-44"
              onClick={() => handleImageClick(0)}
              alt="IML Poster Invitation"
            />
            <img
              src={imlEmailInvite}
              className="w-full sm:w-[45%] h-[800px] object-cover rounded cursor-pointer 2xl:pr-44"
              onClick={() => handleImageClick(1)}
              alt="IML Email Invitation"
            />
          </div>

          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
            The email invitation was designed to generate excitement and anticipation for the
            Cleveland Institute of Art’s Interactive Media Lab grand opening...
          </p>
        </div>

        {/* --- POSTER SECTION --- */}
        <div className="mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
            Poster Advertisements around Campus
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-start gap-6">
            <img
              src={imlPosterRSVP}
              className="w-full sm:w-[45%] h-[800px] object-cover rounded cursor-pointer"
              onClick={() => handleImageClick(3)}
              alt="IML Poster Advertisement"
            />
          </div>

          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
            A series of large-format posters were displayed throughout the Cleveland Institute of
            Art campus to promote the IML Grand Opening and encourage RSVPs...
          </p>
        </div>

        {/* --- PROGRAM SECTION --- */}
        <div className="mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
            Grand Opening Program Design
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-start gap-3 2xl:pl-44 2xl:pr-44">
            <img
              src={imlProgramCover}
              className="w-full sm:w-[30%] h-[400px] object-cover rounded cursor-pointer"
              onClick={() => handleImageClick(5)}
              alt="IML Program Cover"
            />
            <img
              src={imlProgramInside}
              className="w-full sm:w-[30%] h-[400px] object-cover rounded cursor-pointer"
              onClick={() => handleImageClick(6)}
              alt="IML Program Inside"
            />
            <img
              src={imlProgramBack}
              className="w-full sm:w-[30%] h-[400px] object-cover rounded cursor-pointer"
              onClick={() => handleImageClick(7)}
              alt="IML Program Back"
            />
          </div>

          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
            This event program was developed to finalize the concept by incorporating event details,
            speaker listings, and the event schedule...
          </p>
        </div>
      </div>

      {/* --- FULLSCREEN MODAL --- */}
      {currentIndex !== null && (
        <FullScreenImage
          src={images[currentIndex]}
          onClose={handleCloseFullScreen}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      )}
    </div>
  );
};

export default IMLOpening;
