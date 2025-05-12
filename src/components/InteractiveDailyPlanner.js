import React from 'react';
import Footer from './Footer';

import wireframeImage from '../assets/images/daily-planner/wireframe.webp';
import projectProposal from '../assets/images/daily-planner/project-proposal.webp';
import colorPaletteImage from '../assets/images//daily-planner/color2.webp';
import workingProcess from '../assets/images/daily-planner/working-process.webp';
import workingProcess2 from '../assets/images/daily-planner/working-process-2.webp';
import workingProcess3 from '../assets/images/daily-planner/working-process-3.webp';
import workingFinal from '../assets/images/daily-planner/final.webp';
import popUpModal from '../assets/images/daily-planner/pop-up-modal.webp';
import mobile1 from '../assets/images/daily-planner/mobile.webp';
import mobile2 from '../assets/images/daily-planner/mobile-2.webp';
import dateChange from '../assets/images/daily-planner/date-change.webp';

function WebPlanner() {
    return (
        <div className="bg-gray-100">
            <section className="container mx-auto">
                <div className="md:p-10 m-5 md:m-10">
                <h1
  className="mt-0 md:-mt-8 text-center"
  style={{
    fontFamily: 'Bebas Neue',
    color: '#6ac9cb',
    fontSize: '3rem',
    textAlign: 'center'
  }}
>
  Interactive Daily Planner
</h1>


                    <p className="text-left text-gray-600 mx-2 sm:mx-4 md:mx-8 lg:mx-52 mb-6 leading-relaxed">
                        {/* Introductory paragraph about the project */}
                        The purpose of this project was to work in a group setting and apply everything learned in class over the past six weeks to create a real-world front-end 
                        application for portfolios. We integrated interactive daily tasks with weather and news updates using APIs. The project features a cool-toned color palette, 
                        utilizes Bulma styling, and updates the date daily. There were three other people in the group as well as me.
                        <br /><br />
                        {/* Further explanation about the project goals and collaboration */}
                        This was an opportunity to work collaboratively with others and demonstrate my coding abilities on a higher level. The project was to have two server-side APIs, one modal, client-side storage to store persistent data, a CSS framework other than Bootstrap, and an interactive application that accepts user data.
                        <br /><br />
                        {/* Link to GitHub */}
                        To see more of my project, please follow this link to my GitHub:
                        <a href="https://github.com/davidbeane1983/Daily-Task-List" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2 text-gray-600">here</a>.
                    </p>
                    <Section 
  title="Final Deliverables" 
  titleClassName="pl-0 mb-0 md:pl-56 md:-mb-12"
/>


             
                </div>
                
            </section>



            <div className="mx-auto max-w-screen-lg">
           
                <div className="max-w-full mx-auto h-auto overflow-hidden shadow-md">
                    
                    <div className="w-full sm:w-[640px] md:w-[720px] lg:w-[900px] mx-auto">
                
                        <iframe
                            title="vimeo-player-1"
                            src="https://player.vimeo.com/video/933873174?h=f7d18efc97"
                            className="w-full h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        <p className="text-left text-gray-600 mt-3 mb-10">
                        {/* Description of video content */}
                        A video walkthrough of our fully deployed, functioning daily planner application.
                    </p>
                    </div>
                    
                </div>
                <div className="max-w-full mx-auto h-auto overflow-hidden shadow-md mt-10">
                    <div className="w-full sm:w-[640px] md:w-[720px] lg:w-[900px] mx-auto">
                        <iframe
                            title="vimeo-player-2"
                            src="https://player.vimeo.com/video/933868374?h=373d68f675"
                            className="w-full h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                         <p className="text-left text-gray-600 mt-3 mb-10">
                {/* Description for mobile design video */}
                A video showcasing the responsive mobile design and how it would function on a smaller screen and device.
            </p>
                    </div>
                   
                </div>
              
            </div>

          

            <main className="container mx-auto mt-0">
            <div className="md:p-20 sm:mx-8 md:mx-16 md:m-20 lg:mx-52">

            <Section 
    title="Project Proposal" 
    titleClassName="pl-3 mt-0 sm:pl-5 sm:-mt-40"
/>


<p className="mb-3 text-left text-gray-600 mt-2 sm:mt-4 px-4 sm:px-6">
    {/* Wireframe and initial color palette */}
    This was our preliminary project proposal. It discussed our initial thoughts, goals, and where we wanted to take the concept of a daily planner. The original goal was to create an app that let the user make a to-do list for the day, while looking at current weather patterns and NASA updates to tie in for a universal weather planning app.
</p>

  


                    <img
                        src={projectProposal}
                        alt="Project Proposal Preview"
                        className="w-[900px] h-auto object-cover rounded shadow-md mx-auto mt-4"
                    />

                    <p className="mb-3 text-left text-gray-600 mt-2">
                        {/* Purpose of the project */}
                        Purpose: Our purpose of this project was to create a webpage that uses interactive daily tasks in conjunction with the weather and news updates accordingly.
                    </p>

                    <p className="mb-3 text-left text-gray-600 mt-2">
                        {/* User Story for the project */}
                        User Story Statement: As a user, I want to see the upcoming weather and current news so that I can create a personalized, relevant and informational task list for the day.
                        We began by doing research and finding sources -- these videos were equally helpful in various parts of the assignment.
                    </p>

                    <p className="mb-3 text-left text-gray-600 mt-2">
                        {/* Personal contributions */}
                        I did the css styling, modal pop up, bulma integration, and the ReadMe, while others did the task list, weather and news APIs, and merge conflicts.
                    </p>

                    <Section 
    title="Working Process" 
    titleClassName="pl-3"
/>

                    <p className="mb-3 text-left text-gray-600 mt-2">
                        {/* Wireframe and initial color palette */}
                        This is the wireframe we used to start with in the beginning stages, and our inspiration to the colors of the project we wanted to use.
                        The initial color palette focused on calming blues that were welcoming.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
    <div className="flex items-stretch">
        <Image src={wireframeImage} alt="Wireframe" className="w-full h-full object-cover" />
    </div>
    <div className="flex items-stretch">
        <Image src={colorPaletteImage} alt="Color Palette" className="w-full h-full object-cover" />
    </div>
</div>



                    <Section 
                    title="The design of it all"
                    titleClassName="pl-6" />

                    <p className="mb-3 text-left text-gray-600 mt-2 mx-4">
                        {/* Screenshot of task list working process */}
                        Here's a screenshot of our working process with the task list as we built the page. It started with a functioning to-do list and planned spaces for the weather and NASA sections.
                    </p>

                    <img
                        src={workingProcess}
                        alt="Working Process"
                        className="w-[900px] h-auto object-cover rounded shadow-md mx-auto mt-4"
                    />

                    <p className="mb-3 text-left text-gray-600 pt-10 mt-2">
                        {/* Further development of the project */}
                        Here's more of our working process below. There's a hero banner added, navigation bar, a way for the user to input the city name for the weather, as well as a search bar with an API our group used.
                        NASA wound up being too specific and less user-friendly, so we updated it to something that was much broader and worked for a wider target audience.
                    </p>

                    <img
                        src={workingProcess2}
                        alt="Working Process 2"
                        className="w-[900px] h-auto object-cover rounded shadow-md mx-auto mt-4"
                    />

                    <p className="mb-3 text-left text-gray-600 pt-10 mt-2 mx-4">
                        {/* Incorporating Bulma and final look */}
                        Here, the user can see how we incorporated the Bulma styling. It's tied together quite well with the searchable city, being able to search different topics, and the task list looks more cohesive.
                    </p>

                    <img
                        src={workingProcess3}
                        alt="Working Process 3"
                        className="w-[900px] h-auto object-cover rounded shadow-md mx-auto mt-4"
                    />

<p className="mb-3 text-left text-gray-600 pt-10 mt-2 mx-4">
                        {/* Final screenshots with date change */}
                        The application functionality allows the date to automatically update based on the user's time zone.
                    </p>

                    <img
                        src={dateChange}
                        alt="Date Change Feature"
                        className="w-[900px] h-auto object-cover rounded shadow-md mx-auto mt-4"
                    />

                    <p className="mb-3 text-left text-gray-600 pt-10 mt-2 mx-4">
                        {/* Final Product */}
                        This is the final iteration, complete with a more polished pop up modal, better working API implementation, and final color palette use throughout.
                    </p>

                    <img
                        src={workingFinal}
                        alt="Final Product"
                        className="w-[900px] h-auto object-cover rounded shadow-md mx-auto mt-4"
                    />

                    <p className="mb-3 text-left text-gray-600 pt-10 mt-2 mx-4">
                        {/* Pop-up Modal for date changer */}
                        The date pop-up modal also worked really well with a smooth animation for this part.
                    </p>

                    <img
                        src={popUpModal}
                        alt="Pop-up Modal"
                        className="w-[900px] h-auto object-cover rounded shadow-md mx-auto mt-4"
                    />

                    <p className="mb-3 text-left text-gray-600 pt-10 mt-2 mx-4">
                        {/* Mobile design view */}
                        Here's the mobile version of how we transformed the desktop version into a mobile-friendly format. It adapts well to different screen sizes.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
    <div className="flex items-stretch">
        <Image src={mobile1} alt="Mobile View 1" className="w-4/5 h-auto object-cover" />
    </div>
    <div className="flex items-stretch">
        <Image src={mobile2} alt="Mobile View 2" className="w-4/5 h-auto object-cover" />
    </div>
</div>


                    <Section 
    title="In the Future" 
    titleClassName="pl-3"
/>

                    <p className="mb-3 text-left text-gray-600 mt-2">
                        {/* Wireframe and initial color palette */}
                        In the future if the time allows, our group would like to add a checklist feature in addtion to be able to remove items in a way that marks them as complete,
                        rearrange list items by order of importance, allow for weekly planning, rather than just daily planning, include a notetaking feature, allow users to bookmark
                        or save news links within the app as a reference for later, and include a night mode on the weather icons. Our group had a lot of bright ideas but just didn't
                        have enough time to implement any of these.

                    </p>

                    <Section 
    title="Group Challenges" 
    titleClassName="pl-3"
/>

                    <p className="mb-3 text-left text-gray-600 mt-2">
                        {/* Wireframe and initial color palette */}
                        This was our first group project working with these programs in a collaborative environment, and the challenges we ran in to were generally technical issues.
                        We struggled to work with GitHub in a group setting, doing frequent commits and pulls, resolving merge conflicts, and integrating Bulma to parts of the project
                        where it was not used previously.

                    </p>

                    <Section 
    title="Group Successes" 
    titleClassName="pl-3"
/>

                    <p className="mb-3 text-left text-gray-600 mt-2">
                        {/* Wireframe and initial color palette */}
                        Collaboration and communication were huge keys to the project's success. Everyone always knew what others were working on, and what was in-process. Our
                        ability to problem-solve as a whole, as well as maintaining positivity throughout the project while resolving issues (generally speaking, merge conflicts). Ultimately,
                        we are very proud of the product we developed and how we used our different skills, backgrounds and interests to work together in a successful, efficient and
                        collaborative environment.

                    </p>

                    
                    <Section 
    title="In Conclusion" 
    titleClassName="pl-3"
/>

                    <p className="mb-3 text-left text-gray-600 mt-2">
                        {/* Wireframe and initial color palette */}
                        Our group built a page that meets all of the project requirements where the the page uses CSS framework other than Bootstrap (see: Bulma styling),
                        is deployed to GitHub, is interactive and uses two server-side API's, has one pop up modal and client-side storage for data, is responsive with a 
                        polished UI, and has a clean repository.

                    </p>

                </div>

            </main>

            {/* <Footer /> */}
        </div>
    );
}

// Reusable Section component for DRY code
function Section({ title, text, className = '', titleClassName = '' }) {
    return (
        <div className={`text-left mt-6 ${className}`}>
            {title && (
                <h2 className={`text-2xl font-bold text-gray-800   ${titleClassName}`}>
                    {title}
                </h2>
            )}
            {text && <p className="mt-4 text-gray-600">{text}</p>}
        </div>
    );
}


function Image({ src, alt }) {
    return (
        <img
            src={src}
            alt={alt}
            className="w-[500px] h-auto object-cover rounded shadow-md mx-auto"
        />
    );
}

export default WebPlanner;
