import React, { useState } from 'react';
import Nav from './Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function Welcome({ loggedIn, setLoggedIn }) {

  const [page, setPage] = useState('home');

  let CurrectPage;

  if (page === 'home') CurrectPage = Home;
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