// src/components/WebScheduler.js

import React from 'react';

function WebScheduler() {
    return (
        <div>
            {/* Meta tags */}
            <head>
                <meta charSet="UTF-8" />
                <title>My Graphic Design Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
                <link href="./assets/style.css" rel="stylesheet" />
            </head>

            {/* Body */}
            <body>
                {/* Navigation header info bar */}
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
                    {/* Inline CSS */}
                    <style>
                        {`
                            /* Adjust the font size and spacing */
                            nav ul li a {
                                padding: 0 10px;
                                white-space: nowrap;
                                font-size: 20px;
                            }
                        `}
                    </style>
                </header>
                <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.</h4>

                <div className="title-headers">
                    <div className="columns-1 md:p-20 md:m-20 sm:p-5" style={{ marginTop: '-30px' }}>
                        <h2 className="mt-2 pt-5 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>work scheduler</h2>
                        <p className="mb-3 text-center text-gray-600 mb-10 pl-10 pr-10">
                            The purpose of this project was to create a calendar that functions during normal business hours.
                            We were to build a page that lets the user add important events to a daily planner, so that time can be managed effectively.
                            <a href="https://home.openweathermap.org/" target="_blank" className="hover:text-gray-900 hover:underline" style={{ display: 'inline-block', marginRight: '10px' }}>here.</a>
                            This was to help us learn how to use a Server-Side API with a functioning weather dashboard.
                        </p>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default WebScheduler;
