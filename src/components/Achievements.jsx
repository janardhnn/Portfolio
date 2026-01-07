import React from 'react';
import Section from './Section.jsx';
import { achievements } from '../data.js';

export default function Achievements() {
  return (
    <Section title='Achievements'>
      <ul className='chips'>
        {achievements.map((a, i) => (
          <li key={i} className='chip'>{a}</li>
        ))}
      </ul>
    </Section>
  );
}
