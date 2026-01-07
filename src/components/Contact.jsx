import React, { useState } from 'react';
import Section from './Section.jsx';
import { contact } from '../data.js';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I’ll get back to you soon.');
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <Section title='Contact'>
      <div className='contact-wrapper'>
        <div className='contact-cards'>
          <a href={`mailto:${contact.email}`} className='contact-card'>Email: {contact.email}</a>
          {/* <a href={contact.github} target='_blank' rel='noreferrer' className='contact-card'>GitHub</a> */}
          <a href={contact.linkedin} target='_blank' rel='noreferrer' className='contact-card'>LinkedIn</a>
          {/* <a href={contact.website} target='_blank' rel='noreferrer' className='contact-card'>Website</a> */}
        </div>

        {/* <form className='contact-form' onSubmit={handleSubmit} aria-label='Contact form'>
          <label>
            Your Name
            <input type='text' name='name' placeholder='Your name' required />
          </label>
          <label>
            Your Email
            <input type='email' name='email' placeholder='you@example.com' required />
          </label>
          <label>
            Message
            <textarea name='message' rows='5' placeholder='Say hello…' required></textarea>
          </label>
          <button type='submit' className='btn'>Send</button>
          {status && <p className='status'>{status}</p>}
        </form> */}
      </div>
    </Section>
  );
}
