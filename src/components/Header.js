import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';

const Header = () => (
  <header className="nav-header bg-custom-turquoise text-white py-6">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/">
        <h1 style={{ fontFamily: 'Bebas Neue', fontSize: '90px' }}>Stephanie Zolton</h1>
      </Link>
    </div>
    <nav className="mt-8">
      <ul className="flex space-x-4">
        <li>
          <Link to="/illustrations" className="hover:text-gray-600">ILLUSTRATIONS</Link>
        </li>
        <li>
          <Link to="/webdesign" className="hover:text-gray-600">WEB DESIGN</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-600">ABOUT</Link>
        </li>
        <li>
          <a href="/images/Zolton_resume.pdf" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">RESUME</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
