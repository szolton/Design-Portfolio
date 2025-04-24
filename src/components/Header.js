import React from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../assets/images/Zolton_resume.pdf';

const Header = () => (
  <header className="nav-header text-white md:py-4 custom-header">
    {/* Flex container for header: column on mobile, row on desktop */}
    {/* items-start on mobile to left-align, items-center on desktop */}
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
      
      {/* Logo link: Appears first in mobile, second in desktop */}
      {/* Removed mx-auto to keep it aligned left on mobile */}
      <Link to="/" className="order-1 md:order-2 mb-2 md:mb-0 md:mr-auto">
        <h2
          className="text-left pl-2 leading-none ml-1"
          style={{
            fontFamily: 'Bebas Neue',
            fontSize: '42px', // Desktop font size
            color: 'white',
          }}
        >
          {/* Mobile logo text: visible only on small screens */}
          <span
            className="block md:hidden"
            style={{ color: 'white', fontSize: '32px' }} // Smaller font for mobile
          >
            Zolton Design
          </span>

          {/* Desktop logo text: visible from medium screens up */}
          <span
            className="hidden md:block"
            style={{ color: 'white' }}
          >
            Zolton Design
          </span>
        </h2>
      </Link>

      {/* Navigation links: Full width grid on mobile, inline on desktop */}
      <nav className="w-full md:w-auto order-2 md:order-2 flex items-center">
        <ul className="grid grid-cols-2 gap-2 md:flex md:flex-row md:space-x-8 items-center justify-center md:justify-end w-full text-md md:text-base">
          {/* Each <li> is one nav item, stacked into grid on mobile */}
          <li className="col-span-1 flex-1 mr-1 md:flex-none text-center text-xl pl-4">
            <Link to="/Illustrations" className="hover:text-gray-600">ILLUSTRATIONS</Link>
          </li>
          <li className="col-span-1 flex-1 md:flex-none text-center text-xl">
            <Link to="/WebDesign" className="hover:text-gray-600">WEB DESIGN</Link>
          </li>
          <li className="col-span-1 flex-1 md:flex-none text-center text-xl">
            <Link to="/About" className="hover:text-gray-600">ABOUT</Link>
          </li>
          <li className="col-span-1 flex-1 md:flex-none text-center text-xl pr-4">
            <Link to={resumePdf} target='_blank' className="hover:text-gray-600">RESUME</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
