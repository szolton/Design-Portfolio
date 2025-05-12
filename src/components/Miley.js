import React from 'react';
import '../App.css';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

// Move this above Miley() to avoid hoisting issues
const VideoEmbed = ({ src }) => (
  <div
    className="embed-container"
    style={{
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
      maxWidth: '100%',
      background: 'transparent',
      margin: 'auto',
    }}
  >
    <iframe
      src={src}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      title="Embedded Video"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    ></iframe>
  </div>
);

function Miley() {
  return (
    <div className="columns-1 p-5 md:p-10 m-5 md:m-10">
    <div className="md:p-20 sm:mx-8 md:mx-16 md:m-20 lg:mx-52">
      <h1
        className="mt-0 md:-mt-48 text-center"
        style={{
          fontFamily: 'Bebas Neue',
          color: '#6ac9cb',
          fontSize: '3rem',
          textAlign: 'center'
        }}
      >
        Miley Cyrus Book Design
      </h1>
        

        {/* Project Description and Introduction */}
        <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-32 mb-6 leading-relaxed">
          A book inspired by Miley Cyrus's role in being on the Times 100 list that focuses on her rise to stardom and her role in social activism. 
          I used Adobe InDesign, Illustrator, and Photoshop to create a series of infographics, photo illustrations, and page designs based on her life with a bright color palette and sharp imagery.
        </p>

        {/* Vimeo Video Embed */}
        <div className="max-w-full mx-auto h-auto overflow-hidden shadow-md px-4">
  <div className="w-full max-w-5xl mx-auto">
    <div className="aspect-video">
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/838391436?h=1e1a2f9369"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

      </div>
      {/* Optionally include Footer here if needed */}
      {/* <Footer /> */}
    </div>
  );
}

export default Miley;
