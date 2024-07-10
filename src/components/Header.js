import React from 'react';
import './Header.css';
import './assets/style.css';


const Header = () => (
  <header className="nav-header bg-gray-800 text-white py-6">
    <div className="container mx-auto flex justify-between items-center">
      <a href="./index.html">
        <h1 style={{ fontFamily: 'Bebas Neue', fontSize: '90px' }}>Stephanie Zolton</h1>
      </a>
    </div>
    <nav className="mt-8">
      <ul className="flex">
        <li><a href="./index-apparel.html" className="hover:text-gray-600">ILLUSTRATIONS</a></li>
        <li><a href="./index-web.html" className="hover:text-gray-600">WEB DESIGN</a></li>
        <li><a href="./index-about.html" className="hover:text-gray-600">ABOUT</a></li>
        <li><a href="./images/Zolton_resume.pdf" className="hover:text-gray-600">RESUME</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
