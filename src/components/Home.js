import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css'; // Importing custom styles from the CSS file
import Footer from './Footer'; // Importing the Footer component

// Importing images for the portfolio items
import AMBHHBrochureImage from '../assets/images/AGPRINT/AMB HH Brochures/AMB-HH-Brochure-Mockups.png';
import SbarroImage from '../assets/images/SBARRO/SBARRO-01.png';
import MagCoverSpread from '../assets/images/MAGAZINES/magazine-cover-spread.png';
import RoziThumbnail from '../assets/images/ROZIS/menu-mockup.png';
import PosterThumbnail from '../assets/images/POSTERS/paramore-columbus-poster.png';
import LagunaThumbnail from '../assets/images/LAGUNA/laguna-thumbnail.png';
import MileyThumbnail from '../assets/images/MILEY/miley-cyrus-thumbnail.png';
import selfiePhoto from '../assets/images/IMG_9186.png';
import dailyPlannerImage from '../assets/images/WEB DESIGN/daily-planner/Screen Shot 2024-04-09 at 6.21.28 PM.png';

function HomePage() {
    return (
        <div>
            {/* Section for the intro content */}
            <section>
                <div className="bg-custom-turquoise w-full">
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 px-4 md:px-8"> {/* Adjusted padding for mobile */}
                        
                        {/* Selfie image of the portfolio owner */}
                        <img
                            src={selfiePhoto}
                            alt="Stephanie Zolton"
                            className="w-full md:w-96 object-cover rounded-t-md md:rounded-l-md md:rounded-t-none"
                        />

                        {/* Section for the introduction text */}
                        <div className="bg-blue-600 text-white p-4 rounded-b-md md:rounded-r-md md:rounded-b-none flex flex-col justify-start">
                            
                            {/* Name heading with large font for the portfolio owner */}
                            <h2
    className="text-left pl-2 leading-none"
    style={{
        fontFamily: 'Bebas Neue',
        fontSize: '130px', // Main font size for mobile (default)
        color: 'white',
    }}
>
    {/* Mobile: This will display for small screens (mobile) */}
    <span
        className="block md:hidden"
        style={{ color: 'white', fontSize: '74px' }} // Slightly smaller font for mobile
    >
        Stephanie Zolton
    </span>

    {/* Tablet/desktop: This will display for medium and larger screens */}
    <span
        className="hidden md:block"
        style={{ color: 'white' }} // Standard font size for tablet and desktop
    >
        Stephanie Zolton
    </span>
</h2>


<p className="text-left 
            md:text-left   // Desktop: Keeps the text left-aligned
            text-gray-300 
            pl-4             // Mobile: Adds left padding
            md:pl-32        // Desktop: Adds a large left padding (adjust as needed)
            -mt-1 
            md:-mt-1        // Mobile and Desktop: Maintains the margin-top, no difference
            mb-2 
            md:mb-1         // Mobile: More margin at the bottom, Desktop: Less margin
            font-bold 
            text-lg 
            md:text-xl      // Mobile: Smaller font size, Desktop: Larger font size
">
    Graphic Designer • Illustrator • Publication Specialist
</p>



                            {/* Introductory paragraph about the portfolio owner */}
                            <p className="text-left text-gray-200 mt-4 text-base md:text-xl">
                                Welcome to my portfolio. I'm a graphic designer and illustrator with a style that focuses on a loose, fun, and efficient creative design and illustration process. 
                                With a keen eye for detail and love for art, I specialize in crafting visual stories that captivate and inspire users. I have a detailed working experience that focuses on
                                print production, apparel design/illustration, and brand identity as well as an ability to build and retain client relationships.
                                <br /><br />
                                Explore my projects to see how I've helped companies, especially higher education, stay relevant and inspire others through graphic design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section title for the projects */}
            <h1 className="text-center mb-8 pt-10 text-4xl sm:text-5xl" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#6ac9cb' }}>
                Projects
            </h1>

            {/* Grid container for portfolio items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 pt-4 px-4 sm:px-8 md:p-12 m-4">
                
                {/* Portfolio items */}

                <PortfolioItem
                    link="/SbarroPizza"
                    image={SbarroImage}
                    title="Sbarro Rebranding Design"
                />

                
                <PortfolioItem
                    link="/PrintMedia"
                    image={AMBHHBrochureImage}
                    title="CIA: Community Impact Report"
                />
                
                <PortfolioItem
                    link="/magazine"
                    image={MagCoverSpread}
                    title="LINK Magazine"
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
                    link="/laguna"
                    image={dailyPlannerImage}
                    title="Interactive Daily Planner"
                />
                <PortfolioItem
                    link="/miley"
                    image={MileyThumbnail}
                    title="Book Publishing"
                />
            </div>

        </div>
    );
}

// Portfolio item component
// This component represents a single portfolio item with a link, image, and title.
function PortfolioItem({ link, image, title }) {
    return (
        <div className="bg-transparent rounded overflow-hidden flex justify-center">
            {/* Link wrapping the portfolio item */}
            <Link to={link} className="block group w-full max-w-[800px]">
                <div className="relative">
                    
                    {/* Portfolio item image with hover effect */}
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
                        <img src={image} className="w-full h-full object-cover rounded" alt={title} />
                    </div>

                    {/* Portfolio item title */}
                    <h2 className="mt-2 pt-1 text-center pb-4" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '28px' }}>
                        {title}
                    </h2>
                </div>
            </Link>
        </div>
    );
}

export default HomePage;
