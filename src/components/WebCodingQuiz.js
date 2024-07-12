import React from 'react';
import '../assets/style.css'; // Assuming this path is correct
import Footer from './Footer'; // Importing the Footer component

function WebCodingQuiz() {
    return (
        <div className="bg-gray-100">
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>
            <main className="container mx-auto p-5">
                <h2 className="text-center text-6xl text-teal-500 font-bold mb-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    Coding JavaScript Quiz
                </h2>
                <p className="text-gray-600 text-center mb-10">
                    The purpose of this project was to create a weather dashboard that shows a 5-Day forecast.
                    It uses a weather API that I got from <a href="https://home.openweathermap.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline">here</a>.
                    This was to help us learn how to use a Server-Side API with a functioning weather dashboard. To see more of my project, please follow this link to my GitHub: 
                    <a href="https://szolton.github.io/06-challenge-week6-Interactive-Weather-Page/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Interactive Weather Page</a>, or look at my code:<a href="https://github.com/szolton/06-challenge-week6-Interactive-Weather-Page" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">here</a>.
                </p>

                {/* Project details */}
                <div className="md:p-20 md:m-20 p-5">
                    {/* Video screen recordings */}
                    <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md">
                        <div className="aspect-w-16 aspect-h-9">
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/925599878?h=ca8e57518c" width="1000" height="425" frameborder="0"    allowfullscreen></iframe>       </div>
                    </div>
                    <p className="text-center text-gray-600 mt-3 mb-10">
                        A video walkthrough of our project. We used a Weather API and another API for the news section, and used JavaScript for the interactive to-do list. We wanted a cool-toned color palette, used Bulma styling, and set the date to update every day.
                    </p>
                    
                <h2 className="text-center text-6xl text-teal-500 font-bold my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    In Conclusion
                </h2>
                <div className="flex justify-center">
                    <ul className="list-disc list-inside text-gray-600 text-left">
                        <li>Uses CSS framework other than Bootstrap. See: Bulma styling.</li>
                        <li>Is deployed to GitHub.</li>
                        <li>Is interactive and uses 2 server-side API's.</li>
                        <li>Has one pop up modal and client-side storage to store data.</li>
                        <li>Is responsive with a polished UI.</li>
                        <li>Has a clean repository.</li>
                    </ul>
                </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default WebCodingQuiz;
