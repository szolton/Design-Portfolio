import React from 'react';

import wireframeImage from '../assets/images/WEB DESIGN/planisphere/wireframe.png';
import colorPaletteImage from '../assets/images/WEB DESIGN/planisphere/color-palette.png';
import processImage1 from '../assets/images/WEB DESIGN/planisphere/process.png';
import processImage2 from '../assets/images/WEB DESIGN/planisphere/process-2.png';
import workingProcess3 from '../assets/images/WEB DESIGN/daily-planner/working-process-3.png';
import planisphereLogo from '../assets/images/WEB DESIGN/planisphere/planisphere_logo.png';
import homePageFinal from '../assets/images/WEB DESIGN/planisphere/planisphere-thumbnail.png';
import mobile1 from '../assets/images/WEB DESIGN/planisphere/mobile.png';
import mobile2 from '../assets/images/WEB DESIGN/daily-planner/mobile-2.png';
import dateChange from '../assets/images/WEB DESIGN/daily-planner/date-change.png';

function WebPlanner() {
    return (
        <div className="bg-gray-100">
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>

            <section className="container mx-auto">
                <div className="title-headers text-center mt-1">
                    <h2 className="-mt-2 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                        Planisphere: An Interactive Event Planner
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
                    <Section title="Description" text="Planishpere is a comprehensive event planning application designed to help users organize and manage events seamlessley. Whethere it's a birthday party, wedding, graduation, or any other special occasionan, Planisphere offers an intuitve platform to organize venues, budget, and track tasks for your events." />
                    <Section title="User Story" text="

As a user, I need to plan an event.

I want a single place to organize my event,

so that I can organize my thoughts and keep track of venue, budget, and tasks.

Given an event planner site, when I log into the site, then I am shown my home page w/ my events.

When I click to add an event, then I am presented with a page to get started.

When I go to organize my tasks, then I am apple to go to a separate area for setting tasks.

When I need to sort my budget, then I go to the budget section to set and manage my expenses or tasks.

When I need to find a venue, then I can look at multiple venues to choose from.

" />
                    <Section title="Responsibilities" text="We worked collaboratively and touched just about every part of the project. My contributions were primarily to the front-end development using React and Chakra for the website application." />
                    <Section title="Process" text="Here are the wireframe we used to start with, and our inspiration to the colors of the project we wanted to use." />

            
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex justify-center">
                            <Image 
                            src={wireframeImage} 
                            alt="wireframe" 
                            className="w-3/4 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[500px] object-contain" // Fixed height for both images
                            />
                            </div>
                            <div className="flex justify-center">
                                <Image 
                                src={colorPaletteImage} 
                                alt="colors" 
                                className="w-3/4 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[500px] object-contain" // Fixed height for both images
                                />
                                </div>
                                </div>

                                <p className="text-gray-600 text-center mt-3">
                                   Here is our wireframe that I built up in Illustrator, and a glimpse of the color palette inspiration we liked.
                                </p>

                                <div className="grid grid-cols-3 gap-4 mt-4">
  <div className="flex justify-center">
    <Image 
      src={processImage1} 
      alt="process" 
      className="w-3/4 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[500px] object-contain" // Fixed height for both images
    />
  </div>



  <div className="flex justify-center">
    <Image 
      src={planisphereLogo} 
      alt="planisphere logo" 
      className="w-3/4 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[500px] object-contain" // Fixed height for all images
    />
  </div>

  <div className="flex justify-center">
    <Image 
      src={processImage2} 
      alt="process" 
      className="w-3/4 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[500px] object-contain" // Fixed height for both images
    />
  </div>
</div>

<p className="text-gray-600 text-center mt-3">
  Here, is where you can see a glimpse of our process. The beginning of our homepage, as well as how we started styling images to fit in the box and be responsive.
  The last image on the right is an insprational logo our group had fun making.
</p>

<p className="text-gray-600 text-center mt-3">
  Here is our final home page, complete with working links to a budget, tasks, venues, and the links to other pages as well.
</p>


                       

                            <div className="grid grid-cols-1 gap-4 mt-4">
                            <div className="flex justify-center">
                            <Image 
                            src={homePageFinal} 
                            alt="wireframe" 
                            className="w-2/3 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[500px] object-contain" // Fixed height for both images
                            />
                            </div>
                            </div>

                            <p className="text-gray-600 text-center mt-3">
                                Here's our application functioning well on mobile device screens.
                            </p>

                            <div className="grid grid-cols-1 gap-4 mt-4">
                            <div className="flex justify-center">
                            <Image 
                            src={mobile1} 
                            alt="wireframe" 
                            className="w-2/3 md:w-4/5 lg:w-3/4 xl:w-2/3 h-[500px] object-contain" // Fixed height for both images
                            />
                            </div>
                            </div>
                            

                    

                            


                                 
                                
                                 <WorkingProcessSection src={workingProcess3} text="Here, you can see how we incorporated the Bulma styling:" />
                    <WorkingProcessSection src={planisphereLogo} text="Here's a screenshot of our final deployed app in process, where you can search the city weather, add to your task list that saves to local storage, and search for trendy topics:" />
                    {/* <WorkingProcessSection src={popUpModal} text="Here, you can interact with the pop up modal where you can clear the list out, or keep it as-is:" /> */}

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
