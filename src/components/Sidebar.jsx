import React from 'react';
import { about } from '../data.js';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

export default function Sidebar({ sections, onNavClick }) {
  return (
    <aside className='sidebar' aria-label='Profile sidebar'>
      <h1 className='name'>{about.name}</h1>
      <p className='title'>{about.title}</p>
      <p className='location'>{about.location}</p>
      <p className='summary'>{about.summary}</p>
      <nav className='nav' aria-label='Section navigation'>
        {sections.map((s) => (
          <button key={s.id} className='nav-link' onClick={() => onNavClick(s.id)}>
            {s.label}
          </button>
        ))}
      </nav>
      <div className='social'>
        <a href='mailto:jana@example.com' aria-label='Email'><FaEnvelope /></a>
        <a href='https://github.com/jana-dev' target='_blank' rel='noreferrer' aria-label='GitHub'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/jana' target='_blank' rel='noreferrer' aria-label='LinkedIn'><FaLinkedin /></a>
        <a href='https://jana.dev' target='_blank' rel='noreferrer' aria-label='Website'><FaGlobe /></a>
      </div>
    </aside>
  );
}
