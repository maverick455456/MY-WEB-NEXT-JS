'use client';
import { useState } from 'react';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className="fixed-header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">MR NIPUN OFC / TECH-WEB</div>
          </div>
          <button className="home-btn" onClick={scrollToTop}>Home</button>
          <div 
            className={`hamburger-menu ${isNavActive ? 'active' : ''}`}
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <nav className={isNavActive ? 'active' : ''}>
        <ul>
          <li><a onClick={closeNav}>Home</a></li>
          <li><a onClick={() => { document.getElementById('about-modal').classList.add('active'); closeNav(); }}>About</a></li>
          <li><a onClick={() => { document.getElementById('projects-link').scrollIntoView({ behavior: 'smooth' }); closeNav(); }}>Projects</a></li>
          <li><a onClick={() => { document.getElementById('skills-link').scrollIntoView({ behavior: 'smooth' }); closeNav(); }}>Skills</a></li>
          <li><a onClick={() => { document.getElementById('social-modal').classList.add('active'); closeNav(); }}>Social Media</a></li>
          <li><a onClick={() => { document.getElementById('contact-modal').classList.add('active'); closeNav(); }}>Contact</a></li>
          <li><a onClick={() => { document.getElementById('privacy-modal').classList.add('active'); closeNav(); }}>Privacy Policy</a></li>
        </ul>
      </nav>
    </>
  );
    }
