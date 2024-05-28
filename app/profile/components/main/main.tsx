// page.tsx
import React from 'react';
import Contact from './contact';
import Home from './home'
import About from './about';
import Projects from './projects'
import Qualifications from './qualifications';



const Main: React.FC = () => {
  return (
    <main className="main">
        <Home/>
        <About/>
        <Projects/>
        <Qualifications/>
        <Contact/>
    </main>
  );
};

export default Main;
