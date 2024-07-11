// src/Miley.js

import React from 'react';
import '../App.css';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component


function Miley() {
  return (
    <div>
     

      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      <div className="columns-1 p-10 m-10">
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Book Publishing Design
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          A book inspired by Miley Cyrus's role in being on the Times 100 list that focuses on her rise to stardom and her role in social activism.
          I used Adobe InDesign, Illustrator and Photoshop to create a series of infographics, photo illustrations and page design based on her life with a bright color palette and sharp imagery.
        </p>

        <div className="flex justify-center">
          <div className="-p-10 -mt-10">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/838391436?h=1e1a2f9369"
              width="1120"
              height="670"
              frameBorder="0"
              allowFullScreen
              alt="miley cyrus book presentation video"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Miley;
