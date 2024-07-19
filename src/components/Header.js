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
    <header className="nav-header bg-custom-turquoise text-white py-6 custom-header">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="order-1 md:order-2 mx-auto md:mx-0 md:mr-auto mb-2 md:mb-0">
          <h1 className="text-center md:text-left text-7xl md:text-8xl" style={{ fontFamily: 'Bebas Neue' }}>Stephanie Zolton</h1>
        </Link>
        <nav className="w-full md:w-auto order-2 md:order-2">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center md:justify-end w-full text-md md:text-base">
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
              >RESUME
              </Link>
            </li>
          </ul>
        </nav>
      </div>
 
    </header>
    
  );
};

export default Header;
