import ProfilePic from "../assets/images/pic.jpg";
import ShortIntro from "../sections/short_intro";
import Resume from "../assets/files/Sudarsanan K Resume.pdf";
import {analytics} from "../firebase";
import { logEvent } from "firebase/analytics";

const ProfileSection = () => {
  // Function to handle the click event
  const handleButtonClick = (buttonName) => {
    console.log(`Logging click for: ${buttonName}`);
    
    // Log the event to Firebase
    logEvent(analytics, 'download_cv', {
      button_name: buttonName,
      page_location: window.location.pathname,
    });
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-26 items-center">
        <div className="flex justify-center w-full">
            <img src={ProfilePic} alt="Profile" className="w-48 h-48 md:w-[432px] md:h-[392px] rounded-full object-cover shadow-xl mx-auto"/>
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 font-sans">
          {/* 1st Field: Greeting */}
          <p className="text-lg md:text-xl text-gray-400 font-medium mb-2">
            Hello!! I'm
          </p>

          {/* 2nd Field: Name */}
          <h1 className="text-3xl md:text-7xl font-extrabold text-black mb-4 tracking-tight hover:text-red-500 transition-colors duration-500 ease-in-out">
            Sudarsanan K
          </h1>

          {/* 3rd Field: Profession */}
          <h2 className="text-2xl md:text-3xl text-gray-400 font-semibold mb-8 hover:text-blue-400 transition-colors duration-500 ease-in-out">
            Software Engineer
          </h2>

          {/* 4th Field: Buttons */}
   
            {/* Download CV - Primary Button */}
            <a 
              href={Resume} 
              onClick={()=>{handleButtonClick("Downloaded CV")}}
              download="Sudarsanan_K_Resume.pdf" // This forces the download
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20 inline-block"
            >
              Download CV
            </a>

       
          <ShortIntro />

        </div>
      </div>
    </>
  );
};

export default ProfileSection;