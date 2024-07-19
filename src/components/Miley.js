import React from 'react';
import '../App.css';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

function Miley() {
  return (
    <div className="bg-gray-100">
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      <div className="container mx-auto px-4 sm:px-8 md:px-10">
        <h1
          className="-mt-1 pt-0 sm:pt-5"
          style={{
            fontFamily: 'Bebas Neue',
            color: '#6ac9cb',
            fontSize: '48px',
            textAlign: 'center',
          }}
        >
          Book Publishing Design
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10 px-4 sm:px-6 md:px-10">
          A book inspired by Miley Cyrus's role in being on the Times 100 list that focuses on her rise to stardom and her role in social activism.
          I used Adobe InDesign, Illustrator and Photoshop to create a series of infographics, photo illustrations and page design based on her life with a bright color palette and sharp imagery.
        </p>

        <div className="text-center mb-10">
          <p className="text-gray-600 mt-3 mb-10">A video showcasing the book publishing design.</p>
          <VideoEmbed src="https://player.vimeo.com/video/838391436?h=1e1a2f9369" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

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
      margin: 'auto'
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
        height: '100%'
      }}
    ></iframe>
  </div>
);

export default Miley;
 