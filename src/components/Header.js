import React from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../assets/images/Zolton_resume.pdf';

const Header = () => (
  <header className="nav-header text-white md:py-4 custom-header">
    {/* Flex container for header: column on mobile, row on desktop */}
    <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-center">
      
      {/* Logo link: Left-aligned on both mobile and desktop */}
      <Link to="/" className="mb-4 md:mb-0 md:text-left">
        <h2
          className="pl-2 leading-none ml-1"
          style={{
            fontFamily: 'Bebas Neue',
            fontSize: '42px', // Desktop font size
            color: 'white',
          }}
        >
          {/* Mobile logo text: visible only on small screens */}
          <span
            className="block md:hidden"
            style={{ color: 'white', fontSize: '72px' }} // Smaller font for mobile
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

      {/* Navigation links: Stack on mobile, inline on desktop */}
      <nav className="w-full md:w-auto flex flex-col md:flex-row items-center md:justify-end">
        <ul className="w-full flex flex-col md:flex-row md:space-x-8 items-center justify-center md:justify-end text-md md:text-base">
          {/* Each <li> is one nav item, stacked on mobile and centered */}
          <li className="w-full md:w-auto text-center text-xl mb-2 md:mb-0">
            <Link to="/Illustrations" className="hover:text-gray-600">ILLUSTRATIONS</Link>
          </li>
          
          {/* Shift 'ABOUT & CONTACT' slightly to the left on mobile */}
          <li className="w-full md:w-auto text-center text-xl mb-2 md:mb-0 md:ml-0 ml-4">
            <Link to="/About" className="hover:text-gray-600 mr-4">ABOUT & CONTACT</Link>
          </li>
          
          <li className="w-full md:w-auto text-center text-xl mb-2 md:mb-0">
            <Link to={resumePdf} target='_blank' className="hover:text-gray-600">RESUME</Link>
          </li>
        </ul>
      </nav>

    </div>
  </header>
);

export default Header;
