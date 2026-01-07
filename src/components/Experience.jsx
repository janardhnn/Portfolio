import React from 'react';
import Section from './Section.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <Section title='Experience'>
      <div className='timeline'>
        {experience.map((job, idx) => (
          <article key={idx} className='card'>
            <header className='card-header'>
              <h3>{job.role}</h3>
              <span className='company'>{job.company}</span>
              <span className='period'>{job.period}</span>
            </header>
            <ul className='bullets'>
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
