import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/images/Zolton_resume.pdf`; // Adjust path relative to the public folder
    link.setAttribute('download', 'Zolton_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="nav-header bg-custom-turquoise text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 style={{ fontFamily: 'Bebas Neue', fontSize: '90px' }}>Stephanie Zolton</h1>
        </Link>
      </div>
      <nav className="mt-8">
        <ul className="flex space-x-4">
          <li>
            <Link to="/Illustrations" className="hover:text-gray-600">ILLUSTRATIONS</Link>
          </li>
          <li>
            <Link to="/WebHome" className="hover:text-gray-600">WEB DESIGN</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-gray-600">ABOUT</Link>
          </li>
          <li>
            <button className="hover:text-gray-600" onClick={handleDownload}>RESUME</button>
          </li>
        </ul>
      </nav>

      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>
    </header>
  );
};

export default Header;
