import React from 'react';
import { 
  Devices, 
  AutoAwesome, 
  SettingsSuggest, 
  IntegrationInstructions, 
  Speed, 
  CloudSync 
} from '@mui/icons-material';
import { Chip } from '@mui/material';

const ProjectCard = () => {
  const highlights = [
    { 
      icon: <AutoAwesome className="text-purple-500" />, 
      title: "Story Module", 
      text: "Independently built an Instagram-inspired story feature for web & mobile." 
    },
    { 
      icon: <IntegrationInstructions className="text-blue-500" />, 
      title: "Rest API", 
      text: "Complex form workflows with full REST integration across three platforms." 
    },
    { 
      icon: <CloudSync className="text-emerald-500" />, 
      title: "Azure CI/CD", 
      text: "Managed pipelines for automated build distribution and deployment." 
    },
    { 
      icon: <Speed className="text-orange-500" />, 
      title: "MVVM Architecture", 
      text: "Used MVVM to ensure clean, scalable, and maintainable code architecture." 
    }
  ];

  const stack = ["Flutter", "Dart", "Azure DevOps", "REST API", "JIRA", "Agile"];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-sans text-center tracking-tight hover:text-red-500 transition-colors duration-500 ease-in-out">
            Project Spotlight
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Project Card */}
        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="p-8 md:p-12">
            
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Left Column: Context */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <Devices />
                  </div>
                  <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
                    Cross-Platform Development
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
                  Internal Employee Portal (Automotive Client)
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  Developed and maintained a Flutter-based portal for a leading automotive giant, 
                  supporting Android, iOS, and Web from a single codebase. Built reusable components 
                  aligned with enterprise guidelines and performance needs.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {stack.map((tech) => (
                    <Chip 
                      key={tech} 
                      label={tech} 
                      variant="outlined" 
                      className="font-bold border-slate-200 text-slate-600"
                      sx={{ borderRadius: '8px' }}
                    />
                  ))}
                </div>
              </div>

              {/* Right Column: Key Feature Grid */}
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors group">
                    <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Bar: Collaboration Tags */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap gap-6 text-slate-400 text-sm font-medium">
              <span className="flex items-center gap-2"><SettingsSuggest sx={{fontSize: 18}}/> Agile & Sprint Planning</span>
              <span className="flex items-center gap-2"><Speed sx={{fontSize: 18}}/> Performance Optimization</span>
              <span className="flex items-center gap-2"><AutoAwesome sx={{fontSize: 18}}/> Code Reviews & MVVM</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;