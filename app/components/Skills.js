export default function Skills() {
  const skills = [
    { name: 'Java Development', icon: 'fab fa-java', desc: 'Enterprise applications & backend systems' },
    { name: 'Python', icon: 'fab fa-python', desc: 'Scripting, automation & data analysis' },
    { name: 'Web Servers', icon: 'fas fa-server', desc: 'Server management & deployment' },
    { name: 'Arduino IoT', icon: 'fas fa-microchip', desc: 'Micro devices & automation' },
    { name: 'HTML5/CSS3', icon: 'fab fa-html5', desc: 'Modern web standards & responsive design' },
    { name: 'Next.js', icon: 'fab fa-react', desc: 'React framework & SSR applications' },
    { name: 'Photography', icon: 'fas fa-camera', desc: 'Professional photography & editing' },
    { name: 'Animation', icon: 'fas fa-film', desc: 'Motion graphics & visual effects' },
    { name: 'Logo Design', icon: 'fas fa-palette', desc: 'Brand identity & graphic design' },
    { name: 'UI/UX Design', icon: 'fas fa-object-group', desc: 'User interface & experience design' },
    { name: 'JavaScript', icon: 'fab fa-js', desc: 'Frontend development & interactivity' },
    { name: 'Git & GitHub', icon: 'fab fa-github', desc: 'Version control & collaboration' }
  ];

  return (
    <section className="skills-catalog" id="skills">
      <h2 className="section-title">My Skills Catalog</h2>
      <div className="catalog-grid">
        {skills.map((skill, index) => (
          <div key={index} className="catalog-item">
            <i className={`${skill.icon} catalog-icon`}></i>
            <h4>{skill.name}</h4>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
                    }
