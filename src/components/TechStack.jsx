import React from 'react';
import Section from './Section.jsx';
import { tech } from '../data.js';

const Group = ({ title, items }) => (
  <div className='tech-group'>
    <h3>{title}</h3>
    <ul className='tags'>
      {items.map((t) => <li key={t} className='tag'>{t}</li>)}
    </ul>
  </div>
);

export default function TechStack() {
  return (
    <Section title='Tech Stack'>
      <div className='tech-grid'>
        <Group title='Languages' items={tech.languages} />
        <Group title='Backend' items={tech.backend} />
        <Group title='Frontend' items={tech.frontend} />
        <Group title='Cloud' items={tech.cloud} />
        <Group title='Tooling' items={tech.tooling} />
      </div>
    </Section>
  );
}
