import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from '@mui/icons-material/School';
import LocationPinIcon from '@mui/icons-material/LocationPin';

const AboutSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between mt-28 scroll-mt-20 py-20 ">
        <p className="text-lg md:text-xl text-gray-400 font-medium mb-2">
          Get to Know
        </p>

        {/* 2nd Field: Name */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight hover:text-red-500 transition-colors duration-500 ease-in-out">
          More About Me!
        </h1>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 w-full gap-8">
          <Card
            variant="outlined"
            sx={{
              borderRadius: "20px", // Makes the border curved
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", // Adds a soft shadow
              border: "1px solid rgba(0, 0, 0, 0.08)", // Optional: makes the outline lighter
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth animation
              "&:hover": {
                transform: "translateY(-5px)", // Lifts the card on hover
                boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.15)", // Deepens shadow on hover
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // This centers the icon and typography horizontally
                textAlign: "center",
              }}
            >
              <WorkIcon sx={{ alignContent: "center", display: "block" }} />
              <Typography sx={{ color: "Black", fontSize: 20 }}>
                Total Experience
              </Typography>
              <Typography component="div" sx={{ color: "Grey", fontSize: 14 }}>
                3+ Years
              </Typography>
              <Typography variant="body2">
                Front End & Mobile App Development
              </Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              borderRadius: "20px", // Makes the border curved
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", // Adds a soft shadow
              border: "1px solid rgba(0, 0, 0, 0.08)", // Optional: makes the outline lighter
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth animation
              "&:hover": {
                transform: "translateY(-5px)", // Lifts the card on hover
                boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.15)", // Deepens shadow on hover
              },
             
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // This centers the icon and typography horizontally
                textAlign: "center",
              }}
            >
              <SchoolIcon sx={{ alignContent: "center", display: "block" }} />
              <Typography sx={{ color: "Black", fontSize: 20 }}>
                Graduation
              </Typography>
              <Typography component="div" sx={{ color: "Grey", fontSize: 14 }}>
                B.E Computer Science and Engineering
              </Typography>
              <Typography variant="body2">
                Karpagam College of Engineering, Coimbatore
              </Typography>
            </CardContent>
          </Card>
                    <Card
            variant="outlined"
            sx={{
              borderRadius: "20px", // Makes the border curved
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", // Adds a soft shadow
              border: "1px solid rgba(0, 0, 0, 0.08)", // Optional: makes the outline lighter
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth animation
              "&:hover": {
                transform: "translateY(-5px)", // Lifts the card on hover
                boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.15)", // Deepens shadow on hover
              },
              
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // This centers the icon and typography horizontally
                textAlign: "center",
              }}
            >
              <LocationPinIcon sx={{ alignContent: "center", display: "block" }} />
              <Typography sx={{ color: "Black", fontSize: 20 }}>
                Location 
              </Typography>
              <Typography component="div" sx={{ color: "Grey", fontSize: 14 }}>
                Bengaluru,Karnataka 
              </Typography>
              <Typography variant="body2">
                Native : Coimbatore,Tamil Nadu
              </Typography>
            </CardContent>
          </Card>
  
      </div>
    </>
  );
};

export default AboutSection;
