import React from 'react';
import './stylefile/Navbar.css';
import logo from './image/mgoh-logo.jpeg';

export default function Navbar() {
  return (
    <nav className='nav'>
      <a href='/'>
        <img src={logo} alt="mgoh-logo" className="logo" /> 
      </a>
      <ul>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href='/resume'>Resume</CustomLink>
        <CustomLink href='/project'>Project</CustomLink>
        <CustomLink href='/settings'>Settings</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>{children}</a>
    </li>
  );
}
