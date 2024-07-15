import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';
import Footer from './Footer'; // Importing the Footer component

import dailyPlannerImage from '../assets/images/WEB DESIGN/daily-planner/Screen Shot 2024-04-09 at 6.21.28 PM.png';
import weatherForecastImage from '../assets/images/WEB DESIGN/weather-planner/thumbnail-a.png';
import codingQuizImage from '../assets/images/WEB DESIGN/coding-quiz-thumbnail.png';
import schedulerImage from '../assets/images/WEB DESIGN/workday-scheduler-thumbnail.png';
import passwordThumbnail from '../assets/images/WEB DESIGN/password-generator/password-thumbnail.png'

function WebHome() {
  return (
    <div>
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>

      <section>
        <div className="title-headers">
          <h2 className="mt-2 pt-5 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
            by the web
          </h2>
          <p className="mb-3 text-center">
            Take a look around -- here are some of my favorite web design projects.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 p-4">
        <PortfolioItem
          link="/WebPlanner"
          image={dailyPlannerImage}
          title="Interactive Daily Planner"
        />
        <PortfolioItem
          link="/WebWeather"
          image={weatherForecastImage}
          title="Weather 5-Day Forecast"
        />
        <PortfolioItem
          link="/WebCodingQuiz"
          image={codingQuizImage}
          title="Coding JavaScript Quiz"
        />
        <PortfolioItem
          link="/WebScheduler"
          image={schedulerImage}
          title="Workday Scheduler"
        />

        <PortfolioItem
          link="/Planisphere"
          image={schedulerImage}
          title="Planisphere: an event planner"
        />

          <PortfolioItem
          link="/PasswordGenerator"
          image={passwordThumbnail}
          title="Password Generator"
        />
      </div>

      {/* Footer component only once at the bottom */}
      <Footer />
    </div>
  );
}

// Portfolio item component
function PortfolioItem({ link, image, title }) {
  return (
    <div className="bg-transparent rounded overflow-hidden">
      <Link to={link} className="block group">
        <div className="relative">
          <div className="w-full h-64 bg-white rounded overflow-hidden transition duration-300 ease-in-out transform group-hover:opacity-50">
            <img src={image} className="w-full h-full object-cover rounded" alt={title} />
          </div>
          <h2 className="mt-2 pt-1 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '32px' }}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default WebHome;
