import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css'; // Assuming you have a CSS file for custom styles
import Footer from './Footer'; // Import the Footer component

import AMBHHBrochureImage from '../assets/images/AGPRINT/AMB HH Brochures/AMB-HH-Brochure-Mockups.png';
import SbarroImage from '../assets/images/SBARRO/SBARRO-01.png';
import MagCoverSpread from '../assets/images/MAGAZINES/magazine-cover-spread.png';
import RoziThumbnail from '../assets/images/ROZIS/menu-mockup.png';
import PosterThumbnail from '../assets/images/POSTERS/paramore-columbus-poster.png';
import LagunaThumbnail from '../assets/images/LAGUNA/laguna-thumbnail.png';
import MileyThumbnail from '../assets/images/MILEY/miley-cyrus-thumbnail.png';

function HomePage() {
    return (
        <div>
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>

            <section>
                <div className="title-headers">
                    <h2 className="mt-2 pt-5 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                        Welcome to my Portfolio
                    </h2>
                    <p className="mb-3">
                        Take a look around -- my design style focuses on a loose, fun, and efficient illustration process.
                    </p>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 p-4">
                <PortfolioItem
                    link="/PrintMedia"
                    image={AMBHHBrochureImage}
                    title="Print Media: Brochures & Advertising"
                />
                <PortfolioItem
                    link="/SbarroPizza"
                    image={SbarroImage}
                    title="Sbarro Rebranding Design"
                />
                <PortfolioItem
                    link="/magazine"
                    image={MagCoverSpread}
                    title="Magazine Spreads"
                />
                <PortfolioItem
                    link="/RoziBrandIdentity"
                    image={RoziThumbnail}
                    title="Rozi's Brand Identity"
                />
                <PortfolioItem
                    link="/posterdesign"
                    image={PosterThumbnail}
                    title="Poster Designs"
                />
                <PortfolioItem
                    link="/laguna"
                    image={LagunaThumbnail}
                    title="'Laguna' Typeface Design"
                />
                <PortfolioItem
                    link="/miley"
                    image={MileyThumbnail}
                    title="Book Publishing"
                />
            </div>

            <Footer /> {/* Add the Footer component here */}
        </div>
    );
}

// Portfolio item component
function PortfolioItem({ link, image, title }) {
    return (
        <div className="bg-transparent rounded overflow-hidden">
            <Link to={link} className="block group">
                <div className="relative">
                    <div className="w-full h-64 bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
                        <img src={image} className="w-full h-full object-cover rounded" alt={title} />
                    </div>
                    <h2 className="mt-2 pt-1 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '32px' }}>
                        {title}
                    </h2>
                </div>
            </Link>
        </div>
    );
}

export default HomePage;
