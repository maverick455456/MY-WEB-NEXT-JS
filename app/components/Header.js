'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen || activeModal) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen, activeModal]);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const navItems = [
    { id: 'home', name: 'Home', action: () => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false); setActiveNav('home'); } },
    { id: 'about', name: 'About', action: () => openModal('about') },
    { id: 'skills', name: 'Skills', action: () => { document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false); setActiveNav('skills'); } },
    { id: 'projects', name: 'Projects', action: () => { document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false); setActiveNav('projects'); } },
    { id: 'social', name: 'Social Media', action: () => openModal('social') },
    { id: 'contact', name: 'Contact', action: () => openModal('contact') }
  ];

  return (
    <>
      <header className="money-heist-header">
        <div className="nav-container">
          <div className="brand">
            <div className="brand-logo">MR NIPUN OFC</div>
          </div>
          
          <nav>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a 
                    href="#" 
                    className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); item.action(); }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* About Modal */}
      {activeModal === 'about' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <div className="modal-profile">
              <div className="modal-profile-container">
                <div className="modal-light-ring"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="MR NIPUN" 
                  className="modal-profile-image"
                />
              </div>
              <div className="modal-profile-info">
                <h2>MR NIPUN</h2>
                <p>Full Stack Developer & UI/UX Designer</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="personal-details">
                <div className="detail-item">
                  <i className="fas fa-user"></i>
                  <strong>Name:</strong>
                  <span>H.M. NIPUN DHANUJAYA</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-birthday-cake"></i>
                  <strong>Age:</strong>
                  <span>18 Years</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <strong>Location:</strong>
                  <span>Sri Lanka</span>
                </div>
                <div className="detail-item">
                  <i className="fas fa-phone"></i>
                  <strong>Contact:</strong>
                  <a href="https://wa.me/+94757255903" target="_blank">+94 75 725 5903</a>
                </div>
              </div>
              
              <div className="about-text">
                <p>Hello! I'm <strong>MR NIPUN</strong>, a passionate full-stack developer and UI/UX designer with extensive expertise in creating modern, responsive web applications and digital experiences. With over 3 years of professional experience, I specialize in delivering high-quality solutions that combine technical excellence with creative design.</p>
                
                <p>My technical arsenal includes <strong>Java, Python, JavaScript, React, Next.js, Node.js, HTML5, CSS3</strong>, and expertise in working with <strong>Arduino micro devices</strong> for IoT solutions. I'm proficient in both frontend and backend development, ensuring seamless integration and optimal performance across all platforms.</p>
                
                <p>Beyond coding, I possess strong skills in <strong>photography, motion graphics animation, and professional logo design</strong>. This unique combination allows me to create visually stunning and highly engaging digital content that captivates users and enhances brand identity.</p>
                
                <p>My mission is to bridge the gap between technical functionality and aesthetic appeal, creating innovative digital solutions that not only solve complex problems but also provide exceptional user experiences. I'm committed to staying at the forefront of technology trends and continuously expanding my skill set to deliver cutting-edge solutions.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Modal */}
      {activeModal === 'social' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <h2 style={{textAlign: 'center', marginBottom: '10px', background: 'linear-gradient(45deg, var(--primary-red), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Connect With Me</h2>
            <p style={{textAlign: 'center', color: '#aaa', marginBottom: '30px'}}>Follow me on social media for updates and projects</p>
            <div className="social-grid">
              <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" className="social-item">
                <i className="fab fa-whatsapp"></i>
                <p>WhatsApp Channel</p>
              </a>
              <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" className="social-item">
                <i className="fab fa-facebook"></i>
                <p>Facebook</p>
              </a>
              <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" className="social-item">
                <i className="fab fa-facebook-f"></i>
                <p>FB Page</p>
              </a>
              <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" className="social-item">
                <i className="fab fa-tiktok"></i>
                <p>TikTok</p>
              </a>
              <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" className="social-item">
                <i className="fab fa-youtube"></i>
                <p>YouTube</p>
              </a>
              <a href="https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet" target="_blank" className="social-item">
                <i className="fab fa-instagram"></i>
                <p>Instagram</p>
              </a>
              <a href="https://t.me/Profesor9999" target="_blank" className="social-item">
                <i className="fab fa-telegram"></i>
                <p>Telegram</p>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {activeModal === 'contact' && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <h2 style={{textAlign: 'center', marginBottom: '10px', background: 'linear-gradient(45deg, var(--primary-red), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Get In Touch</h2>
            <p style={{textAlign: 'center', color: '#aaa', marginBottom: '30px'}}>Let's discuss your next project</p>
            <div className="modal-body">
              <div className="contact-info">
                <ul>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <div>
                      <strong>Email:</strong> 
                      <span style={{marginLeft: '10px'}}>mrnipun@techweb.com</span>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <div>
                      <strong>Phone:</strong> 
                      <a href="https://wa.me/+94757255903" style={{marginLeft: '10px'}}>+94 75 725 5903</a>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <strong>Location:</strong> 
                      <span style={{marginLeft: '10px'}}>Sri Lanka</span>
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-clock"></i>
                    <div>
                      <strong>Availability:</strong> 
                      <span style={{marginLeft: '10px'}}>24/7 for Freelance Projects</span>
                    </div>
                  </li>
                </ul>
              </div>
              <p style={{textAlign: 'center', lineHeight: '1.6'}}>Feel free to reach out for collaborations, freelance opportunities, or just to say hello! I'm always excited to work on new projects and connect with like-minded individuals.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
    }
