import React from 'react';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

const Magazine = () => {
  return (
    <div className="columns-1 p-3 md:p-10 m-5 md:m-10">
      {/* Rozi's Main Brand */}
      <div className="columns-1 p-0 md:p-0 m-0">
        <div className="md:p-10 sm:mx-4 md:mx-8 lg:mx-32">
          <h1
            className="mt-0 md:mt-[-64px] text-center"
            style={{
              fontFamily: 'Bebas Neue',
              color: '#6ac9cb',
              fontSize: '3rem',
              textAlign: 'center'
            }}
          >
            Winter 2024 Link Magazine
          </h1>

          {/* Project Description and Introduction */}
          <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-8 xl:mx-8 2xl:mx-48 mb-6 leading-relaxed">

            The Winter Issue of Cleveland Institute of Art's Link magazine. I designed a 40-page community and donor-focused magazine that included an 12-page annual report section that's aimed at showcasing CIA's yearly achievements,
            donors, community partnerships and program highlights. The publication was created for print and digital distribution.
            <br></br>
            <br></br>

            Key responsibilities were editorial design and leading the visual design and layout of all 40 pages, including article features, infographics and the report, seamlessly integrating the annual report into the magazine format while
            balancing narrative storytelling with a lot of content, an understanding of visual hierarcy and typography, infographic and data design with making custom charts and graphs to visually communicate key metrics and financial summaries,
            photo editing, and prepared files for professional print production and optimized layouts for digital formats with pdfs and web-based viewing.
            
           
          </p>

          {/* Issuu Embed */}
          <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
  <div className="max-w-screen-lg mx-auto">
    <div className="aspect-video rounded-md overflow-hidden shadow-lg">
      <iframe
        title="issuu-embed"
        src="https://e.issuu.com/embed.html?d=24-25_ia_winter_link_magazine_final_2.0&u=ciacollege"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

        </div>
      </div>


    </div>
  );
};

export default Magazine;
