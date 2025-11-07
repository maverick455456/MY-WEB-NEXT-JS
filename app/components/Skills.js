export default function Skills() {
  const skills = [
    { icon: 'fab fa-java', name: 'Java', description: 'Backend Development' },
    { icon: 'fab fa-python', name: 'Python', description: 'Scripting & Automation' },
    { icon: 'fas fa-server', name: 'Web Server', description: 'Server Management' },
    { icon: 'fas fa-microchip', name: 'Arduino Micro Devices', description: 'IoT Development' },
    { icon: 'fab fa-html5', name: 'HTML/CSS', description: 'Frontend Development' },
    { icon: 'fab fa-react', name: 'NextJS', description: 'React Framework' },
    { icon: 'fas fa-camera', name: 'Photography', description: 'Creative Photography' },
    { icon: 'fas fa-film', name: 'Animation', description: 'Motion Graphics' },
    { icon: 'fas fa-palette', name: 'Logo Design', description: 'Brand Identity' }
  ];

  return (
    <section className="skills-section" id="skills-link">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={skill.icon}></i>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
