import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css'; // Assuming you have custom styles
import Footer from './Footer'; // Importing the Footer component

import wireframeImage from '../assets/images/WEB DESIGN/daily-planner/wireframe.png';
import colorPaletteImage from '../assets/images/WEB DESIGN/daily-planner/color2.png';

function WebPlanner() {
    return (
        <div className="bg-gray-100">
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>

            <section className="container mx-auto">
                <div className="title-headers text-center mt-10">
                    <h2 className="mt-2 pt-5 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                        Daily Interactive Planner
                    </h2>
                    </div>
                    <p className="mb-3 text-center text-gray-600 px-10">
    The purpose of this project was to work in a group setting and apply everything learned in class over the past six weeks to create a real-world front-end application for portfolios. We integrated interactive daily tasks with weather and news updates using APIs. The project features a cool-toned color palette, utilizes Bulma styling, and updates the date daily.
    To see more of my project, please follow this link to my GitHub: 
    <a href="https://github.com/davidbeane1983/Daily-Task-List" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2 text-gray-600">here</a>.
</p>
     </section>

            <main className="container mx-auto mt-10">
                <div className="md:p-20 md:m-20 p-5">
                    <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md md:-mt-20">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/933868374?h=373d68f675" width="1100" height="625" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 mt-3 mb-10">A video walkthrough of our project.</p>
                    <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md md:-mt-20">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/933873174?h=f7d18efc97" width="1100" height="625" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 mt-3 mb-10">A video showcasing the responsive mobile design.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        <img src={wireframeImage} className="object-contain rounded shadow-md h-full mx-auto" alt="Wireframe" />
                        <img src={colorPaletteImage} className="object-contain rounded shadow-md h-full mx-auto" alt="Color Palette" />
                    </div>

                    <h2 className="text-center text-6xl text-teal-500 font-bold my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                        In Conclusion
                    </h2>
                    <div className="flex justify-center">
                        <ul className="list-disc list-inside text-gray-600 text-left">
                            <li>Uses CSS framework other than Bootstrap. See: Bulma styling.</li>
                            <li>Is deployed to GitHub</li>
                            <li>Is interactive and uses 2 server-side API's</li>
                            <li>Has one pop up modal and client-side storage to store data.</li>
                            <li>Is responsive with a polished UI.</li>
                            <li>Has a clean repository.</li>
                        </ul>
                   
                    </div>
                    <br></br>
                    <p>Please follow this link to our fully deployed project on GitHub, and enjoy looking through the work our collective team effort produced:

https://davidbeane1983.github.io/Daily-Task-List/</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default WebPlanner;
