import React, { useState } from 'react';
import '../assets/style.css'; // Assuming this imports your external styles
import Footer from './Footer'; // Importing the Footer component
import FullScreenImage from './FullScreenImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Image imports
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
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [imageList, setImageList] = useState([
    AMBMockup,
    AMBReference1,
    AMBReference2,
    AMBFinal1,
    AMBFinal2,
    AvenueMockup,
    AvenueReference,
    AvenueFinal1,
    AvenueFinal2,
    VillageMockup,
    VillageReference1,
    VillageReference2,
    VillageFinal1,
    VillageFinal2,
    Stickers,
    ODOTMockup,
  ]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (src, index) => {
    setFullScreenImage(src);
    setCurrentIndex(index);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
    setCurrentIndex(null);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + imageList.length) % imageList.length;
      setFullScreenImage(imageList[newIndex]);
      return newIndex;
    });
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % imageList.length;
      setFullScreenImage(imageList[newIndex]);
      return newIndex;
    });
  };

  return (
    <div>
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>
      <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
        <h1 className="-mt-10" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb', fontSize: '48px', textAlign: 'center' }}>
          PRINT MEDIA: BROCHURES & ADS
        </h1>
        <p className="mb-3 text-center text-gray-600 mb-10">
          Brochures and print collateral designed for healthcare facilities, government, and local colleges while at The Sourcing Group/AG Print Promo Solutions.
        </p>

        {/* Display images */}
        {imageList.map((image, index) => (
          <div key={index} className="mt-10">
            <img
              src={image}
              className="w-full h-auto object-cover cursor-pointer"
              alt={`Design ${index}`}
              onClick={() => handleImageClick(image, index)}
            />
          </div>
        ))}

 
      </div>

      {fullScreenImage && (
        <FullScreenImage
          src={fullScreenImage}
          onClose={handleCloseFullScreen}
          prevImage={handlePrevImage}
          nextImage={handleNextImage}
        />
      )}
    </div>
  );
};

export default PrintMedia;
