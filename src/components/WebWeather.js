import React from 'react';
import Footer from './Footer'; // Importing the Footer component

// Import images
import colorsImage from '../assets/images/WEB DESIGN/weather-planner/colors.png';
import locationImage from '../assets/images/WEB DESIGN/weather-planner/location.png';
import cityStateImage from '../assets/images/WEB DESIGN/weather-planner/city, state.png';
import mobile1Image from '../assets/images/WEB DESIGN/weather-planner/mobile-1.png';
import mobile2Image from '../assets/images/WEB DESIGN/weather-planner/mobile-2.png';
import mobile3Image from '../assets/images/WEB DESIGN/weather-planner/mobile-3.png';

const WebWeather = () => {
    return (
        <div>
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>

            <main className="container mx-auto p-5">
                <h2 className="text-center text-6xl text-teal-500 mb-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    Weather 5-Day Forecast
                </h2>
                <p className="text-gray-600 text-center mb-10">
                    The purpose of this project was to create a weather dashboard that shows a 5-Day forecast.
                    It uses a weather API that I got from <a href="https://home.openweathermap.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline">here</a>.
                    This was to help us learn how to use a Server-Side API with a functioning weather dashboard. To see more of my project, please follow this link to my GitHub: 
                    <a href="https://szolton.github.io/06-challenge-week6-Interactive-Weather-Page/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Interactive Weather Page</a>, or look at my code:<a href="https://github.com/szolton/06-challenge-week6-Interactive-Weather-Page" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">here</a>.
                </p>

                <div className="flex justify-center mb-8">
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/933899063?h=58a2fcc064" width="1000" height="575" frameBorder="0" allowFullScreen></iframe>
                </div>

                <h2 className="text-center text-6xl text-teal-500 my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    The Challenge: Server-Side APIs
                </h2>
                <p className="text-gray-600 text-center">
                    The purpose of this project was to create a weather dashboard that displays a 5-Day forecast. We were to build a page that allows the user to see the weather outlook for multiple cities, so that I can plan a trip accordingly.
                    <br></br>
                    <br></br>
                    I followed the resources to create the Javascript, HTML, and CSS. Here are some screenshots of how my process worked. First, I grabbed colors I liked more and messed around with them for the weather palette. These were adjusted slightly as I went along to make something fun, but still kept the colors in a teal-palette I liked.
                </p>
                <p className="text-gray-600 text-center">
                    I began by doing research and finding sources -- these videos were equally helpful in various parts of the assignment.
                </p>
                <p className="text-gray-600 text-center mt-3">
                    Sources:
                    <a href="https://www.youtube.com/watch?v=m9OSBJaQTlM&ab_channel=PortEXE" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Weather API Forecast Resource 1</a>,
                    <a href="https://www.codingnepalweb.com/weather-app-project-html-javascript/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Weather API Forecast Resource 2</a>,
                    <a href="https://www.youtube.com/watch?v=MIYQR-Ybrn4" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Coding Source</a>
                </p>

                <img src={colorsImage} className="w-full max-w-full mx-auto my-8" alt="color-palette" />

                <p className="text-gray-600 text-center">
                Next, I updated it to create HTML and CSS to make a weather site with the mentioned teals and peaches. Then, I updated the JavaScript. Here is a cool feature of making city, state and zip codes searchable as well, for ultimate accuracy.

Search by city. </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <img src={locationImage} className="object-cover rounded shadow-md" alt="location-screenshot" />
                    <img src={cityStateImage} className="object-cover rounded shadow-md" alt="city-state-screenshot" />
                </div>

                <p className="text-gray-600 text-center mt-8">
                    When the page first loads, the user's location automatically pops up as seen in the left screenshot.
                    We used localStorage to save recent searches and make them linkable.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <img src={mobile1Image} className="object-cover rounded shadow-md" alt="mobile-screenshot-1" />
                    <img src={mobile2Image} className="object-cover rounded shadow-md" alt="mobile-screenshot-2" />
                    <img src={mobile3Image} className="object-cover rounded shadow-md" alt="mobile-screenshot-3" />
                </div>

                <h2 className="text-center text-6xl text-teal-500 my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    In Conclusion
                </h2>
                <p className="text-gray-600 text-center">
                    In conclusion, I set up the quiz to meet the challenge requirements and improved it. I:
                </p>
                <br></br>
                <div className="flex justify-center">
                    <ul className="list-disc list-inside text-gray-600 text-left">
                        <li>Provided a weather dashboard with form inputs where the user can search by city, state, or zip code.</li>
                        <li>Displayed current and future weather conditions including weather icons, temperature, wind, and humidity.</li>
                        <li>Implemented localStorage to save recent searches and make them accessible.</li>
                        <li>Ensured responsiveness across different devices.</li>
                    </ul>
                </div>
       </main>
            <Footer />
        </div>
    );
}

export default WebWeather;
