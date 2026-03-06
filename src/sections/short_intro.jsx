import React, { useState, useEffect } from 'react';

const ShortIntro = ()=>{
    // text to be displayed with typewriter effect
const text = "I’m Sudarsanan, a Software Engineer specializing in mobile and web application development. With over 3 years of industry experience, I have contributed extensively to building scalable applications and crafting reusable, high-quality UI components across mobile and web platforms.";
  
  // State to hold the currently displayed text for the typewriter effect
  const [displayedText, setDisplayedText] = useState("");
  // Index(Numbers) which is used to track the current position in the text string
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
        // setTimeout is used to create a delay
      const timeout = setTimeout(() => {
        // Append the next character
        setDisplayedText((prev) => prev + text[index]);
        // Increment the index
        setIndex((prev) => prev + 1);
      }, 50); // Control speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="text-lg md:text-xl text-black-300 leading-relaxed max-w-2xl font-sans mt-4">
      <p>
        {displayedText}
        <span className="inline-block w-1 h-5 ml-1 bg-blue-400 animate-pulse align-middle"></span>
      </p>
    </div>
  );
}

export default ShortIntro;