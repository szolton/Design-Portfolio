import React from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

// import magazineMockup1 from '../assets/images/MAGAZINES/cmba magazine mockups 1.png';
// import magazineMockup2 from '../assets/images/MAGAZINES/cmba magazine mockups 2.png';
// import magazineMockup3 from '../assets/images/MAGAZINES/cmba magazine mockups 3.png';
// import flyerAd from '../assets/images/MAGAZINES/flyeer ad.png';
// import legalDirectory1 from '../assets/images/MAGAZINES/legal directory 1.png';
// import legalDirectory2 from '../assets/images/MAGAZINES/legal directory 2.png';

const Magazine = () => {
  return (
    <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
      {/* Rozi's Main Brand */}
      
      <main className="container mx-auto">
  <div className="sm:mx-8 md:mx-16 lg:mx-52 -mt-6 pt-4 md:pt-0"> {/* reduced from pt-32 md:pt-64 */}
  <h1
  className="text-center leading-tight md:leading-normal"
  style={{
    fontFamily: 'Bebas Neue',
    color: '#6ac9cb',
    fontSize: '3rem',
    textAlign: 'center',
  }}
>
  CIA Community Impact Report
</h1>



          <p className="text-left text-gray-600 mb-5 md:mb-10">
          The annual issue of Cleveland Institute of Art's Community Impact Report. These infographics were well-received and were used in presentations, shared on fliers to donors and 
          helped fundraise.
          </p>
    

        {/* Logo Video Presentation */}
        <div className="max-w-full mx-auto h-auto overflow-hidden shadow-md">
          <div className="w-full sm:w-[640px] md:w-[720px] lg:w-[900px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2023-24 Community Impact Report</h2>
            <iframe
  title="issuu-embed"
  src="https://e.issuu.com/embed.html?d=24-25_ia_community_impact_report_issue&u=ciacollege"
  className="w-full h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
  frameBorder="0"
  allowFullScreen
></iframe>

         
          </div>
        </div>
        </div>

      
      </main>
    </div>
  );
};

export default Magazine;
