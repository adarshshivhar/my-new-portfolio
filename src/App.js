import React, {useState} from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import info from './Data';

function App() {
  const [details, setDetails] = useState(info);
  const {headerSection, aboutSection, experienceSection, skillsSection, educationSection} = details;
  return (
    <>
      <Navbar sidebar={headerSection} />
      <Header header={headerSection} />
      <About about={aboutSection} />
      <Experience experience={experienceSection} />
      <Skills skills={skillsSection} />
      <Timeline education={educationSection} />
    </>
  );
}

export default App;
