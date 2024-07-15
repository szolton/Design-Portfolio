import React from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../assets/images/Zolton_resume.pdf';
//const resumePdf = `${process.env.PUBLIC_URL}/images/Zolton_resume.pdf`;

const Header = () => {

  console.log("Resume PDF: ", resumePdf)

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
            <Link to="/WebDesign" className="hover:text-gray-600">WEB DESIGN</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-gray-600">ABOUT</Link>
          </li>
          <li>
            <Link 
              className="hover:text-gray-600" 
              download="Zolton_Resume"
              to={resumePdf} 
              target='_blank'
              >RESUME</Link>
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
