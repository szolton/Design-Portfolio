import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css'; // Assuming you have custom styles
import Footer from './Footer'; // Importing the Footer component


function WebScheduler() {
    return (
        <div className="bg-gray-100">
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>

            <div className="container mx-auto">
                <div className="title-headers">
                    <div className="md:p-20 md:m-20 sm:p-5" style={{ marginTop: '-30px' }}>
                        <h2 className="mt-2 pt-5 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                            Work Scheduler
                        </h2>
                        <p className="mb-3 text-center text-gray-600 mb-10 px-10">
                            The purpose of this project was to create a calendar that functions during normal business hours. We built a page that allows users to add important events to a daily planner, facilitating effective time management.
                            To see more of my project, please follow this link to my GitHub: 
                    <a href="https://szolton.github.io/05-challenge-week5/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Interactive Weather Page</a>, or look at my code:<a href="https://github.com/szolton/05-challenge-week5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">here</a>.

                        </p>
                        <p className="text-center text-gray-600 mb-10 px-10">
                            For this project, we integrated a Server-Side API to provide weather updates, which you can explore <a href="https://home.openweathermap.org/" target="_blank" className="hover:text-gray-900 hover:underline">here</a>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WebScheduler;
