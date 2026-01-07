import React from 'react';

export default function Section({ title, children }) {
  return (
    <div className='section'>
      <h2 className='section-title'>{title}</h2>
      {children}
    </div>
  );
}
