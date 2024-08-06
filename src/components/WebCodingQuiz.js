import React from 'react';
import '../assets/style.css'; // Assuming this path is correct
import Footer from './Footer'; // Importing the Footer component

function WebCodingQuiz() {
    return (
        <div className="bg-gray-100">
            <h4 className="text-left p-5 pl-7" style={{ fontFamily: 'Alte Haas Grotesk, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
                Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
            </h4>
            <main className="container mx-auto p-5">
                <h2 className="text-center text-6xl text-teal-500 mb-3 -mt-2" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    Coding JavaScript Quiz
                </h2>
                <p className="text-gray-600 text-center mb-10">
                The purpose of this project was to create a full coding quiz assessment in JavaScript, a project we might face in a real world interview process. A coding assessment is the combination of multiple-choice questions and interactive coding challenges.

We were to build a timed coding quiz with multiple choice questions, that will run in a browser, feature dynamically updated HTML and CSS powered by written JavaScript code.

                    <a href="https://szolton.github.io/04-Challenge-Week4-Coding-Quiz/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">Take a look at my deployed page</a>, or look at my code:<a href="https://github.com/szolton/04-Challenge-Week4-Coding-Quiz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:underline ml-2">here</a>.
                </p>

                {/* Project details */}
                <div className="md:p-20 md:m-20 p-5">
                    {/* Video screen recordings */}
                    <div className="max-w-full mx-auto h-auto overflow-hidden rounded shadow-md">
                        <div className="aspect-w-16 aspect-h-9">
                        <iframe title="vimeo-player" src="https://player.vimeo.com/video/925599878?h=ca8e57518c" width="1000" height="425" frameborder="0"    allowfullscreen></iframe>       </div>
                    </div>
                    <p className="text-center text-gray-600 mt-3 mb-10">
                        A video walkthrough of our project. We used a Weather API and another API for the news section, and used JavaScript for the interactive to-do list. We wanted a cool-toned color palette, used Bulma styling, and set the date to update every day.
                    </p>
                    
                <h2 className="text-center text-6xl text-teal-500 my-8" style={{ fontFamily: 'Bebas Neue', color: '#6ac9cb', fontSize: '48px' }}>
                    In Conclusion
                </h2>
                <div className="flex justify-center">
                    <ul className="list-disc list-inside text-gray-600 text-left">
                        <li>The high scores are visible when the page first loads if there are any stored in localStorage, or if there are none, the user receives an error message.
</li>
                        <li>Is deployed to GitHub.</li>
                        <li>The quiz answers change color when you hover over them.</li>
                        <li>They change green/red if you get one correct/incorrect, and also are labelled as such below the options.</li>
                        <li>The quiz is timed, and you lose time if you get an answer wrong.</li>
                        <li>If you go back, the timer shows up and restarts at the beginning as well.</li>
                        <li>After you finish the quiz, you are directed to a submit initials page where you can type in your name, and hit submit.</li>
                        <li>You then see the high scores results.</li>
                        <li>You can hit the 'go back' button, then hit the 'view high scores' link, where you can see the same results.</li>
                        <li>You can clear the high scores results if the user wishes
.</li>
                    </ul>
                </div>
                </div>
            </main>
 
        </div>
    );
}

export default WebCodingQuiz;
