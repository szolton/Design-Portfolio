import React from 'react';
import '../assets/style.css'; // Assuming this imports your external styles

import AMBMockup from '../assets/images/AGPRINT/AMB HH Brochures/AMB-HH-Brochure-Mockups.png';
import AMBReference1 from '../assets/images/AGPRINT/AMB HH Brochures/AMB-HH-reference.png';
import AMBReference2 from '../assets/images/AGPRINT/AMB HH Brochures/AMB-HH-reference-2.png';
import AMBFinal1 from '../assets/images/AGPRINT/AMB HH Brochures/AMB HH Brochures 2023 final_01.png';
import AMBFinal2 from '../assets/images/AGPRINT/AMB HH Brochures/AMB HH Brochures 2023 final_02.png';
import AvenueMockup from '../assets/images/AGPRINT/Avenue at Lyndhurst/Avenue Lyndhurst Brochure Mockups.png';
import AvenueReference from '../assets/images/AGPRINT/Avenue at Lyndhurst/Avenue Lyndhurst big-flowy brochure.png';
import AvenueFinal1 from '../assets/images/AGPRINT/Avenue at Lyndhurst/Avenue Lyndhurst Brochures 2022_01.png';
import AvenueFinal2 from '../assets/images/AGPRINT/Avenue at Lyndhurst/Avenue Lyndhurst Brochures 2022_02-01.png';
import VillageMockup from '../assets/images/AGPRINT/Village of HH Brochure/Village of Huber Heights Mockups.png';
import VillageReference1 from '../assets/images/AGPRINT/Village of HH Brochure/Village Brochure 1 (2).png';
import VillageReference2 from '../assets/images/AGPRINT/Village of HH Brochure/Village Brochure 2 (2).png';
import VillageFinal1 from '../assets/images/AGPRINT/Village of HH Brochure/Village of Huber Memory Care Brochures 2023 JJ_01.png';
import VillageFinal2 from '../assets/images/AGPRINT/Village of HH Brochure/Village of Huber Memory Care Brochures 2023 JJ_02.png';
import Stickers from '../assets/images/AGPRINT/stickers-01.png';
import ODOTMockup from '../assets/images/AGPRINT/ODOT Banner Stands.png';

const PrintMedia = () => {
  return (
    <div>
      {/* Navigation Header Info Bar */}
      <header className="nav-header bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="./index.html">
            <h1 style={{ fontFamily: 'Bebas Neue', fontSize: '90px' }}>Stephanie Zolton</h1>
          </a>
        </div>

        <nav className="mt-8">
          <ul className="flex">
            <li><a href="./index-apparel.html" className="hover:text-gray-600">ILLUSTRATIONS</a></li>
            <li><a href="./index-web.html" className="hover:text-gray-600">WEB DESIGN</a></li>
            <li><a href="./index-about.html" className="hover:text-gray-600">ABOUT</a></li>
            <li><a href="./images/Zolton_resume.pdf" className="hover:text-gray-600">RESUME</a></li>
          </ul>
        </nav>
      </header>

      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      {/* AMB Brochure */}
      <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          PRINT MEDIA: BROCHURES & ADS
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          Brochures and print collateral designed for healthcare facilities, government, and local colleges while at The Sourcing Group/AG Print Promo Solutions.
        </p>

        <img src={AMBMockup} className="w-300 h-200 object-cover rounded shadow-md" alt="amb brochure design mockup" />
        <p className="mb-3 text-center text-gray-600 mt-2">A brochure designed for AM Behavioral Health.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={AMBReference1} className="w-full md:w-300 h-200 object-cover rounded shadow-md" alt="amb brochure reference" />
          <img src={AMBReference2} className="w-full md:w-300 h-200 object-cover rounded shadow-md" alt="amb brochure final design" />
        </div>

        <p className="mb-3 text-center text-gray-600 mt-2">Their old brochure design that we referenced to update their artwork.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={AMBFinal1} className="object-cover rounded shadow-md" alt="brochure design mockup" />
          <img src={AMBFinal2} className="object-cover rounded shadow md" alt="brochure design mockup" />
        </div>

        <p className="mb-3 text-center text-gray-600 mt-2">The final design they approved and that went to print. It was cleaned up, modernized, and used more shades of blue like they wanted.</p>

        {/* Avenue Lyndhurst Brochures */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-2">
            <img src={AvenueMockup} className="w-full h-300 object-cover rounded shadow-md" alt="brochure design mockup" />
            <p className="mb-3 text-center text-gray-600 mt-2">A brochure designed for Avenue at Lyndhurst.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-2">
            <img src={AvenueReference} className="w-full h-300 object-cover rounded shadow-md" alt="brochure design references" />
            <p className="mb-3 text-center text-gray-600 mt-2">We sent them a few screenshots of design inspo, and this is the reference they liked the most.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={AvenueFinal1} className="object-cover rounded shadow-md" alt="final brochure design" />
          <img src={AvenueFinal2} className="object-cover rounded shadow md" alt="final brochure design" />
        </div>
        <p className="mb-3 text-center text-gray-600 mt-2">The final design they approved and that went to print. It was cleaned up, modernized, and focused more on the vegas gold color they requested.</p>

        {/* Village of Huber Heights Brochures */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-2">
            <img src={VillageMockup} className="w-full h-300 object-cover rounded shadow-md" alt="brochure design mockup" />
            <p className="mb-3 text-center text-gray-600 mt-2">A brochure designed for the Village of Huber Heights.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={VillageReference1} className="object-cover rounded shadow-md" alt="brochure design reference" />
          <img src={VillageReference2} className="object-cover rounded shadow md" alt="brochure design reference" />
        </div>
        <p className="mb-3 text-center text-gray-600 mt-2">Their old brochure design that we referenced to update their artwork.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src={VillageFinal1} className="object-cover rounded shadow-md" alt="final brochure design" />
          <img src={VillageFinal2} className="object-cover rounded shadow md" alt="final brochure design" />
        </div>
        <p className="mb-3 text-center text-gray-600 mt-2">The final design they approved and that went to print. It was cleaned up, modernized, and used more shades of blue like they wanted.</p>

        {/* Stickers */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-2">
            <img src={Stickers} className="w-full h-300 object-cover rounded shadow-md" alt="brochure design mockup" />
            <p className="mb-3 text-center text-gray-600 mt-2">A sample of stickers that I have designed for AMB HH.</p>
          </div>
        </div>

        {/* ODOT Banner */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-2">
            <img src={ODOTMockup} className="w-full h-300 object-cover rounded shadow-md" alt="brochure design mockup" />
            <p className="mb-3 text-center text-gray-600 mt-2">A banner stand designed for ODOT for a career fair event.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintMedia;
