import React from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

import magazineMockup1 from '../assets/images/MAGAZINES/cmba magazine mockups 1.png';
import magazineMockup2 from '../assets/images/MAGAZINES/cmba magazine mockups 2.png';
import magazineMockup3 from '../assets/images/MAGAZINES/cmba magazine mockups 3.png';
import flyerAd from '../assets/images/MAGAZINES/flyeer ad.png';
import legalDirectory1 from '../assets/images/MAGAZINES/legal directory 1.png';
import legalDirectory2 from '../assets/images/MAGAZINES/legal directory 2.png';

const Magazine = () => {
  return (
    <div>
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'Alte Haas Grotesk, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
        <h1 className="-mt-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          Magazine Spreads
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          Magazines and print materials created for the Cleveland Institute of Art and Cleveland Metropolitan Bar Association. For the Cleveland Metropolitan Bar Association, I created several designs that included badges, a monthly Bar Journal magazine, advertisements and flyers, and the legal directory for committees within the association. I carefully followed their brand guidelines and enjoyed adding touches of creativity to the work.
        </p>

{/* CIA Community Impact Report */}
        <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md pt-10">
          <div className="aspect-w-16 aspect-h-9">
          <iframe 
          title="Community Impact Report 2023-24"
          src="https://e.issuu.com/embed.html?d=24-25_ia_community_impact_report_issue&u=ciacollege" 
          width="1100" 
          height="625" 
          frameBorder="0" 
          allowFullScreen
          ></iframe>

          </div>
          <p className="text-center text-gray-600 mt-3 mb-10">
            Cleveland Institute of Art's Community Impact Report 2023-24.
          </p>
        </div>

        {/* CIA Winter Link 2025 */}
        <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md">
          <div className="aspect-w-16 aspect-h-9">
          <iframe 
          title="Community Impact Report 2023-24"
          src="https://e.issuu.com/embed.html?d=24-25_ia_winter_link_magazine_final_2.0&u=ciacollege" 
          width="1100" 
          height="625" 
          frameBorder="0" 
          allowFullScreen
          ></iframe>

          </div>
          <p className="text-center text-gray-600 mt-3 mb-10">
            Cleveland Institute of Art's Winter Link 2025 including the annual report.
          </p>
        </div>

{/* Summer Link 2024 */}
        <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md">
          <div className="aspect-w-16 aspect-h-9">
          <iframe 
            title="Issuu Magazine"
            src="https://e.issuu.com/embed.html?d=23-24_ia_summer_link_magazine&u=ciacollege" 
            width="1100" 
            height="625" 
            frameBorder="0" 
            allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-600 mt-3 mb-10">
            Cleveland Institute of Art Summer Link 2024.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full p-1 md:px-0">
            <img src={magazineMockup1} className="w-full h-auto object-cover rounded shadow-md" alt="cmba magazine spread mockups" />
          </div>
          <div className="w-full p-1 md:px-0">
            <img src={magazineMockup2} className="w-full h-auto object-cover rounded shadow-md" alt="cmba magazine spread mockups" />
          </div>
          <div className="w-full p-1 md:px-0">
            <img src={magazineMockup3} className="w-full h-auto object-cover rounded shadow-md" alt="cmba magazine spread mockups" />
          </div>
        </div>

        <p className="mb-3 text-center text-gray-600 mt-2 pb-5">Layout Designs for the CMBA's monthly Bar Journal Magazine.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="col-span-2">
            <img src={flyerAd} className="w-full h-300 object-cover rounded shadow-md" alt="cmba flier design" />
            <p className="mb-3 text-center text-gray-600 mt-2">Fliers I designed for the association to assist the marketing dept.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={legalDirectory1} className="w-full h-100 object-cover rounded shadow-md" alt="cmba magazine legal directory mockup" />
          <img src={legalDirectory2} className="w-full h-100 object-cover rounded shadow-md" alt="cmba magazine legal directory mockup" />
        </div>
        <p className="mb-3 text-center text-gray-600 mt-2">Cleveland Metropolitan Bar Association's Legal Directory Design</p>
      </div>
    </div>
  );
};

export default Magazine;
