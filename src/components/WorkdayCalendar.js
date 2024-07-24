import React from 'react';
import Footer from './Footer'; // Importing the Footer component

// Import images
import colorsImage from '../assets/images/WEB DESIGN/workday/palette.png';
import workDay from '../assets/images/WEB DESIGN/workday/workday.png';
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

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <img src={workDay} className="object-cover rounded shadow-md" alt="workday calendar" />
                </div>

                <p className="text-gray-600 text-center mt-8">
                Next, I updated it to go include half-hour marks too, just to make for the most efficient schedule in case there were ever meetings scheduled on the half-hour mark.
                This move helps with accuracy during the work day.
                I also added a fature that added a clock to the page, and an element that shows the day of the week and date.
                Then, I updated the colors and got them to show past/present/future and update automatically as the day went on.
                I also added a cool feature where it automatically saves what you type out on the schedule, so you don't need to click the save button (though it still works, per the assignment requirements); this helps with efficiency and saving your progress as you go, in case the user accidentally closes out of the program before saving.
                <br></br>
                <br></br>
                Here is a cool feature of the colors changing times as the day goes on -- see how the 4:30PM time block is now light purple, and the 5:00PM time block is the darker purple, signaling for the future times.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <img src={workDay4} className="object-cover rounded shadow-md" alt="workday calendar" />
                </div>

                <p className="text-gray-600 text-center mt-8">
                    Here is the app functioning on mobile for a seamless user experience.
                </p>

                <div className="grid grid-cols-1 mt-4 md:grid-cols-1 gap-8">
                    <img src={mobile} className="object-cover rounded shadow-md mx-auto" alt="mobile workday calendar" />
                    </div>

                    <h2 className="text-center text-6xl text-teal-500 my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    In Conclusion
                </h2>
                <p className="text-gray-600 text-center">
                    In conclusion, I set up the calnendar to meet the challenge requirements and improved it. I:
                </p>
                <br></br>
                <div className="flex justify-center">
                    <ul className="list-disc list-inside text-gray-600 text-left">
                        <li>When the user opens the planner, the current date and time is displayed at the top of the page.</li>
                        <li>The user can scroll down, and see time blocks for that day during the business hours of 9-5.</li>
                        <li>The time blocks are color-coded for past, present, and future events.</li>
                        <li>When you click on a time block, you can add text that saves straight to the page (as well as the save button).</li>
                        <li>The time blocks are color-coded for past, present, and future events.</li>
                        <li>The cool feature I added is editable text and being able to keep it on the page without having to press save.</li>
                        <li>Text is then saved in local storage, where when you refresh the page, it shows up and providing a seamless user experience.</li>
                        <li>The user can also edit it and remove text as well.</li>
               

                    </ul>
                </div>

            </main>
        </div>
    );
}

export default WorkdayCalendar;
