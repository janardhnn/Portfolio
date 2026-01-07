import React, { useRef } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Experience from './components/Experience.jsx';
import Achievements from './components/Achievements.jsx';
import TechStack from './components/TechStack.jsx';
import Contact from './components/Contact.jsx';
import Self from './components/Self.jsx';
import ProfessionalSummary from './components/ProfessionalSummary.jsx';


export default function App() {
  const sections = [
    { id: 'self', label: 'Self'},
    {id: 'ProfessionalSummary', label:'Professional Summary'},
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'techstack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' }
  ];

  const refs = sections.reduce((acc, cur) => {
    acc[cur.id] = useRef(null);
    return acc;
  }, {});

  const scrollTo = (id) => {
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='layout'>
      <Sidebar sections={sections} onNavClick={scrollTo} />

      

      <main className='content' role='main'>

        <section id='self' ref={refs.self} aria-label='Self'>
          <Self />
        </section>

         <section id='professional Summary' ref={refs.ProfessionalSummary} aria-label='Professional Summary'>
          <ProfessionalSummary />
        </section>

        <section id='experience' ref={refs.experience} aria-label='Experience'>
          <Experience />
        </section>

        <section id='achievements' ref={refs.achievements} aria-label='Achievements'>
          <Achievements />
        </section>

        <section id='techstack' ref={refs.techstack} aria-label='Tech Stack'>
          <TechStack />
        </section>

        <section id='contact' ref={refs.contact} aria-label='Contact'>
          <Contact />
        </section>

        <footer className='footer'>
          <small>© {new Date().getFullYear()} Jana • Built with React</small>
        </footer>
      </main>
    </div>
  );
}
