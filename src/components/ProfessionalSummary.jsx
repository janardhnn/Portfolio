import React from 'react';
import Section from './Section.jsx';
import { about } from '../data.js';

export default function ProfessionalSummary() {
  return (
    <Section title='Professional Summary'>
      {/* <ul className='chips'>
        {about.map((a, i) => (
          <li key={i} className='chip'>{a}</li>
        ))}
      </ul> */}
      <p className='chips'>{about.join(' ')}</p>
    </Section>
  );
}