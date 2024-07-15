import React from 'react';
import Footer from './Footer';

import wireframeImage from '../assets/images/WEB DESIGN/daily-planner/wireframe.png';
import colorPaletteImage from '../assets/images/WEB DESIGN/daily-planner/color2.png';
import taskList from '../assets/images/WEB DESIGN/daily-planner/working-process.png';
import workingProcess2 from '../assets/images/WEB DESIGN/daily-planner/working-process-2.png';
import workingProcess3 from '../assets/images/WEB DESIGN/daily-planner/working-process-3.png';
import workingFinal from '../assets/images/WEB DESIGN/daily-planner/final.png';
import popUpModal from '../assets/images/WEB DESIGN/daily-planner/pop-up-modal.png';
import mobile1 from '../assets/images/WEB DESIGN/daily-planner/mobile.png';
import mobile2 from '../assets/images/WEB DESIGN/daily-planner/mobile-2.png';
import dateChange from '../assets/images/WEB DESIGN/daily-planner/date-change.png';

function WebPlanner() {
    return (
        <div className="bg-gray-100">
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>

            <section className="container mx-auto">
                <div className="title-headers text-center mt-10">
                    <h2 className="mt-2 pt-5 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                        Interactive Daily Planner
                    </h2>
                </div>
                <p className="mb-3 text-center text-gray-600 px-10 -mb-24">
                    The purpose of this project was to work in a group setting and apply everything learned in class over the past six weeks to create a real-world front-end application for portfolios. We integrated interactive daily tasks with weather and news updates using APIs. The project features a cool-toned color palette, utilizes Bulma styling, and updates the date daily.
                    <br /><br />
                    This was an opportunity to work collaboratively with others and demonstrate my coding abilities on a higher level. The project was to have two server-side APIs, one modal, client-side storage to store persistent data, a CSS framework other than Bootstrap, and an interactive application that accepts user data.
                    <br /><br />
                    To see more of my project, please follow this link to my GitHub:
                    <a href="https://github.com/davidbeane1983/Daily-Task-List" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2 text-gray-600">here</a>.
                </p>
            </section>

            <p className="text-center text-gray-600 mt-3 mb-10">A video walkthrough of our project.</p>
            <div className="mx-auto max-w-screen-lg">
                <VideoEmbed src="https://player.vimeo.com/video/933873174?h=f7d18efc97" />
                <VideoEmbed src="https://player.vimeo.com/video/933868374?h=373d68f675" />
            </div>
            <p className="text-center text-gray-600 mt-3 mb-10">A video showcasing the responsive mobile design.</p>

            <main className="container mx-auto mt-0">
                <div className="md:p-20 md:m-20 p-5">
                    <Section title="Proposal" text="Here is a link to our project proposal: https://docs.google.com/document/d/1Nmnr4t2qOZ9Cw_5P_Igc0qXeRajCBWISYu6bSHtewF8/edit" className="mt-5" />
                    <Section title="Description" text="Our purpose of this project was to create a webpage that uses interactive daily tasks in conjunction with the weather and news updates accordingly." />
                    <Section title="User Story" text="As a user, I want to see the upcoming weather and current news so that I can create a personalized, relevant and informational task list for the day. We began by doing research and finding sources -- these videos were equally helpful in various parts of the assignment." />
                    <Section title="Responsibilities" text="I did the styling, modal pop up, bulma integration, and the ReadMe, while others did the task list, weather and news APIs, and merge conflicts." />
                    <Section title="Process" text="Here are the wireframe we used to start with, and our inspiration to the colors of the project we wanted to use." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        <Image src={wireframeImage} alt="Wireframe" />
                        <Image src={colorPaletteImage} alt="Color Palette" />
                    </div>

                    <WorkingProcessSection src={taskList} text="Here's a screenshot of our working process with the task list as we built the page:" className="full-page-image rounded-lg" />
                    <WorkingProcessSection src={workingProcess2} text="Here's more of our working process:" />
                    <WorkingProcessSection src={workingProcess3} text="Here, you can see how we incorporated the Bulma styling:" />
                    <WorkingProcessSection src={workingFinal} text="Here's a screenshot of our final deployed app in process, where you can search the city weather, add to your task list that saves to local storage, and search for trendy topics:" />
                    <WorkingProcessSection src={popUpModal} text="Here, you can interact with the pop up modal where you can clear the list out, or keep it as-is:" />

                    <p className="mb-3 text-center text-gray-600 mt-2">Their old brochure design that we referenced to update their artwork.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Image src={mobile1} alt="mobile" />
                        <Image src={mobile2} alt="mobile" />
                    </div>

                    <WorkingProcessSection src={dateChange} text="One cool feature we included was the day of the week, month, date, and year that updates daily accordingly and really ties our project together." />

                    <Section title="In Conclusion" text="Our group worked together to make a functional, fully deployed web application where you can check the weather, add to a task list, and search for news articles. It was our first experience in a coding group working with others, and we did a great job with collaboration and communication, as well as the ability to problem-solve as a whole, as well as maintaining positivity throughout the project while resolving merge conflicts. We are ultimately proud of the product we developed, and how we used our different skills and interests to work together in a successful, efficient and collaborative environment. Together, we created an application that:" />

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
                    <br />
                    </div>
                
            </main>
            <Footer />
        </div>
    );
}

const Section = ({ title, text, className }) => (
    <>
        <h2 className={`text-center text-6xl text-teal-500 my-8  ${className}`} style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
            {title}
        </h2>
        <p className="mb-3 text-center text-gray-600 px-10">{text}</p>
    </>
);

const VideoEmbed = ({ src }) => (
    <div className="embed-container mb-10" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
        <iframe
            src={src}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Embedded Video"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
    </div>
);

const WorkingProcessSection = ({ src, text, className }) => (
    <div className={`working-process mt-10 ${className}`}>
        <img src={src} alt="working-process" />
        <p className="text-center text-gray-600 mt-2">{text}</p>
    </div>
);

const Image = ({ src, alt }) => (
    <img src={src} alt={alt} className="rounded-lg shadow-lg object-contain" />
);

export default WebPlanner;
