import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './common/header';
import ProfileSection from './common/profile_section';
import AboutSection from './sections/about_section';
import SkillsSection from './sections/skill_section';
import Experience from './sections/experience';
import ContactSection from './sections/contact_section';
import AnalyticsTracker from './common/analytics-tracker';
import ProjectCard from './sections/projects_section';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AnalyticsTracker />
      <Header/>
      <div id="home"><ProfileSection/></div>
      <div id="about"><AboutSection/></div>
      <div id="skills"><SkillsSection/></div>
      <div id="experience"><Experience/></div>
      <div id="projects"><ProjectCard/></div>
      <div id="contact"><ContactSection/></div>      
    </>
  )
}

export default App
