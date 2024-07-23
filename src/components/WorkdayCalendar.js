import React from 'react';
import Footer from './Footer'; // Importing the Footer component

// Import images
import colorsImage from '../assets/images/WEB DESIGN/workday/palette.png';
import workDay1 from '../assets/images/WEB DESIGN/workday/workday-1.png';
import workDay2 from '../assets/images/WEB DESIGN/workday/workday-2.png';
import workDay3 from '../assets/images/WEB DESIGN/workday/workday-3.png';
import workDay4 from '../assets/images/WEB DESIGN/workday/workday-4.png';
import mobile from '../assets/images/WEB DESIGN/workday/mobile.png';
import mobile2 from '../assets/images/WEB DESIGN/workday/mobile2.png';

const WorkdayCalendar = () => {
    return (
        <div>
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>

            <main className="container mx-auto p-5">
                <h2 className="text-center text-6xl text-teal-500 mb-8 -mt-3" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    A Workday Calendar
                </h2>
                <p className="text-gray-600 text-center mb-10">
                    The purpose of this project was to create a calendar that functions during normal business hours.
                    We were to build a page that lets the user add important events to a daily planner, so that time can be managed effectively.
                    It uses a weather API that I got from <a href="https://home.openweathermap.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline">here</a>.
                    This was to help us learn how to use a Server-Side API with a functioning weather dashboard. To see more of my project, please follow this link to my GitHub: 
                    <a href="https://szolton.github.io/05-challenge-week5/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Workday Calendar</a>, or look at my code:<a href="https://github.com/szolton/05-challenge-week5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">here</a>.
                </p>

                <h2 className="text-center text-6xl text-teal-500 my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    The Challenge: Third-Party APIs
                </h2>
                <p className="text-gray-600 text-center">
                    The purpose was to create a simple calendar application that allows a user to save events for each hour of a typical working day.
                    This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                    I followed the resources to create the JavaScript, HTML, and CSS. Here are some screenshots of how my process worked. First, I grabbed colors I liked more and messed around with them for the weather palette. These were adjusted slightly as I went along to make something fun, but still kept the colors in a teal-palette I liked.
                </p>
                <p className="text-gray-600 text-center">
                    I began by doing research and finding sources -- these videos were equally helpful in various parts of the assignment.
                </p>
                <p className="text-gray-600 text-center mt-3">
                    Sources:
                    <a href="https://www.youtube.com/watch?v=m9OSBJaQTlM" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Plain JavaScript Calendar</a>,
                    <a href="https://momentjs.com/docs/#/displaying/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Moment.js</a>
                </p>
                <p className="text-gray-600 text-center">
                    I followed the videos to create the JavaScript, HTML, and CSS. Here are some screenshots of how my process worked.
                    First, I grabbed colors I liked more and messed around with them for the past/present/future tabs.
                    These were adjusted slightly as I went along to make something that was more clearly a past/future color, but still kept the colors pastel-themed.
                </p>

                <img src={colorsImage} className="w-full max-w-full mx-auto my-8" alt="color-palette" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={workDay1} className="object-cover rounded shadow-md" alt="workday calendar" />
                    <img src={workDay2} className="object-cover rounded shadow-md" alt="workday calendar" />
                </div>

                <p className="text-gray-600 text-center mt-8">
                    When the page first loads, the user's location automatically pops up as seen in the left screenshot.
                    We used localStorage to save recent searches and make them linkable.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={workDay3} className="object-cover rounded shadow-md" alt="workday calendar" />
                    <img src={workDay4} className="object-cover rounded shadow-md" alt="workday calendar" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 h-64">
                    <img src={mobile} className="object-cover rounded shadow-md h-full" alt="mobile-screenshot-1" />
                    <img src={mobile2} className="object-cover rounded shadow-md h-full" alt="mobile-screenshot-2" />
                </div>

                <div className="text-center mt-8">
                    <h2 className="text-center text-6xl text-teal-500 my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                        In Conclusion
                    </h2>
                    <p className="text-gray-600">
                        In conclusion, I set up the quiz to meet the challenge requirements and improved it. I:
                    </p>
                    <div className="flex justify-center mt-4">
                        <ul className="list-disc list-inside text-gray-600 text-left">
                            <li>Provided a weather dashboard with form inputs where the user can search by city, state, or zip code.</li>
                            <li>Displayed current and future weather conditions including weather icons, temperature, wind, and humidity.</li>
                            <li>Implemented localStorage to save recent searches and make them accessible.</li>
                            <li>Ensured responsiveness across different devices.</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default WorkdayCalendar;
