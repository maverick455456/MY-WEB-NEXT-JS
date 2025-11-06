export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="profile-container">
          <div className="light-ring"></div>
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="MR NIPUN" 
            className="profile-image"
          />
        </div>
        <h1>MR NIPUN OFC / TECH-WEB</h1>
        <p>Full Stack Developer | UI/UX Designer | Tech Enthusiast</p>
      </section>

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 60px;
          padding-top: 100px;
        }

        .profile-container {
          position: relative;
          width: 250px;
          height: 250px;
          margin-bottom: 30px;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 5px solid var(--primary-red);
          position: relative;
          z-index: 2;
        }

        .light-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border-radius: 50%;
          background: conic-gradient(
            var(--primary-red),
            var(--purple),
            var(--dark-red),
            var(--primary-red)
          );
          z-index: 1;
          animation: rotate 3s linear infinite;
        }

        .light-ring::after {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          background: var(--black);
          border-radius: 50%;
          z-index: 1;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        h1 {
          font-size: 36px;
          margin-bottom: 15px;
          background: linear-gradient(to right, var(--primary-red), var(--purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          font-size: 18px;
          max-width: 600px;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
}
