import React from 'react';
import '../assets/style.css'; // Assuming you have a CSS file for styles

function HomePage() {
    return (
        <div>
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
                {/* Replace each portfolio item with React components */}
                <PortfolioItem
                    link="./PrintMedia.js"
                    image="./AMB HH Brochures/AMB-HH-Brochure-Mockups.png"
                    title="Print Media: Brochures & Advertising"
                />
                <PortfolioItem
                    link="./index-sbarro.html"
                    image="./images/SBARRO/SBARRO-01.png"
                    title="Sbarro Rebranding Design"
                />
                <PortfolioItem
                    link="./index-magazines.html"
                    image="./images/MAGAZINES/magazine-cover-spread.png"
                    title="Magazine Spreads"
                />
                <PortfolioItem
                    link="./index-rozis.html"
                    image="./images/ROZIS/menu-mockup.png"
                    title="Rozi's Brand Identity"
                />
                <PortfolioItem
                    link="./index-posters.html"
                    image="./images/POSTERS/paramore-columbus-poster.png"
                    title="Poster Designs"
                />
                <PortfolioItem
                    link="./index-laguna.html"
                    image="./images/LAGUNA/laguna-thumbnail.png"
                    title="'Laguna' Typeface Design"
                />
                <PortfolioItem
                    link="./index-miley.html"
                    image="./images/MILEY/miley-cyrus-thumbnail.png"
                    title="Book Publishing"
                />
            </div>
        </div>
    );
}

// Portfolio item component
function PortfolioItem({ link, image, title }) {
    return (
        <div className="bg-transparent rounded overflow-hidden">
            <a href={link} className="block group">
                <div className="relative">
                    <div className="w-full h-64 bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
                        <img src={image} className="w-full h-full object-cover rounded" alt={title} />
                    </div>
                    <h2 className="mt-2 pt-1 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '32px' }}>
                        {title}
                    </h2>
                </div>
            </a>
        </div>
    );
}

export default HomePage;
