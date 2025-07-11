import React from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

import infoPowerpoint from '../assets/images/IMPACT REPORT/presentation.jpg';
import infoGraphicHandout from '../assets/images/IMPACT REPORT/handout.jpg';
// import magazineMockup3 from '../assets/images/MAGAZINES/cmba magazine mockups 3.png';
// import flyerAd from '../assets/images/MAGAZINES/flyeer ad.png';
// import legalDirectory1 from '../assets/images/MAGAZINES/legal directory 1.png';
// import legalDirectory2 from '../assets/images/MAGAZINES/legal directory 2.png';

const Magazine = () => {
  return (
    <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
      {/* Rozi's Main Brand */}
      
      <main className="container mx-auto">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-52 xl:mx-64 2xl:mx-80 -mt-6 pt-6 sm:pt-5 md:pt-4 lg:pt-3 xl:pt-2 2xl:pt-0">
 {/* reduced from pt-32 md:pt-64 */}
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



<p className="text-left text-gray-600 mb-5 md:mb-10 2xl:mb-14">

          I led the design and development of an 8-page Community Impact Report that showcased CIA's key initiatives, community partnerships, and measurable outcomes. My responsibilities were designing data visualizations,
          ensuring visual consistency with the brand guide, and working with leadership on creating an accurate, fun and engaging report.
          <br></br>
          <br></br>
          
          These infographics were well-received and were used in presentations, shared on fliers to donors and 
          helped fundraise. I designed the multi-page document, created the infographics, and worked to pressent statistics and program outcomes in a clear, creative and visual way that aligned
          with the CIA brand guide. I coordinated with program managers and leadership to create, revise and present accurate, impactful content that's used on a variety of platforms. 

          </p>
    

        {/* Logo Video Presentation */}
        <div className="w-full max-w-full mx-auto h-auto overflow-hidden shadow-md px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
  <div className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl 2xl:max-w-[1400px] mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-4 text-left">
      2023–24 Community Impact Report
    </h2>
    <iframe
      title="issuu-embed"
      src="https://e.issuu.com/embed.html?d=24-25_ia_community_impact_report_issue&u=ciacollege"
      className="w-full h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
</div>

<h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-gray-800 mb-4 mt-8 text-left">
      Infographics for Handouts, Presentations
    </h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center mt-4 mb-6">
  
  
  <div className="w-full sm:w-[500px] md:w-full h-[500px]">
    
    <img
      src={infoGraphicHandout}
      alt="Postcard Design 1"
      className="w-full h-full object-cover rounded shadow-md cursor-pointer"
    />
  </div>
  <div className="w-full sm:w-[500px] md:w-full h-[500px]">
    <img
      src={infoPowerpoint}
      alt="Postcard Design 2"
      className="w-full h-full object-cover rounded shadow-md cursor-pointer"
    />
  </div>
</div>



        </div>

      
      </main>
    </div>
  );
};

export default Magazine;
