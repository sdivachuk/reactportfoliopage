import React, { useState } from 'react';
import Nav from './Nav';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function Welcome() {

  const [page, setPage] = useState('about');

  let CurrectPage;

  if (page === 'portfolio') CurrectPage = Portfolio;
  if (page === 'about') CurrectPage = About;
  if (page === 'contact') CurrectPage = Contact;
  if (page === 'resume') CurrectPage = Resume;

  return (
    <>
      <Nav setPage={setPage} />
      <CurrectPage />
    </>
  );
}