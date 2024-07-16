import React from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

// Importing images
import page1 from '../assets/images/LAGUNA/page 1 copy.png'
import page2 from '../assets/images/LAGUNA/page 2 copy.png';
import page3 from '../assets/images/LAGUNA/page 4 copy.png';
import page4 from '../assets/images/LAGUNA/page 6 copy.png';
import page5 from '../assets/images/LAGUNA/page 8 copy.png';
import page6 from '../assets/images/LAGUNA/page 10 copy.jpg';
import page7 from '../assets/images/LAGUNA/page 12 copy.jpg';
import page8 from '../assets/images/LAGUNA/page 14 copy.png';

const Laguna = () => {
  return (
    <div>
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>
      <div className="columns-1 p-5 md:p-10 m-5 md:m-10">
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          'Laguna' Typeface Design
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          The purpose of this project was to design a cohesive typeface for a client. Laguna is a natural display typeface designed for print and is intended to combine blackletter with slab serif typefaces.
        </p>
        <img src={page1} className="mx-auto w-full object-cover rounded shadow-md" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} alt="laguna page 3+4" />
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={page2} className="mx-auto w-full object-cover rounded shadow-md" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} alt="laguna page 3+4" />
          <img src={page3} className="mx-auto w-full object-cover rounded shadow-md" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} alt="laguna page 5+6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={page4} className="mx-auto w-full object-cover rounded shadow-md" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} alt="laguna page 7+8" />
          <img src={page5} className="mx-auto w-full object-cover rounded shadow-md" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} alt="laguna page 9+10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={page6} className="mx-auto w-full object-cover rounded shadow-md" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} alt="laguna page 11+12" />
          <img src={page7} className="mx-auto w-full object-cover rounded shadow-md" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} alt="laguna page 13+14" />
        </div>
        <img src={page8} className="mx-auto w-full object-cover rounded shadow-md" style={{ maxWidth: '100%', height: 'auto', padding: '10px' }} alt="laguna page 3+4" />
     
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Laguna;
