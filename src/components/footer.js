import React from 'react';
import './assets/style.css';
import './index.css';


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Stephanie Zolton. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
