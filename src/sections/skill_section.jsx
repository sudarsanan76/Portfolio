import React from "react";
import {
  Devices,
  Language,
  SettingsSuggest,
  CloudQueue,
  Storage,
  Terminal,
} from "@mui/icons-material";

const SkillCard = ({ title, icon, skills, colorClass }) => (
  <div className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
    <div
      className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${colorClass}`}
    ></div>

    <div className="flex items-center gap-4 mb-6">
      <div
        className={`p-3 rounded-xl bg-opacity-10 ${colorClass} text-slate-700`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 font-sans tracking-tight">
        {title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-50 border border-slate-100 rounded-lg group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const data = [
    {
      title: "Mobile Development",
      icon: <Devices />,
      colorClass: "bg-blue-500",
      skills: [
        "Flutter (Dart)",
        "Android (Kotlin)",
        "Riverpod",
        "Bloc",
        "Get_it",
        "Dio",
        "Retrofit",
        "MVVM,MVC Architecture",
      ],
    },
    {
      title: "Web & UI",
      icon: <Language />,
      colorClass: "bg-emerald-500",
      skills: [
        "React.js",
        "HTML5/CSS3",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Redux",
      ],
    },
    {
      title: "Backend & APIs",
      icon: <SettingsSuggest />,
      colorClass: "bg-purple-500",
      skills: ["Node.js", "REST APIs", "JSON", "GraphQL"],
    },
    {
      title: "Data Management",
      icon: <Storage />,
      colorClass: "bg-orange-500",
      skills: ["SQL", "MongoDB", "Hive", "FireStore", "SharedPreferences"],
    },
    {
      title: "DevOps & Tools",
      icon: <CloudQueue />,
      colorClass: "bg-cyan-500",
      skills: ["Firebase", "Azure DevOps", "Git", "Postman"],
    },
    {
      title: "IDE",
      icon: <Terminal />,
      colorClass: "bg-slate-500",
      skills: ["VS Code", "Xcode", "Android Studio"],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-sans hover:text-red-500 transition-colors duration-500 ease-in-out">
            Technical Skillsets
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the tools and technologies I use to
            build scalable, cross-platform solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <SkillCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
