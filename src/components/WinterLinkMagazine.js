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

            The Winter Issue of Cleveland Institute of Art's Link magazine. This issue was a 40-page magazine that included the college's annual report, 
            which graphics were used in discussions of fundraising with donors. It was a largely collaborative effort with creating infographics, organizing 
            content, and following the brand guide.
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
