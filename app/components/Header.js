'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed-header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">MR NIPUN OFC / TECH-WEB</div>
          </div>
          <button className="home-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Home
          </button>
          <div 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <style jsx>{`
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(29, 29, 29, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          z-index: 1000;
          padding: 15px 0;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(to right, var(--primary-red), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .home-btn {
          background: var(--primary-red);
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .home-btn:hover {
          background: var(--dark-red);
          transform: translateY(-2px);
        }

        .hamburger-menu {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          z-index: 100;
        }

        .hamburger-menu span {
          width: 30px;
          height: 3px;
          background-color: var(--primary-red);
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }

        .hamburger-menu.active span:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger-menu.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-menu.active span:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        .nav-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: rgba(29, 29, 29, 0.95);
          backdrop-filter: blur(10px);
          padding: 80px 30px 30px;
          transition: 0.5s;
          z-index: 99;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
        }

        .nav-menu.active {
          right: 0;
        }

        .nav-menu ul {
          list-style: none;
        }

        .nav-menu li {
          margin-bottom: 20px;
        }

        .nav-menu li a {
          color: var(--text-light);
          text-decoration: none;
          font-size: 18px;
          display: block;
          padding: 10px 15px;
          border-radius: 8px;
          transition: 0.3s;
          position: relative;
          overflow: hidden;
        }

        .nav-menu li a:hover {
          background: var(--glass-bg);
          transform: translateX(10px);
        }
      `}</style>
    </>
  );
    }
