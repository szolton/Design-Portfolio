import React from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../assets/images/Zolton_resume.pdf';

const Header = () => {
  console.log("Resume PDF: ", resumePdf);

  const handleDownload = async () => {
    try {
      const downloadUrl = `${process.env.PUBLIC_URL}/images/Zolton_resume.pdf`;
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Zolton_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <header className="nav-header bg-custom-turquoise text-white py-6">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="order-2 md:order-1 mx-auto md:mx-0 md:mr-auto">
          <h1 className="text-center md:text-left" style={{ fontFamily: 'Bebas Neue', fontSize: '90px' }}>Stephanie Zolton</h1>
        </Link>
        <nav className="w-full md:w-auto order-1 md:order-2 mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center md:justify-end w-full">
            <li className="flex-1 md:flex-none">
              <Link to="/Illustrations" className="hover:text-gray-600">ILLUSTRATIONS</Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link to="/WebDesign" className="hover:text-gray-600">WEB DESIGN</Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link to="/About" className="hover:text-gray-600">ABOUT</Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link 
                className="hover:text-gray-600" 
                download="Zolton_Resume"
                to={resumePdf} 
                target='_blank'
              >
                RESUME
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4>
    </header>
  );
};

export default Header;
