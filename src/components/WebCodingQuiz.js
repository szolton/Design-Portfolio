import React from 'react';
import '../assets/style.css'; // Assuming this path is correct
import Footer from './Footer'; // Importing the Footer component


function WebCodingQuiz() {
    return (
        <div className="bg-gray-100">
            {/* Navigation header */}
            <header className="nav-header bg-blue-800 text-white py-6">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <a href="./index.html" className="text-3xl font-bold font-bebas text-white">Stephanie Zolton</a>
                    <nav className="mt-6 sm:mt-0">
                        <ul className="flex space-x-4">
                            <li><a href="./Illustrations.js" className="hover:text-gray-300">ILLUSTRATIONS</a></li>
                            <li><a href="./WebHome.js" className="hover:text-gray-300">WEB DESIGN</a></li>
                            <li><a href="./About.js" className="hover:text-gray-300">ABOUT</a></li>
                            <li><a href="./images/Zolton_resume.pdf" className="hover:text-gray-300">RESUME</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <h4 className="text-left p-5 pl-7 text-blue-400 font-franklin text-lg">Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.</h4>

            <section className="container mx-auto">
                {/* Main content */}
                <div className="title-headers text-center mt-10">
                    <h2 className="mt-2 pt-5 text-blue-400 font-bebas text-4xl">Daily Interactive Planner</h2>
                    <p className="mb-3 text-center text-gray-600 px-10">The purpose of this project was to work in a group setting, and take everything we've learned in class over the past six weeks to create a real-world front-end application for our portfolios. Our purpose of this project was to create a webpage that uses interactive daily tasks in conjunction with the weather and news updates accordingly.</p>
                </div>
            </section>

            {/* Project details */}
            <main className="container mx-auto mt-10">
                <div className="md:p-20 md:m-20 p-5">
                    {/* Video screen recordings */}
                    <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md md:-mt-20">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/933868374?h=373d68f675" width="1100" height="625" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 mt-3 mb-10">A video walkthrough of our project. We used a Weather API and another API for the news section, and used JavaScript for the interactive to-do list. We wanted a cool-toned color palette, used Bulma styling, and set the date to update every day.</p>
                    <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md md:-mt-20">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/933873174?h=f7d18efc97" width="1100" height="625" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default WebCodingQuiz;
