import './App.css'

const skills = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'Node.js'] },
  { title: 'Database', items: ['MySQL'] },
  { title: 'Tools', items: ['Git', 'GitHub'] },
]

const projects = [
  {
    title: 'Hospital Management API',
    description: 'A REST API for managing hospital data, built with Django and Django REST Framework.',
    stack: ['Python', 'Django', 'Django REST Framework'],
    live: '',
    github: 'https://github.com/Rawan-ahmed00/hospital-management-api',
  },
  {
    title: 'Craftsmen Platform',
    description: 'A Django REST API that connects customers with skilled technicians.',
    stack: ['Python', 'Django', 'Django REST Framework'],
    live: '',
    github: 'https://github.com/Rawan-ahmed00/crafsmen_platform',
  },
  {
    title: 'School Attendance Platform',
    description: 'A platform for managing school attendance and student grades.',
    stack: ['Python'],
    live: '',
    github: 'https://github.com/Rawan-ahmed00/attendance-platform',
  },
  {
    title: 'Mallora',
    description: 'A modern, responsive e-commerce store built with React and Vite.',
    stack: ['React', 'Vite', 'JavaScript'],
    live: '',
    github: 'https://github.com/Rawan-ahmed00/mallora',
  },
  {
    title: 'Recipe Finder',
    description: 'A web app to search for recipes, filter by category, and save favorites.',
    stack: ['React', 'Vite', 'JavaScript'],
    live: '',
    github: 'https://github.com/Rawan-ahmed00/recipe-finder',
  },
]

function App() {
  return (
    <>
      <header className="navbar">
        <div className="wrap navbar-inner">
          <a href="#home" className="logo">Rawan Ahmed</a>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#training">Training</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="status">Open to junior full stack roles</p>
            <h1>Rawan Ahmed</h1>
            <p className="hero-role">Full stack developer</p>
            <p className="hero-text">
              I build web applications with React and Django, from the
              interface to the database.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View projects</a>
              <a href="/Rawan-Ahmed-CV.pdf" download className="btn btn-ghost">Download CV</a>
            </div>
          </div>
          <div className="photo-frame">
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Portrait of Rawan Ahmed" />
          </div>
        </section>

        <dl className="facts">
          <div className="fact">
            <dt>Studying</dt>
            <dd>Information Systems, Delta Academy, class of 2027</dd>
          </div>
          <div className="fact">
            <dt>Training</dt>
            <dd>Full stack at Cyparta, June to September 2026</dd>
          </div>
          <div className="fact">
            <dt>Languages</dt>
            <dd>Arabic and English</dd>
          </div>
        </dl>

        <section id="about" className="block">
          <h2>About</h2>
          <div className="prose">
            <p>
              I'm a full stack developer who enjoys turning ideas into working
              web applications. I completed a full stack training program at
              Cyparta in October City, where I worked on both the frontend and
              the backend.
            </p>
            <p>
              I'm a fourth-year Information Systems student at Delta Academy
              for Science and Technology. I care about clean code, clear
              interfaces, and understanding how things work under the hood. I'm
              looking for a junior position where I can learn and contribute to
              real products.
            </p>
          </div>
        </section>

        <section id="skills" className="block">
          <h2>Skills</h2>
          <dl className="skill-list">
            {skills.map((group) => (
              <div className="skill-row" key={group.title}>
                <dt>{group.title}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="projects" className="block">
          <h2>Projects</h2>
          <ul className="project-list">
            {projects.map((project) => (
              <li className="project" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-stack">{project.stack.join(', ')}</p>
                </div>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">Live demo</a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="training" className="block">
          <h2>Training</h2>
          <div className="training">
            <a
              href="/cyparta-certificate.jpg"
              target="_blank"
              rel="noreferrer"
              className="cert-thumb"
            >
              <img src="/cyparta-certificate.jpg" alt="Cyparta training certificate" />
            </a>
            <div>
              <h3>Full Stack Training Program</h3>
              <p>Cyparta, October City, Egypt</p>
              <p>June to September 2026</p>
              <a
                href="/cyparta-certificate.jpg"
                target="_blank"
                rel="noreferrer"
                className="cert-link"
              >
                View full certificate
              </a>
            </div>
          </div>
        </section>
      </main>

      <section id="contact" className="contact-band">
        <div className="wrap">
          <h2>Contact</h2>
          <p className="contact-text">
            I'm open to junior full stack roles. Write to me at:
          </p>
          <p className="contact-lead">
            <a href="mailto:ra1097651@gmail.com">ra1097651@gmail.com</a>
          </p>
          <div className="contact-links">
            <a
              href="https://wa.me/201018908063?text=Hello%20Rawan%2C%20I%20saw%20your%20portfolio"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a href="https://github.com/Rawan-ahmed00" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <p className="band-footer">© {new Date().getFullYear()} Rawan Ahmed</p>
        </div>
      </section>
    </>
  )
}

export default App