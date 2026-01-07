import React from 'react';
import Section from './Section.jsx';
import { about } from '../data.js';

export default function Self() {
  return (
    <Section title='Self'>
      {/* <ul className='chips'>
        {about.map((a, i) => (
          <li key={i} className='chip'>{a}</li>
        ))}
      </ul> */}
      <div className='avatar' style={{textAlign:'right'}}>
        <img src='https://avatars.githubusercontent.com/u/9919?s=200&v=4' style={{'height': '300px','width':'300px'}} alt={`${about.name} headshot`} />
      </div>
      <div style={{textAlign:'right'}}>
      <h1>I'm Janardhanan</h1>
      <h2>Software Engineer</h2>
      <h3>Experince in .Net Full Stack Development</h3>
      </div>
    </Section>
  );
}