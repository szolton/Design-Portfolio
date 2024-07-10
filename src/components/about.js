import React from 'react';
import '../components/'; // Import your custom CSS if needed
import './tailwind.min.css'; // Import Tailwind CSS
import './assets/style.css';

// Header Component
const Header = () => (
  <header className="nav-header bg-gray-800 text-white py-6">
    <div className="container mx-auto flex justify-between items-center">
      <a href="./index.html"><h1 className="font-bebas text-6xl">Stephanie Zolton</h1></a>
    </div>
    <nav className="mt-8">
      <ul className="flex">
        <li><a href="./index-apparel.html" className="hover:text-gray-600">ILLUSTRATIONS</a></li>
        <li><a href="./index-web.html" className="hover:text-gray-600">WEB DESIGN</a></li>
        <li><a href="./about.html" className="hover:text-gray-600">ABOUT</a></li>
        <li><a href="./images/Zolton_resume.pdf" className="hover:text-gray-600">RESUME</a></li>
      </ul>
    </nav>
  </header>
);

// Main Component
const Main = () => (
  <main className="about">
    <h1 className="-ml-20 -pl-12 text-6xl text-teal-500">Meet the Artist</h1>
    <div className="selfie flex">
      <img src="./images/about-me.jpeg" className="w-full h-full object-cover rounded" alt="Picture of Stephanie" />
      <div className="about-text ml-4 text-gray-600">
        <p>
          Hello! I'm Stephanie Zolton, a passionate graphic designer based in Cleveland, Ohio. With a keen eye for detail and a love for creativity, I specialize in crafting visual stories that captivate and inspire, with a detailed history in print production, apparel design and illustration, and brand identity. My journey in design began over six years ago, and since then, I've had the privilege of working with a diverse range of clients and projects.
          <br /><br />
          From branding and marketing materials to web design and illustration, I thrive on bringing ideas to life in innovative and meaningful ways. I believe that great design is more than just aesthetics; it's about communication and connection. Each project is an opportunity to tell a story, evoke emotion, and make a lasting impression.
          <br /><br />
          Outside of design, I enjoy rock concerts, spin classes, watching the Cavs, and walks on the beach, which often inspire my work and keep me creatively energized. I'm always looking for new challenges and opportunities to collaborate. Whether you're looking to refresh your brand, create stunning visuals, or bring your ideas to life, I'm here to help.
          <br /><br />
          Let's create something amazing together!
        </p>
        <h2 className="sub-header ml-2">Contact me</h2>
        <p>
          If you have any questions, inquiries, or would like to discuss a potential project, please feel free to reach out to me. I strive to respond to all messages within 24 hours. Your feedback and inquiries are valuable to me, and I look forward to hearing from you. I can be contacted by email at <a href="mailto:szolton.designs@gmail.com" className="underline-on-hover">szolton.designs@gmail.com</a>, and my resume is available <a href="https://drive.google.com/file/d/1Q2sl7K5knj9QGR4KME2dnDOkw_HXcoxr/view?usp=sharing" target="_blank" className="underline-on-hover">here</a> to see my full range of experiences and qualifications. Thank you!
        </p>
      </div>
    </div>
  </main>
);

// App Component
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
