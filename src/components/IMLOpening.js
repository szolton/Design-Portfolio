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

const IMLOpening = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    imlPosterInvite,
    imlEmailInvite,
    imlPosterRSVP,
    imlPosterRSVP2,
    imlProgramCover,
    imlProgramInside,
    imlProgramBack,
    imlTableOrange,
    imlTableBlue,
  ];

  const handleImageClick = (index) => setCurrentIndex(index);
  const handleCloseFullScreen = () => setCurrentIndex(null);

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
          <br /><br />
          A cohesive visual language was developed across print and digital applications, using
          photography and clean typography to express both the energy and precision of interactive
          design and showcase what the IML can offer the community.
        </p>

  
{/* --- EMAIL INVITE SECTION --- */}
<div className="mb-12 text-left">
  <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
    IML Grand Opening Emailed Invitation
  </h2>

  <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-3 justify-items-center 2xl:pr-44 2xl:pl-44">
    <img
      src={imlPosterInvite}
      className="w-full h-[900px] object-cover rounded cursor-pointer"
      onClick={() => handleImageClick(0)}
      alt="IML Poster Invitation"
    />
    <img
      src={imlEmailInvite}
      className="w-full h-[900px] object-cover rounded cursor-pointer"
      onClick={() => handleImageClick(1)}
      alt="IML Email Invitation"
    />
</div>




          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
          The email invitation was crafted to spark excitement for the Cleveland Institute of Art’s Interactive Media Lab grand opening. 
          Bold visuals and clear event details captured the lab’s innovative spirit, encouraging recipients to RSVP and experience the creative energy of the IML firsthand. The left was sent to donors, and the right was emailed to the
          entire CIA community including faculty, staff, students and alumni.

          </p>
        </div>

       {/* --- POSTER SECTION --- */}
<div className="mb-12 text-left">
  <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
    Poster Advertisements around Campus
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 justify-items-center lg:pr-24 lg:pl-24 2xl:pl-64 2xl:pr-64">
    <img
      src={imlPosterRSVP}
      className="w-full h-[900px] object-cover rounded cursor-pointer"
      onClick={() => handleImageClick(2)}
      alt="IML Poster Advertisement"
    />
  </div>



          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
          A series of large-format posters were displayed throughout the Cleveland Institute of Art campus to promote the IML Grand Opening and encourage RSVPs, 
          using bold typography and vibrant imagery to capture attention and convey the excitement and innovative spirit of the new lab.

          </p>
        </div>

{/* --- PROGRAM SECTION --- */}
<div className="mb-12 text-left">
  <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
    Grand Opening Program Design
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-3 justify-items-center lg:pr-24 lg:pl-24 2xl:pl-44 2xl:pr-44">
  <img
    src={imlProgramCover}
    className="w-full h-[400px] lg:h-[700px] md:h-[600px] xl:h-[500px] 2xl:h-[550px] object-cover rounded cursor-pointer"
    onClick={() => handleImageClick(4)}
    alt="IML Program Cover"
  />
  <img
    src={imlProgramInside}
    className="w-full h-[400px] lg:h-[700px] md:h-[600px] xl:h-[500px] 2xl:h-[550px] object-cover rounded cursor-pointer"
    onClick={() => handleImageClick(5)}
    alt="IML Program Inside"
  />
  <img
    src={imlProgramBack}
    className="w-full h-[400px] md:h-[600px] lg:h-[700px] xl:h-[500px] 2xl:h-[550px] object-cover rounded cursor-pointer"
    onClick={() => handleImageClick(6)}
    alt="IML Program Back"
  />
</div>




          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
            The program guides users through the experience while showcasing vibrant, engaging imagery that illustrates the IML being utilized to its full potential and embracing the future of technology.
          </p>
        </div>

        {/* --- TABLE RUNNERS --- */}
        <div className="mb-12 text-left">
  <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-6 2xl:pl-64 xl:pl-12 lg:pl-4 md:pl-8 sm:pl-6">
    CIA Tablerunners
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 justify-items-center 2xl:pl-44 2xl:pr-44">
    <img
      src={imlTableOrange}
      className="w-full h-[800px] object-cover rounded cursor-pointer"
      onClick={() => handleImageClick(7)}
      alt="IML Table Orange"
    />
    <img
      src={imlTableBlue}
      className="w-full h-[800px] object-cover rounded cursor-pointer"
      onClick={() => handleImageClick(8)}
      alt="IML Table Blue"
    />
  </div>



          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-0 xl:mx-12 2xl:mx-60 mb-6 mt-8 leading-relaxed">
            These tables feature a mix of print materials I designed for the IML event, from reimagined digital media articles and eye-catching save-the-date mailers to vibrant brochures designed to showcase the lab’s energy and offerings.
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
