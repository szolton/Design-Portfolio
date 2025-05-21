import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css'; // Importing custom styles from the CSS file
import Footer from './Footer'; // Importing the Footer component

// Importing images for the portfolio items
import SbarroImage from '../assets/images/SBARRO/SBARRO-01.webp';

import RoziThumbnail from '../assets/images/ROZIS/menu-mockup.webp';
import PosterThumbnail from '../assets/images/POSTERS/paramore-columbus-poster.webp';
import MileyThumbnail from '../assets/images/miley-cyrus-thumbnail.webp';
import selfiePhoto from '../assets/images/IMG_9186.png';
import dailyPlannerImage from '../assets/images/daily-planner-thumbnail.webp'
import ciaImpactReport from '../assets/images/cia-impact-report.webp';
import ciaLinkWinter2024 from '../assets/images/cia-link.webp';
import ciaAlumniThumbnail from '../assets/images/alumni-exhibitionthumbnail.png';

// Portfolio item component
function PortfolioItem({ link, image, title }) {
    return (
        <div className="w-full max-w-[400]"> {/* Consistent size for the items */}
            <Link to={link} className="block group">
                <div className="relative">
                    <div className="w-full aspect-square bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
                        <img
                            src={image}
                            className="w-full h-full object-cover rounded"
                            alt={title}
                        />
                    </div>
                    <h2
  className="mt-2 text-center leading-tight"
  style={{
    fontFamily: 'Bebas Neue',
    color: '#6ac9cb',
    fontSize: '40px',
  }}
>
  {title}
</h2>

                </div>
            </Link>
        </div>
    );
}

function HomePage() {
    return (
        <div>
            {/* Section for the intro content */}
            <section>
                <div className="bg-custom-turquoise w-full">
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 px-4 md:px-8"> {/* Padding added here for mobile and medium+ screens */}
                        {/* Selfie image of the portfolio owner */}
                        <img
                            src={selfiePhoto}
                            alt="Stephanie Zolton"
                            className="w-full md:w-96 object-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
                        />

                        {/* Section for the introduction text */}
                        <div className="bg-blue-600 text-white p-4 rounded-b-md md:rounded-r-md md:rounded-b-none flex flex-col justify-start">
                            <h2
                                className="text-left pl-2 leading-none"
                                style={{
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '130px',
                                    color: 'white',
                                }}
                            >
                                <span
                                    className="block md:hidden"
                                    style={{ color: 'white', fontSize: '74px' }}
                                >
                                    Stephanie Zolton
                                </span>
                                <span
                                    className="hidden md:block"
                                    style={{ color: 'white' }}
                                >
                                    Stephanie Zolton
                                </span>
                            </h2>

                            <p className="text-left md:text-left text-gray-300 pl-4 md:pl-18 -mt-1 md:-mt-1 mb-2 md:mb-1 font-bold text-lg md:text-xl tracking-widest">
                                GRAPHIC DESIGNER • ILLUSTRATOR • PUBLICATION SPECIALIST
                            </p>

                            <p className="text-left text-gray-200 mt-4 text-base md:text-xl">
                                Welcome to my portfolio. I'm a graphic designer and illustrator with a style that focuses on a loose, fun, and efficient creative design and illustration process.
                                With a B.A. in Visual Communication Design from Kent State University, I have a detailed working experience that focuses on
                                print media and production, apparel design/illustration, and visual, brand identity as well as an ability to build and retain client relationships.
                                <br /><br />
                                Explore my projects to see how I've helped companies, especially higher education, stay relevant and inspire others through graphic design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section title for the projects */}
            <h1 className="text-center mb-8 pt-10 text-5xl sm:text-6xl lg:text-7xl" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb' }}>
                Projects
            </h1>

            {/* Grid container for portfolio items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 sm:px-4 sm:py-4 md:mx-6 lg:mx-48">
                {/* Portfolio items */}
                <PortfolioItem
                    link="/CIAImpactReport"
                    image={ciaImpactReport}
                    title="CIA: Community Impact Report"
                />
                <PortfolioItem
                    link="/WinterLinkMagazine"
                    image={ciaLinkWinter2024}
                    title="Winter 2024 Link Magazine"
                />

<PortfolioItem
                    link="/AlumniExhibition2023"
                    image={ciaAlumniThumbnail}
                    title="2023-24 Alumni Exhibition"
                />
                <PortfolioItem
                    link="/SbarroPizza"
                    image={SbarroImage}
                    title="Sbarro Rebranding Design"
                    />

                    <PortfolioItem
                    link="/InteractiveDailyPlanner"
                    image={dailyPlannerImage}
                    title="Interactive Daily Planner"
                />
              
                <PortfolioItem
                    link="/RoziBrandIdentity"
                    image={RoziThumbnail}
                    title="Rozi's Brand Identity"
                />
                <PortfolioItem
                    link="/posterdesign"
                    image={PosterThumbnail}
                    title="Paramore Band Poster"
                />
             
                <PortfolioItem
                    link="/miley"
                    image={MileyThumbnail}
                    title="Miley Cyrus Book Design"
                />
            </div>
        </div>
    );
}

export default HomePage;
