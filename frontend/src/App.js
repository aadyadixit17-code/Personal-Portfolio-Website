import React, { useState, useEffect, useRef } from 'react'; 
import './App.css'; 

function App() {
  // Contact Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // 'SUCCESS', 'ERROR', or ''

  // Track entry and hold the audio track safely
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef(null);

  // LIGHTWEIGHT SCROLL DETECTION ENGINE (0% Lag, Infinite Re-trigger)
  useEffect(() => {
    const handleScrollReveal = () => {
      const revealElements = document.querySelectorAll('.scroll-reveal-target');
      const windowHeight = window.innerHeight;

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisibleThreshold = 100;

        if (elementTop < windowHeight - elementVisibleThreshold && elementTop > -elementVisibleThreshold) {
          element.classList.add('animate-active');
        } else {
          element.classList.remove('animate-active'); 
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal(); 

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  // Form Submission Handler connecting to Formspree API (Email + Database)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch("https://formspree.io/f/xjgqgozy", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('SUCCESS');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFormStatus('ERROR');
      }
    } catch (error) {
      setFormStatus('ERROR');
    }
  };

  // Activate the music on click
  const handleEnterSpace = () => {
    setHasEntered(true);

    if (!audioRef.current) {
      audioRef.current = new Audio('/audio.mpeg');
      audioRef.current.loop = true;
    }

    audioRef.current.play()
      .then(() => console.log("Audio playing!"))
      .catch((err) => console.log("Playback blocked:", err));
  };

  return (
    <div className="space-portfolio">
      {/* Dense, Beautiful Twinkling Starfield */}
      <div className="starfield field-dense-twinkle-a"></div>
      <div className="starfield field-dense-twinkle-b"></div>
      <div className="starfield field-dense-twinkle-c"></div>

      {/* Welcome Overlay */}
      {!hasEntered && (
        <div className="splash-screen-overlay">
          <h1>Welcome to my digital portfolio</h1>
          <button onClick={handleEnterSpace} className="btn-enter">
            Enter the space
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <nav className="space-nav">
        <div className="nav-logo">Aadya Dixit</div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Header Area */}
      <header id="home" className="space-hero">
        <div className="hero-left">
          <div className="avatar-glow-ring">
            <img src="Aadya Dixit.jpeg" alt="Aadya Dixit" className="avatar-content" />
          </div>
          
          <h1 className="hero-title scroll-reveal-target heading-bounce">
            Hi, I'm <br /><span>Aadya Dixit</span>
          </h1>
          <h3 className="hero-subtitle">FULL STACK WEB DEVELOPER</h3>
          <p className="hero-desc">
            I am a B.Tech Computer Science Undergraduate at IMS Engineering College, Ghaziabad | Full Stack Web Developer | Passionate about Emerging Technologies, Innovation and Continuous Learning | Frontend and Backend Developer | Problem Solver | Creative Thinker | Open to Learning and Innovation
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-neon-primary scroll-reveal-target box-bounce">View Projects</a>
            <a href="AADYA DIXIT Resume.pdf" download className="btn-neon-secondary scroll-reveal-target box-bounce">Download Resume</a>
          </div>

          <div className="social-links-row">
            <a href="https://www.linkedin.com/in/aadyadixit17" target="_blank" rel="noreferrer" className="social-icon-btn scroll-reveal-target box-bounce"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/aadyadixit17-code" target="_blank" rel="noreferrer" className="social-icon-btn scroll-reveal-target box-bounce"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/aadya017" target="_blank" rel="noreferrer" className="social-icon-btn scroll-reveal-target box-bounce"><i className="fab fa-instagram"></i></a>
            <a href="mailto:aadyadixit17@gmail.com" className="social-icon-btn scroll-reveal-target box-bounce"><i className="fas fa-envelope"></i></a>
          </div>
        </div>

        <div className="hero-right">
          <div className="cosmic-sphere-container">
            <div className="cosmic-sphere-core"></div>
            <div className="floating-node float-react"><i className="fab fa-react"></i></div>
            <div className="floating-node float-js"><i className="fab fa-js-square"></i></div>
            <div className="floating-node float-leaf"><i className="fas fa-leaf"></i></div>
            <div className="floating-node float-books"><i className="fas fa-book-reader"></i></div>

            <div className="active-orbit-ring">
              <div className="satellite-icon sat-python"><i className="fab fa-python"></i></div>
              <div className="satellite-icon sat-html"><i className="fab fa-html5"></i></div>
              <div className="satellite-icon sat-github"><i className="fab fa-github"></i></div>
              <div className="satellite-icon sat-laptop"><i className="fas fa-laptop-code"></i></div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
              <section id="about" className="content-panel" >
            <h2 className="section-title scroll-reveal-target heading-bounce">About Me</h2>
        <div className="neon-card-panel scroll-reveal-target box-bounce">
          <p className="panel-text">
            I am a Final Year Engineering Student at IMS Engineering College (IMSEC), Ghaziabad, with a strong passion for technology, innovation, and continuous learning. As a Computer Science enthusiast, I am currently in the early phase of my professional journey, actively exploring and strengthening my skills in software development and modern web technologies.
            I have hands-on experience with HTML, CSS, C, C++, JavaScript, Python, and the MERN Stack, and I enjoy building projects that help me apply theoretical concepts to real-world problems. I am continuously learning new technologies, improving my coding practices, and expanding my understanding of full-stack development.
            <br /><br />
            As an aspiring Software Engineer and Tech Enthusiast, I believe in learning by building. I regularly work on personal and academic projects, contribute to my GitHub repositories, and explore innovative solutions through practical implementation. My interests include web development, emerging technologies, problem-solving, and creating user-focused digital experiences.
            Beyond technical skills, I value teamwork, communication, adaptability, time management, and a growth mindset. I enjoy collaborating with others, sharing ideas, and learning from new challenges. My goal is to keep evolving as a developer, transform ideas into impactful solutions, and contribute meaningfully to the ever-changing world of technology.
            <br /><br />
            Turning curiosity into learning, learning into projects, and projects into real-world impact.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-panel" >
        <h2 className="section-title scroll-reveal-target heading-bounce">Skills & Expertise</h2>
        
        <div className="skills-container-layout" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px' }}>
          
          {/* Category 1: Technical Core */}
          <div className="skills-branch">
            <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '1px' }}>💻 TECHNICAL SKILLS</h3>
            <div className="skills-capsule-grid">
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Python</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">JavaScript</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">HTML / CSS</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Data Structures & algorithms</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">React.js</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Node.js</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Express.js</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Mongo DB</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Git & GitHub</div>
            </div>
          </div>

          {/* Category 2: Tools & Frameworks */}
          <div className="skills-branch">
            <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '1px' }}>🛠️ TOOLS & FRAMEWORKS</h3>
            <div className="skills-capsule-grid">
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">VS Code</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Postman</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Linux Basics</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Responsive Web Design</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Rest API</div>
            </div>
          </div>

          {/* Category 3: Soft Skills */}
          <div className="skills-branch">
            <h3 style={{ color: '#38bdf8', fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '1px' }}>🧠 SOFT SKILLS</h3>
            <div className="skills-capsule-grid">
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Problem Solving</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Team Collaboration</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Adaptive Learning</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Time Management</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Communication</div>
              <div className="skill-capsule-neon scroll-reveal-target box-bounce">Continuous Learning</div>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Experience</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* ROLE 1: Full Stack Engineer Intern at Nayoda */}
          <div className="neon-card-panel scroll-reveal-target box-bounce">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '1.5rem' }}>
              <div>
                <span className="degree-tag" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>✨ Internship</span>
                <h3 className="institution-title" style={{ fontSize: '1.4rem', margin: '5px 0 2px 0' }}>Full Stack Engineer</h3>
                <h4 style={{ color: '#38bdf8', fontWeight: '500', fontSize: '1.1rem' }}>Nayoda</h4>
              </div>
              <div style={{ textAlign: 'right', minWidth: '150px' }}>
                <p className="timeline-date" style={{ fontWeight: '600', color: '#a855f7', marginBottom: '2px' }}>Jun 2026 - Present</p>
                <p className="timeline-date" style={{ fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' }}>Remote</p>
              </div>
            </div>

            <p className="panel-text" style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: '#94a3b8' }}>
              This role focuses on gaining practical industry exposure, hands-on learning, and solving real-world challenges through active, live development framework cycles.
            </p>

            <ul style={{ color: '#e2e8f0', paddingLeft: '20px', lineHeight: '1.8', fontSize: '1rem' }}>
              <li style={{ marginBottom: '12px' }}>
                Collaborating closely with the core engineering team in an agile remote ecosystem to align development tasks with professional enterprise workflows, standups, and code review milestones.
              </li>
              <li style={{ marginBottom: '12px' }}>
                Contributing optimized, functional code solutions to live production frameworks that directly enhance web application scaling, user interface performance, and key organizational business outcomes.
              </li>
              <li style={{ marginBottom: '12px' }}>
                Developing structural front-to-back technical architectures and engineering best practices through hands-on application of advanced JavaScript logic, state management, and component trees.
              </li>
              <li>
                Gaining deep architectural insights regarding modern software engineering standards, continuous delivery systems, Git version control branches, and automated cloud application deployment pipelines.
              </li>
            </ul>
          </div>

          {/* ROLE 2: AI in Process Intelligence Virtual Intern */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '2rem', alignItems: 'center' }}>
            
            {/* Left Column: Certificate Image Display */}
            <div style={{ width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid #a855f7', boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)' }}>
              <img 
                src="certificate aicte.jpeg" 
                alt="AICTE EduSkills Celonis Virtual Internship Certificate" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            {/* Right Column: Experience Details */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              
              {/* Badge Label */}
              <span className="degree-tag" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', border: '1px solid #a855f7', marginBottom: '0.5rem' }}>
                🎓 Virtual Internship
              </span>
              
              {/* Main Title */}
              <h3 className="institution-title" style={{ fontSize: '1.4rem', margin: '0 0 4px 0', width: '100%' }}>
                AI in Process Intelligence Intern
              </h3>
              
              {/* Institution Headline */}
              <h4 style={{ color: '#38bdf8', fontWeight: '500', fontSize: '1.1rem', margin: '0 0 4px 0', width: '100%' }}>
                AICTE & EduSkills (Supported by Celonis)
              </h4>
              
              {/* Fixed Alignment */}
              <p className="timeline-date" style={{ fontWeight: '600', color: '#a855f7', margin: '0 0 4px 0', fontSize: '0.95rem', paddingLeft: '0px' }}>
                Apr 2026 - Jun 2026
              </p>
              <p style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: '700', margin: '0 0 1rem 0', paddingLeft: '0px' }}>
                Grade: "O" (Outstanding)
              </p>

              {/* Description Paragraph */}
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '1rem', width: '100%' }}>
                Completed an intensive 8-week structured program exploring enterprise process mining, optimization logic, and data-driven automation frameworks.
              </p>

              {/* Descriptive Core Bullet Points */}
              <ul style={{ color: '#e2e8f0', paddingLeft: '18px', lineHeight: '1.6', fontSize: '0.95rem', width: '100%', margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>Dived deep into process mining methodologies to identify system bottlenecks and execute AI-driven application optimization tracks.</li>
                <li style={{ marginBottom: '8px' }}>Analyzed complex operations workflows to discover execution patterns and build real-world business intelligence structures.</li>
                <li>Applied advanced logical algorithms to solve simulated organizational obstacles, earning the highest possible performance evaluation grade.</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Education</h2>
        <div className="neon-card-panel scroll-reveal-target box-bounce">
          <span className="degree-tag">B.Tech / Computer Science</span>
          <h4 className="institution-title">IMS Engineering College (IMSEC), Ghaziabad</h4>
          <p className="timeline-date"> Computer Science Undergraduate 2023-2027</p>
        </div> 
        <br></br>
         <div className="neon-card-panel scroll-reveal-target box-bounce">
          <span className="degree-tag">Senior Secondary (12th)</span>
          <h4 className="institution-title">St. Marys's Christian School, Sahibabad</h4>
          <p className="timeline-date"> Completed senior secondary education through two academic tracks (PCB and PCM), demonstrating interdisciplinary academic preparation and self-driven learning </p>
        </div>
        <br></br>
         <div className="neon-card-panel scroll-reveal-target box-bounce">
          <span className="degree-tag">Secondary School (10th)</span>
          <h4 className="institution-title">St. Marys's Christian School, Sahibabad</h4>
          <p className="timeline-date">Completed secondary education with a strong foundation in core subjects.</p>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Certificates</h2>
        
        <div className="certificates-container-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', width: '100%' }}>
          
          {/* Certificate 1: IBM */}
          <div className="neon-card-panel spec-padding scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)', marginBottom: '1rem' }}>
              <img src="IBM.jpeg" alt="IBM Getting Started with Artificial Intelligence Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Getting Started with Artificial Intelligence</h4>
            <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Issued by: IBM SkillsBuild (Jun 10, 2026)</p>
            <p className="panel-text" style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Earned a professional technical credential verifying foundational mastery over core Artificial Intelligence concepts, workflows, and industry applications.
            </p>
          </div>

          {/* Certificate 2: GeeksforGeeks */}
          <div className="neon-card-panel spec-padding scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)', marginBottom: '1rem' }}>
              <img src="GFG.jpeg" alt="GeeksforGeeks Workshop Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Exclusive One-Day Offline Workshop</h4>
            <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Issued by: GeeksforGeeks Classroom Center & Nation SkillUp</p>
            <p className="panel-text" style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Awarded for active participation in an intensive, in-person training track at the GeeksforGeeks Classroom Center to build advanced technical and coding skills.
            </p>
          </div>

          {/* Certificate 3: SAMAGRA 2026 */}
          <div className="neon-card-panel spec-padding scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)', marginBottom: '1rem' }}>
              <img src="ITS.jpeg" alt="SAMAGRA 2026 Participation Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>SAMAGRA - 2026: Brain Bytes</h4>
            <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Institute of Technology & Science, Ghaziabad (Apr 10, 2026)</p>
            <p className="panel-text" style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Recognized for representing IMS Engineering College and successfully competing in the "Brain Bytes" technical challenge event during this Inter-Institutional Techno-Cultural Fest.
            </p>
          </div>

        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Achievements</h2>
        
        <div className="achievements-container-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>
          
          {/* Achievement 1: SGU Hackathon 2.0 */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)' }}>
                <img src="SDGI.jpeg" alt="SDGI Global University SGU Hackathon 2.0 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h4 style={{ color: '#38bdf8', fontSize: '1.15rem', marginBottom: '0.4rem' }}>🏆 SGU Hackathon 2.0-2026</h4>
              <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>SDGI Global University | Team: Code Divas (Mar 20-21, 2026)</p>
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Competed alongside team "Code Divas" representing IMS Engineering College in an intensive 2-day national hackathon event focused on innovation and problem-solving.
              </p>
            </div>
          </div>

          {/* Achievement 2: BUG..S.E.N.S.E Hackathon */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)' }}>
                <img src="IMSUC.jpeg" alt="IMS Ghaziabad BUG S.E.N.S.E of HACK-A-THON -2K26 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h4 style={{ color: '#38bdf8', fontSize: '1.15rem', marginBottom: '0.4rem' }}>💻 BUG S.E.N.S.E of HACK-A-THON -2K26</h4>
              <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Department of Computer Science, IMS Ghaziabad (Apr 7, 2026)</p>
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Participated in a rigorous coding and debugging hackathon challenge, demonstrating strong analytical capability and system-level logical tracking under timed conditions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Projects</h2>
        
        <div className="showcase-project-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', width: '100%' }}>
          
          {/* PROJECT 1: Personal Portfolio Website */}
          <div className="neon-card-panel project-detail-hero scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 12px rgba(56, 189, 248, 0.15)' }}>
                <img src="/portfolio.png" alt="Personal Portfolio Screenshot Overview" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              
              <h3 className="proj-title" style={{ fontSize: '1.35rem', color: '#fff', margin: '0 0 0.5rem 0' }}>PERSONAL PORTFOLIO WEBSITE</h3>
              <p className="proj-desc" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                A custom React application optimized with fluid scroll-reveal animations, responsive layouts, and interactive UI component states. Features a multi-layered sparkling space theme designed for high-performance scannability.
              </p>
              <div className="proj-tech-stack-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                <span style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>◆ React Engine</span>
                <span style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>◆ Hooks & Refs</span>
                <span style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>◆ CSS Keyframes</span>
              </div>
            </div>
            <div className="proj-action-links" style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/aadyadixit17-code/Student-Portfolio" target="_blank" rel="noreferrer" className="btn-neon-mini" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <i className="fab fa-github"></i> GitHub Access
              </a>
              
            </div>
          </div>

          {/* PROJECT 2: Volunteer Registration System */}
          <div className="neon-card-panel project-detail-hero scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 12px rgba(168, 85, 247, 0.15)' }}>
                <img src="volunteer.png" alt="Volunteer Registration System Dashboard UI Overview" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>

              <h3 className="proj-title" style={{ fontSize: '1.35rem', color: '#fff', margin: '0 0 0.5rem 0' }}>VOLUNTEER REGISTRATION SYSTEM</h3>
              <p className="proj-desc" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.2rem' }}>
                A structured management portal designed to streamline community operations. Features custom onboarding workflows, dynamic event role assignment, and robust data tracking sheets for scheduling, tracking, and allocating volunteer networks.
              </p>
              <div className="proj-tech-stack-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                <span style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#c084fc', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(168, 85, 247, 0.2)' }}>◆ Full Stack Architecture</span>
                <span style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#c084fc', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(168, 85, 247, 0.2)' }}>◆ Form Validation</span>
                <span style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#c084fc', padding: '4px 10px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(168, 85, 247, 0.2)' }}>◆ Database Management</span>
              </div>
            </div>
            <div className="proj-action-links" style={{ display: 'flex', gap: '12px' }}>
              <a href="https://github.com/aadyadixit17-code/Volunteer-Registration-System" target="_blank" rel="noreferrer" className="btn-neon-mini" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                <i className="fab fa-github"></i> Source Code
              </a>
              
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Contact</h2>
        <div className="contact-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleFormSubmit} className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
              <label style={{ color: '#38bdf8', fontSize: '0.9rem' }}>Name</label>
              <input 
                type="text" 
                name="name"
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.4)', background: 'rgba(15, 23, 42, 0.6)', color: '#fff' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
              <label style={{ color: '#38bdf8', fontSize: '0.9rem' }}>Email</label>
              <input 
                type="email" 
                name="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.4)', background: 'rgba(15, 23, 42, 0.6)', color: '#fff' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
              <label style={{ color: '#38bdf8', fontSize: '0.9rem' }}>Message</label>
              <textarea 
                rows="5" 
                name="message"
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
                style={{ padding: '10px', borderRadius: '4px', border: '1px solid rgba(56, 189, 248, 0.4)', background: 'rgba(15, 23, 42, 0.6)', color: '#fff', resize: 'vertical' }}
              ></textarea>
            </div>
            <button type="submit" className="btn-neon-primary" style={{ marginTop: '0.5rem', alignSelf: 'flex-start', border: 'none', cursor: 'pointer' }}>
              Send Message
            </button>

            {formStatus === 'SUCCESS' && (
              <p style={{ color: '#22c55e', fontSize: '0.95rem', marginTop: '0.5rem', fontWeight: '500' }}>
                ✓ Message sent successfully! It has been recorded.
              </p>
            )}
            {formStatus === 'ERROR' && (
              <p style={{ color: '#ef4444', fontSize: '0.95rem', marginTop: '0.5rem', fontWeight: '500' }}>
                ✕ Outpost transmission failed. Please try again or reach out directly via email.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer Area */}
      <footer style={{ padding: '2rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>Aadya Dixit <br></br> +91-9315808067</p>
      </footer>
    </div>
  );
}

export default App;


      

      


      


      