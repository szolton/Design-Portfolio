import React, { useState } from 'react';
import '../assets/style.css';
import 'tailwindcss/tailwind.css';
import Footer from './Footer';
import FullScreenImage from './FullScreenImage'; // Import the FullScreenImage component

// Import your images
import logoPortfolio from '../assets/images/SBARRO/logo for portfolio.webp';
import logoRefA from '../assets/images/SBARRO/logos-15-a.webp';
import logoRefB from '../assets/images/SBARRO/logos-15-b.webp';
import sketchesGif from '../assets/images/SBARRO/sbarro-sketches.gif';
import backgrounds from '../assets/images/SBARRO/logos on different backgrounds-28.webp';
import pizzaBoxMockup from '../assets/images/SBARRO/sbarro packaging-02 copy.webp';
import socialMediaMockups from '../assets/images/SBARRO/ig ad 2-02.webp';
import brandGuideCover from '../assets/images/SBARRO/brand-guide/cover page.webp';
import brandGuidePg3 from '../assets/images/SBARRO/brand-guide/page 3,4.webp';
import brandGuidePg5 from '../assets/images/SBARRO/brand-guide/page 5,6.webp';
import brandGuidePg7 from '../assets/images/SBARRO/brand-guide/page 7,8.webp';
import brandGuidePg9 from '../assets/images/SBARRO/brand-guide/page 9,10.webp';
import brandGuidePg11 from '../assets/images/SBARRO/brand-guide/page 11,12.webp';
import brandGuidePg13 from '../assets/images/SBARRO/brand-guide/page 13,14.webp';
import brandGuidePg15 from '../assets/images/SBARRO/brand-guide/page 15,16.webp';
import appMockup from '../assets/images/SBARRO/more ig ads.webp';


const SbarroPizza = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (src) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  const images = [
    logoPortfolio,
    logoRefA,
    logoRefB,
    sketchesGif,
    backgrounds,
    pizzaBoxMockup,
    socialMediaMockups,
    appMockup,
    brandGuideCover,
    brandGuidePg3,
    brandGuidePg5,
    brandGuidePg7,
    brandGuidePg9,
    brandGuidePg11,
    brandGuidePg13,
    brandGuidePg15,
    
  ];

  const handlePrevImage = () => {
    const currentIndex = images.indexOf(fullScreenImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setFullScreenImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = images.indexOf(fullScreenImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setFullScreenImage(images[nextIndex]);
  };

  return (
    <div>
      {/* Navigation header info bar */}
      {/* <h4 className="text-left p-5 pl-7 pt-5 mobile-padding" style={{ fontFamily: 'Alte Haas Grotesk, sans-serif', color: '#6ac9cb', fontSize: '18px' }}>
        Graphic Designer, Illustrator, and Web Designer based in Cleveland, OH.
      </h4> */}


<div className="p-3 md:p-10 m-5 md:m-10">

<main className="container mx-auto mt-0">
{/* // Outer container div with responsive padding and margin settings for different screen sizes */}
<div className="md:p-20 sm:mx-8 md:mx-16 md:m-20 lg:mx-52">
  {/* 
    md:p-20    => Adds padding of 5rem (80px) on all sides for medium screens and larger
    sm:mx-8    => Adds horizontal margin of 2rem (32px) for small screens and larger
    md:mx-16   => Increases horizontal margin to 4rem (64px) for medium screens and larger
    md:m-20    => Applies margin of 5rem (80px) on all sides for medium screens and larger (overrides previous mx)
    lg:mx-52   => Increases horizontal margin to 13rem (208px) for large screens and larger
  */}


 
<h1
  // Significantly move the heading up on medium+ screens
  className="mt-0 md:-mt-48 text-center"
  style={{
    fontFamily: 'Bebas Neue',
    color: '#6ac9cb',
    fontSize: '3rem',
    textAlign: 'center'
  }}
>
  Sbarro Rebranding Design
</h1>



  {/* Project Description and Introduction */}
  <p className="text-left            // Aligns text to the left
            text-gray-600         // Sets text color to a medium gray
            mx-2                  // Mobile: Small horizontal margin
            sm:mx-4               // Small screens: Slightly larger margin
            md:mx-8               // Medium screens: Moderate margin
            lg:mx-84              // Large screens: Wider horizontal margin
            mb-6                 // Adds bottom margin for spacing below
            leading-relaxed       // Sets relaxed line-height for readability
">
  I collaborated with Sbarro to create a refreshed brand identity that celebrates their Italian heritage in a modern and engaging way.
  This includes a clean, organic logo, a detailed brand guide, a mobile app design, pizza box packaging, and a cohesive set of social media ads—
  all developed using Adobe InDesign, Illustrator, Photoshop, and AfterEffects.
</p>


<div className="grid place-items-center">
  <img
    src={logoPortfolio}
    className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-cover rounded-lg shadow-md cursor-pointer"
    alt="final logo design"
    onClick={() => handleImageClick(logoPortfolio)}
  />
  <p className="text-left text-gray-600 mt-4 max-w-3xl px-4 leading-relaxed">
    The final logo deliverable. I wanted a design that was bright, fun, and engaging with the audience, all while honoring the Italian history of the company
    and the influence it has on the brand.
  </p>
</div>







{/* original logos, sketches and references */}
<div className="flex justify-center items-center p-1 md:p-2 m-1 md:m-2 gap-2">
  <div className="flex justify-center items-center">
    <img src={logoRefA} className="w-[300px] h-auto object-cover rounded shadow-md cursor-pointer" alt="old sbarro logo reference" onClick={() => handleImageClick(logoRefA)} />
  </div>
  <div className="flex justify-center items-center">
    <img src={logoRefB} className="w-[300px] h-auto object-cover rounded shadow-md cursor-pointer" alt="old sbarro logo reference" onClick={() => handleImageClick(logoRefB)} />
  </div>
</div>


        <p className="mb-3 text-center text-gray-600 mb-10 mt-2">
          Original Sbarro logo designs that the client wanted refreshed and updated. 
        </p>

        <div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={sketchesGif} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="logo on diff backgrounds" 
    onClick={() => handleImageClick(sketchesGif)} 
  />
<p className="mb-3                  // Bottom margin for spacing below the paragraph
            text-left             // Center-aligns the text
            text-gray-600           // Sets the text color to a medium gray
            mt-2                    // Top margin for spacing above the paragraph
            mx-4                    // Mobile: Small horizontal margins
       
">
  This is a gif I created that summarized my preliminary sketches and first draft ideas. There were dozens of iterations, a final handful of logos that were vectorized, and
  one that was selected by the client.
</p>

</div>

        <div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={backgrounds} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="logo on diff backgrounds" 
    onClick={() => handleImageClick(backgrounds)} 
  />
  <p className="mb-3 text-left text-gray-600 mt-2">
    Here, I explored how the logo would look against different backgrounds. This helped to ensure it would be flexible with multiple purposes.
  </p>
</div>


{/* Brand Guide */}

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={brandGuideCover} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="Brand Guide Cover page" 
    onClick={() => handleImageClick(brandGuideCover)} 
  />
<p className="mb-3                  // Bottom margin for spacing below the paragraph
            text-left             // Center-aligns the text
            text-gray-600           // Sets the text color to a medium gray
            mt-2                    // Top margin for spacing above the paragraph
            mx-4                    // Mobile: Small horizontal margins
  
">
  Here is the completed Brand Guide for Sbarro where I worked closely to incorporate the updated brand with company values. I focused on bright, fun and cohesive messaging
  that explained the function and purpose of the brand behind the design. I addressed the mission statement, tone, logo usage, taglines, illustration patterns, fonts,
  photos, and typography usage.
</p>

</div>

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={brandGuidePg3} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="Brand Guide Page 3, Mission statement" 
    onClick={() => handleImageClick(brandGuidePg3)} 
  />
  <p className="mb-3 text-center text-gray-600 mt-2"></p>
</div>

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={brandGuidePg5} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="Brand Guide Page 5, Tone and Message w Logo" 
    onClick={() => handleImageClick(brandGuidePg5)} 
  />
  <p className="mb-3 text-center text-gray-600 mt-2"></p>
</div>

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={brandGuidePg7} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="Brand Guide Page 7, Clear Space and Incorrect uses" 
    onClick={() => handleImageClick(brandGuidePg7)} 
  />
  <p className="mb-3 text-center text-gray-600 mt-2"></p>
</div>

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={brandGuidePg9} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="Brand Guide Page 9, Tagline and Pattern illustrations" 
    onClick={() => handleImageClick(brandGuidePg9)} 
  />
  <p className="mb-3 text-center text-gray-600 mt-2"></p>
</div>

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={brandGuidePg11} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="Brand Guide Page 11, Typography" 
    onClick={() => handleImageClick(brandGuidePg11)} 
  />
  <p className="mb-3 text-center text-gray-600 mt-2"></p>
</div>

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={brandGuidePg13} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="Brand Guide Page 13, Color Palette" 
    onClick={() => handleImageClick(brandGuidePg13)} 
  />
  <p className="mb-3 text-center text-gray-600 mt-2"></p>
</div>

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={brandGuidePg15} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="Brand Guide Page 15, Photography" 
    onClick={() => handleImageClick(brandGuidePg15)} 
  />
  <p className="mb-3 text-center text-gray-600 mt-2"></p>
</div>




{/* logo video animation */}
<div className="w-full px-4 sm:px-6 lg:px-10 py-4">
  <div className="max-w-screen-lg mx-auto">
    <div className="aspect-video rounded-md overflow-hidden shadow-lg">
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/743827620?h=af27440a45"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>



  <p className="text-left            // Center-aligns the text
            text-gray-600            // Sets text color to medium gray
            mt-3                     // Adds top margin
            mb-6                     // Adds bottom margin
            px-4                     // Adds horizontal padding (left & right) on all screen sizes
            sm:px-6                  // Slightly more padding on small screens and up
            mx-4                     // Mobile: Adds small horizontal margins
        
">
  A quick video animation of how the app design functions and walks the user through how we worked together to create something refreshed that functions well for the user to order food.
  The video walks the user through an advertisement, the landing page, menu and sidebar.
</p>

</div>




{/* Packaging */}
<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
<img
  src={pizzaBoxMockup}
  className="w-[900px] h-auto object-cover rounded shadow-md mb-3 md:mb-10 cursor-pointer"
  alt="wine menu mockup"
  // onClick={() => handleMediaClick(pizzaBoxMockup)}
/>

 <p className="mb-3                  // Bottom margin for spacing below the paragraph
            text-left             // Center-aligns the text
            text-gray-600           // Sets the text color to a medium gray
            mt-2                    // Top margin for spacing above the paragraph
            mx-4                    // Mobile: Small horizontal margins
         
">
  Above, I explored how the logo might look printed on the pizza box packaging. It's quirky and uses the pizza illustrations in a way that isn't used anywhere else in the branding.
  The white backing helps everything pop against the recycled packaging, and stay consistent with the rest of the brand.
</p>

</div>





{/* social media */}
{/* Social Media Ads */}
<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={socialMediaMockups} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="social media ad mockup" 
    onClick={() => handleImageClick(socialMediaMockups)} 
  />
<p className="mb-3                  // Bottom margin for spacing below the paragraph
            text-left             // Center-aligns the text
            text-gray-600           // Sets the text color to a medium gray
            mt-2                    // Top margin for spacing above the paragraph
            mx-4                    // Mobile: Small horizontal margins
     
">
  Here are some mockups of how the new brand identity might look on social media advertisements. This ad leans heavily into illustration and combines it with imagery
  that shows off a buyer enjoying the food.
</p>

</div>

<div className="flex flex-col items-center p-1 md:p-10 m-1 md:m-10">
  <img 
    src={appMockup} 
    className="w-[900px] h-auto object-cover rounded shadow-md cursor-pointer" 
    alt="mobile app mockup" 
    onClick={() => handleImageClick(appMockup)} 
  />
  <p className="mb-3 text-left text-gray-600 mt-2">
    Here is another example of a social media post that uses photography and leans into some fun language.
  </p>
</div>
</div>
</main>


      </div>

      {fullScreenImage && (
        <FullScreenImage 
          src={fullScreenImage} 
          onClose={handleCloseFullScreen} 
          prevImage={handlePrevImage} 
          nextImage={handleNextImage} 
        />
      )}


    </div>
  );
};

export default SbarroPizza;
