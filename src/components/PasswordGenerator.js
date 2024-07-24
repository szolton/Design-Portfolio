import React from 'react';
import Footer from './Footer'; // Importing the Footer component

// Import images

const PasswordGenerator = () => {
    return (
        <div>
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'FranklinGothic URW', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>

            <main className="container mx-auto p-5">
                <h2 className="text-center text-6xl text-teal-500 mb-8 -mt-2" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    Password Generator
                </h2>
                <p className="text-gray-600 text-center mb-10">
                    The purpose of this project was to make a random password generator.
                    You can find the CSS, HTML, and README right away in the repository.
                    The javascript is under the develop folder, along with images used
                    for the README.
                    <br/><br/>
                    You can use this project by loading up the password generator, selecting
                    the criteria you want included in the password, copy the password to your
                    clipboard, and it automatically generates a random password.
                    This youtube video tutorial: <a href="https://www.youtube.com/watch?v=duNmhKgtcsI" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline">here </a>
                    was a super helpful resource in helping break down the requirements and what I
                    had to do to successfully meet the criteria for the challenge. It really helped me
                    understand event listeners and how to work with basic JavaScript.
                    <br/><br/>
                    To see more of my project, see the GitHub
                    <a href="https://szolton.github.io/03-challenge-week3/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">deployed Password Generator</a>, or look at my code:
                    <a href="https://github.com/szolton/03-challenge-week3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">here</a>.
                </p>


                <h2 className="mt-2 pt-5 text-center" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    video walkthrough
                </h2>
                <p className="mb-3 text-center text-gray-600 px-10">
                    Please reference the below video for a full walkthrough of the password generator.
                </p>

                <div className="container mx-auto mt-10">
                    <div className="md:p-20 md:m-20 p-5">
                        <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md md:-mt-20">
                            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                                <iframe 
                                    title="vimeo-player" 
                                    src="https://player.vimeo.com/video/984473895?h=cf7dc4c1b3" 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                                    frameBorder="0" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
           
                </div>

                <h2 className="text-center text-6xl text-teal-500 my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    In Conclusion
                </h2>
                <p className="text-gray-600 text-center">
                    In conclusion, I set up the password generator to meet the challenge requirements and improved it. I:
                </p>
                <br/>
                <div className="flex justify-center">
                    <ul className="list-disc list-inside text-gray-600 text-left">
                        <li>When you need a new, secure password,</li>
                        <li>When you click the button to generate a password,</li>
                        <li>You're presented with a series of prompts for password criteria.</li>
                        <li>You're prompted for password criteria, and select which criteria you want to include.</li>
                        <li>When you're prompted for the length of the password,</li>
                        <li>When asked for character types to include in the password,</li>
                        <li>Then you confirm whether or not to include lowercase, uppercase,
                            numeric, and/or special characters.
                        </li>
                        <li>When you answer each prompt, then my input should be validated and at least
                            one character type should be selected
                        </li>
                        <li>When all prompts are answered, then a password is generated that matches the
                            selected criteria
                        </li>
                        <li>When the password is generated, then the password is displayed in an alert or written to the page
                        </li>






                    </ul>
                </div>
            </main>
        </div>
    );
}

export default PasswordGenerator;
