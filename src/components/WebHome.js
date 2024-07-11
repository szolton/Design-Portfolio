import React from 'react';


// Import images
import dailyPlannerImage from '../assets/images/WEB DESIGN/daily-planner/Screen Shot 2024-04-09 at 6.21.28 PM.png';
import weatherForecastImage from '../assets/images/WEB DESIGN/weather-planner/thumbnail-a.png';
import codingQuizImage from '../assets/images/WEB DESIGN/coding-quiz-thumbnail.png';
import schedulerImage from '../assets/images/WEB DESIGN/workday-scheduler-thumbnail.png';

function WebHome() {
  return (
    <div>
      {/* navigation header info bar */}
    

      <h4 className="text-left p-5 pl-7 font-franklin text-teal-400 text-lg">Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.</h4>

      <section>
        {/* main body */}
        <div className="title-headers text-center">
          <h2 className="mt-2 pt-5 font-bebas text-teal-400 text-4xl">by the web</h2>
          <p className="mb-3">Take a look around -- here are some of my favorite web design projects.</p>
        </div>
      </section>
      
      {/* images for portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 p-4">
        {/* interactive daily planner */}
        <div className="bg-transparent rounded overflow-hidden">
          <a href="./WebPlanner" className="block group">
            <div className="relative">
              <div className="w-full h-64 bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
                <img src={dailyPlannerImage} className="w-full h-full object-cover rounded" alt="interactive daily planner" />
              </div>
              <h2 className="mt-2 pt-1 font-bebas text-teal-400 text-2xl">Interactive Daily Planner</h2>
            </div>
          </a>
        </div>

        {/* weather 5 day forecast */}
        <div className="bg-transparent rounded overflow-hidden">
          <a href="/WebWeather" className="block group">
            <div className="relative">
              <div className="w-full h-64 bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
                <img src={weatherForecastImage} className="w-full h-full object-cover rounded" alt="weather 5-day forecast thumbnail" />
              </div>
              <h2 className="mt-2 pt-1 font-bebas text-teal-400 text-2xl">Weather 5-Day Forecast</h2>
            </div>
          </a>
        </div>
        
        {/* coding quiz thumbnail */}
        <div className="bg-transparent rounded overflow-hidden">
          <a href="/WebCodingQuiz" className="block group">
            <div className="relative">
              <div className="w-full h-64 bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
                <img src={codingQuizImage} className="w-full h-full object-cover rounded" alt="coding quiz" />
              </div>
              <h2 className="mt-2 pt-1 font-bebas text-teal-400 text-2xl">Coding JavaScript Quiz</h2>
            </div>
          </a>
        </div>
        
        {/* workday scheduler thumbnail */}
        <div className="bg-transparent rounded overflow-hidden">
          <a href="/WebScheduler" className="block group">
            <div className="relative">
              <div className="w-full h-64 bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
                <img src={schedulerImage} className="w-full h-full object-cover rounded" alt="workday scheduler" />
              </div>
              <h2 className="mt-2 pt-1 font-bebas text-teal-400 text-2xl">Workday Scheduler</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebHome;
