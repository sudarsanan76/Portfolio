import React from 'react';
import { Work, LocationOn, CalendarMonth, BusinessCenter } from '@mui/icons-material';

const ExperienceItem = ({ role, company, location, period, description }) => (
  <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-10 group items-start">
    {/* REPLACEMENT: Side Icon Badge instead of Dot & Line */}
    <div className="hidden md:flex items-center justify-center min-w-[56px] h-14 rounded-2xl bg-white border border-slate-200 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:shadow-blue-200 group-hover:shadow-lg">
      <BusinessCenter />
    </div>

    {/* Content Card with Side Accent */}
    <div className="flex-1 bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
      
      {/* Thick Side Accent Bar (The "Replacement" for the line) */}
      <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
        <div>    
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-tight">
            {role}
          </h3>
          {/* Using a cleaner green or matching blue for company name */}
          <p className="text-blue-700 font-bold text-lg mt-1 text-start">{company}</p>
        </div>

        <div className="flex flex-col gap-2 min-w-fit lg:items-end">
          <span className="flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold border border-slate-100 shadow-sm">
            <CalendarMonth sx={{ fontSize: 16 }} /> {period}
          </span>
          <span className="flex items-center gap-2 text-slate-500 text-sm px-1">
            <LocationOn sx={{ fontSize: 16 }} /> {location}
          </span>
        </div>
      </div>

      {/* Bullet Points with Improved Spacing */}
      <ul className="space-y-4">
        {description.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
            <span className="mt-2 min-w-[8px] h-[8px] rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors"></span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProfessionalExperience = () => {
  const journey = [
    {
      role: "Developer - I (Software Engineer)",
      company: "Moonraft (Acquired by UST)",
      location: "Bengaluru, Karnataka",
      period: "Aug 2022 - Present",
      description: [
        "Contributed to multiple projects as front-end and mobile app developer (Flutter & React.js).",
        "Collaborated effectively with team members to achieve project goals by creating numerous UI components.",
        "Started as an intern and progressed to a full-time Software Engineer role."
      ]
    },
    {
      role: "Summer Internship",
      company: "Zoho Corporation",
      location: "Chennai, Tamil Nadu",
      period: "March 2022 - May 2022",
      description: [
        "Completed a 2-month internship with training in Java OOP and React web development.",
        "Built UI web components using React.js.",
        "Delivered two mini projects as part of internship assignments."
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-sans text-center tracking-tight hover:text-red-500 transition-colors duration-500 ease-in-out">
            Professional Experience
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {journey.map((item, index) => (
            <ExperienceItem 
              key={index} 
              {...item} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;