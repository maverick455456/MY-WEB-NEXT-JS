export default function Footer() {
  const openModal = (modalId) => {
    document.getElementById(modalId).classList.add('active');
  };

  return (
    <footer>
      <div className="footer-links">
        <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a>
        <a onClick={() => openModal('about-modal')}>About</a>
        <a onClick={() => openModal('contact-modal')}>Contact</a>
        <a onClick={() => openModal('privacy-modal')}>Privacy Policy</a>
      </div>
      <div className="copyright">
        &copy; 2025 MR NIPUN OFC / TECH-WEB. All Rights Reserved.
      </div>
    </footer>
  );
}
