import React, { useState, useEffect } from 'react'; 
import './App.css'; 

function App() {

  // State for expandable skill cards
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpand = (id) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((cardId) => cardId !== id));
    } else {
      setExpandedCards([...expandedCards, id]);
    }
  };

  // Contact Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(''); // 'SUCCESS', 'ERROR', or ''

  // Track overlay entry state
  const [hasEntered, setHasEntered] = useState(false);

  // Handle entry button click without audio
  const handleEnterSpace = () => {
    setHasEntered(true);
  };

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
          <h3 className="hero-subtitle">Aspiring DevOps Engineer | Full Stack Developer</h3>
          {/* Hero Tagline Capsule */}
          <div className="hero-tagline-capsule">
          <span>Building applications. Automating infrastructure. Delivering reliable software.</span>
          </div>
          <p className="hero-desc">
           B.Tech Computer Science ’27 | IMS Engineering College, Ghaziabad

           {/* Hero Tech Focus Badges */}
           <div className="hero-badges-container">
           <span className="hero-badge badge-purple">Full Stack Development</span>
           <span className="hero-badge badge-blue">Azure & DevOps</span>
           <span className="hero-badge badge-indigo">Agentic AI</span>
          </div> 
            I build full-stack web applications and automate the infrastructure and deployment workflows behind them. My technical interests span Microsoft Azure, Terraform, CI/CD pipelines, cloud networking, Docker, Kubernetes, and modern web development using React, Node.js, Express.js, and MongoDB. I focus on building practical, secure, and scalable solutions through infrastructure automation, application development, and continuous integration and delivery. 
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-neon-primary scroll-reveal-target box-bounce">View Projects</a>
            <a href="RESUME.pdf" download className="btn-neon-secondary scroll-reveal-target box-bounce">Download Resume</a>
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
      <section id="about" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">About Me</h2>
        <div className="neon-card-panel scroll-reveal-target box-bounce">
         <p className="panel-text">
         I am a B.Tech Computer Science student (2027) at IMS Engineering College, Ghaziabad, with a strong technical foundation in Full Stack Development, Cloud Engineering, and DevOps automation.
         <br/><br/>
         My experience with full-stack web applications has given me an understanding of application development, backend logic, API integration, and database design. Alongside development, I have built knowledge of how applications are deployed, how cloud infrastructure is provisioned, and how automation streamlines software delivery.
         <br/><br/>
         My technical skill set includes Microsoft Azure, Infrastructure as Code (Terraform), CI/CD pipelines, cloud networking, containerization, and DevSecOps practices. I also work with modern web development technologies such as React, Node.js, Express.js, and MongoDB, connecting application development with infrastructure and deployment workflows.
         <br/><br/>
         My technical interests extend to cloud architecture, infrastructure automation, secure deployment practices, and emerging AI technologies. I focus on applying my technical knowledge to practical projects and developing reliable, scalable, and maintainable software solutions.
         </p> 
        </div>
      </section>

      {/* Skills Section */}
      
      {/* Skills Section */}
      <section id="skills" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Skills & Expertise</h2>
        
        <div className="skills-grid-container">
          {/* Card 1: Azure & Cloud */}
          <div className={`skill-card card-purple ${expandedCards.includes('azure') ? 'expanded' : ''}`}>
            <div className="card-top">
              <span className="shape-icon">●</span>
              <button type="button" className="expand-arrow-btn" onClick={() => toggleExpand('azure')}>
                <svg className={`arrow-icon ${expandedCards.includes('azure') ? 'rotate' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            <h3 className="card-title">Cloud Architecture & Networking (Azure)</h3>

            <div className={`card-details-panel ${expandedCards.includes('azure') ? 'open' : ''}`}>
              <ul className="details-list">
                <li>Azure Enterprise Architecture & Landing Zones</li>
                <li>Azure Network Architecture, Routing & Connectivity</li>
                <li>Hybrid Cloud Connectivity  </li>
                <li>Network Security, Traffic Distribution & Application Delivery</li>
                <li>Global Traffic Management & Content Delivery</li>
                <li>Private Networking & Service Connectivity</li>
                <li>Azure Storage, Backup & Disaster Recovery</li>
              </ul>
            </div>
          </div>

          {/* Card 2: DevOps & CI/CD */}
          <div className={`skill-card card-blue ${expandedCards.includes('devops') ? 'expanded' : ''}`}>
            <div className="card-top">
              <span className="shape-icon">⬡</span>
              <button type="button" className="expand-arrow-btn" onClick={() => toggleExpand('devops')}>
                <svg className={`arrow-icon ${expandedCards.includes('devops') ? 'rotate' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            <h3 className="card-title">Infrastructure as Code (IaC)</h3>
            <div className={`card-details-panel ${expandedCards.includes('devops') ? 'open' : ''}`}>
              <ul className="details-list">
                <li>Advanced Terraform Architecture & Dynamic Infrastructure Provisioning</li>
                <li>IaC Security, Static Analysis & Code Quality</li>
                <li>Terraform Testing & Infrastructure Validation</li>
                <li>Cloud Cost Optimization & FinOps</li>
                
              </ul>
            </div>
          </div>

          {/* Card 3: Terraform & IaC */}
          <div className={`skill-card card-amber ${expandedCards.includes('terraform') ? 'expanded' : ''}`}>
            <div className="card-top">
              <span className="shape-icon">◆</span>
              <button type="button" className="expand-arrow-btn" onClick={() => toggleExpand('terraform')}>
                <svg className={`arrow-icon ${expandedCards.includes('terraform') ? 'rotate' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            <h3 className="card-title">DevOps, DevSecOps & Pipelines</h3>
            
            <div className={`card-details-panel ${expandedCards.includes('terraform') ? 'open' : ''}`}>
              <ul className="details-list">
                <li>Azure DevOps Pipeline Architecture & Reusable Templates</li>
                <li>Production-Grade DevSecOps & Policy-Gated CI/CD</li>
                <li>Agent Management & Multi-Environment Deployment Automation</li>
                <li>Git Workflows, Branching Strategies & Collaboration</li>
                
              </ul>
            </div>
          </div>

          {/* Card 4: Containers & K8s */}
          <div className={`skill-card card-green ${expandedCards.includes('k8s') ? 'expanded' : ''}`}>
            <div className="card-top">
              <span className="shape-icon">⯁</span>
              <button type="button" className="expand-arrow-btn" onClick={() => toggleExpand('k8s')}>
                <svg className={`arrow-icon ${expandedCards.includes('k8s') ? 'rotate' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            <h3 className="card-title">Containers & Kubernetes (AKS)</h3>
            
            <div className={`card-details-panel ${expandedCards.includes('k8s') ? 'open' : ''}`}>
              <ul className="details-list">
                <li>Containerization & Kubernetes Fundamentals</li>
                <li>Kubernetes Networking, Ingress & TLS</li>
                <li>Kubernetes Scheduling & Workload Placement</li>
                <li>Helm-Based Deployments & GitOps with Argo CD</li>
                <li>Service Mesh, Sidecar Patterns & Zero-Trust Workload Communication</li>
                <li>Kubernetes Monitoring & Observability </li>
                
              </ul>
            </div>
          </div>

          {/* Card 5: Identity & Security */}
          <div className={`skill-card card-pink ${expandedCards.includes('security') ? 'expanded' : ''}`}>
            <div className="card-top">
              <span className="shape-icon">★</span>
              <button type="button" className="expand-arrow-btn" onClick={() => toggleExpand('security')}>
                <svg className={`arrow-icon ${expandedCards.includes('security') ? 'rotate' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            <h3 className="card-title">Security, Identity & Governance</h3>
            
            <div className={`card-details-panel ${expandedCards.includes('security') ? 'open' : ''}`}>
              <ul className="details-list">
                <li>Microsoft Entra ID, Identity & Access Management</li>
                <li>Identity Security & Privileged Access Management</li>
                <li>Hybrid Identity, Directory Services & Migration</li>
                <li>Azure Governance, Policy & Compliance</li>
                <li>Infrastructure Patching & Update Management</li>
                
              </ul>
            </div>
          </div>

          {/* Card 6: Full Stack & AI */}
          <div className={`skill-card card-teal ${expandedCards.includes('fullstack') ? 'expanded' : ''}`}>
            <div className="card-top">
              <span className="shape-icon">▲</span>
              <button type="button" className="expand-arrow-btn" onClick={() => toggleExpand('fullstack')}>
                <svg className={`arrow-icon ${expandedCards.includes('fullstack') ? 'rotate' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            </div>
            <h3 className="card-title">Application Deployments & Axion System</h3>
            
            <div className={`card-details-panel ${expandedCards.includes('fullstack') ? 'open' : ''}`}>
              <ul className="details-list">
                <li>Azure Application Hosting & Deployment: Monolithic deployments, Azure App Service, Deployment Slots, Azure Container Apps, and Azure Container Instances (ACI).</li>
                
                <li>End-to-End Axion System Implementation & CI/CD Automation: Frontend, backend, database design and data modeling, infrastructure setup, and migration from manual deployments to automated pipelines.</li>
              </ul>
            </div>
          </div>
            {/* Card 7: Full Stack & AI */}
           <div className={`skill-card card-pink ${expandedCards.includes('ai') ? 'expanded' : ''}`}>
            <div className="card-top">
              <span className="shape-icon">★</span>
              <button
                type="button"
                className="expand-arrow-btn"
                onClick={() => toggleExpand('ai')}
              >
                <svg
                  className={`arrow-icon ${expandedCards.includes('ai') ? 'rotate' : ''}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <h3 className="card-title">Agentic AI & Emerging Tech</h3>
            
            <div className={`card-details-panel ${expandedCards.includes('ai') ? 'open' : ''}`}>
              <ul className="details-list">
                <li>Agentic AI, LLMs & Autonomous Workflows: Autonomous agents, AI workflows, prompt engineering, and LangChain.</li>
                <li>AI Frameworks & Intelligent Application Integration: Hugging Face and integration of AI capabilities into digital solutions.</li>
              </ul>
            </div>
          </div>
          {/* Card 8: Full Stack & AI */}
           <div className={`skill-card card-orange ${expandedCards.includes('software') ? 'expanded' : ''}`}>
            <div className="card-top">
              <span className="shape-icon">⬠</span>
              <button
                type="button"
                className="expand-arrow-btn"
                onClick={() => toggleExpand('software')}
              >
                <svg
                  className={`arrow-icon ${expandedCards.includes('software') ? 'rotate' : ''}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            <h3 className="card-title">Full Stack & Core Software Engineering</h3>
            
            <div className={`card-details-panel ${expandedCards.includes('software') ? 'open' : ''}`}>
              <ul className="details-list">
                <li>Programming Languages & Frontend Fundamentals: HTML, CSS, JavaScript, React, Python, C, C++.</li>
                <li>MERN Stack & Full-Stack Development: Building end-to-end web applications (6-7 completed projects).</li>
                <li>Backend Development & RESTful API Engineering: Node.js, Express.js, server architecture, and API integration.</li>
                <li>Database Design, SQL & Data Modeling: MongoDB, data modeling, schema design, and backend storage.</li>
                <li>Version Control & Source Code Management: Git strategies, GitHub repositories, and collaborative branching.</li>
                <li>Development Tools & API Testing: Postman, VS Code, debugging, and efficient code practices.</li>
              </ul>

              
            </div>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      {/* Experience Section */}
<section id="experience" className="content-panel">
  <h2 className="section-title scroll-reveal-target heading-bounce">Experience</h2>

  <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
    
    {/* ROLE 1: Full Stack Engineer Intern at Nayoda */}
    <div 
      style={{ display: 'flex', gap: '24px', alignItems: 'center' }} 
      className="neon-card-panel scroll-reveal-target box-bounce"
    >
      {/* Left Column: Certificate Image */}
      <div style={{ flex: '0 0 340px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/nayoda.jpeg" 
          alt="Nayoda Internship Certificate" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #4a2d75', boxShadow: '0 4px 14px rgba(0,0,0,0.4)' }} 
        />
      </div>

      {/* Right Column: Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
          <div>
            <span className="degree-tag" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>✨ Internship</span>
            <h3 className="institution-title" style={{ fontSize: '1.3rem', margin: '4px 0 2px 0' }}>Full Stack Engineer</h3>
            <h4 style={{ color: '#38bdf8', fontWeight: '500', fontSize: '1rem' }}>Nayoda</h4>
          </div>
          <div style={{ textAlign: 'right', minWidth: '130px' }}>
            <p className="timeline-date" style={{ fontWeight: '600', color: '#a855f7', marginBottom: '2px', fontSize: '0.9rem' }}>Jun 2026 - July 2026</p>
            <p className="timeline-date" style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>Remote</p>
          </div>
        </div>

        <p className="panel-text" style={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#94a3b8' }}>
          This role focuses on gaining practical industry exposure, hands-on learning, and solving real-world challenges through active, live development framework cycles.
        </p>

        <ul style={{ color: '#e2e8f0', paddingLeft: '18px', lineHeight: '1.6', fontSize: '0.92rem' }}>
          <li style={{ marginBottom: '8px' }}>
            Collaborating closely with the core engineering team in an agile remote ecosystem to align development tasks with professional enterprise workflows, standups, and code review milestones.
          </li>
          <li style={{ marginBottom: '8px' }}>
            Contributing optimized, functional code solutions to live production frameworks that directly enhance web application scaling, user interface performance, and key organizational business outcomes.
          </li>
          <li style={{ marginBottom: '8px' }}>
            Developing structural front-to-back technical architectures and engineering best practices through hands-on application of advanced JavaScript logic, state management, and component trees.
          </li>
          <li>
            Gaining deep architectural insights regarding modern software engineering standards, continuous delivery systems, Git version control branches, and automated cloud application deployment pipelines.
          </li>
        </ul>
      </div>
    </div>

    {/* ROLE 2: Full Stack Web Dev (MERN) Intern at Skill Nexis */}
    <div 
      style={{ display: 'flex', gap: '24px', alignItems: 'center' }} 
      className="neon-card-panel scroll-reveal-target box-bounce"
    >
      {/* Left Column: Certificate Image */}
      <div style={{ flex: '0 0 340px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/skill.jpeg" 
          alt="Skill Nexis MERN Stack Internship Certificate" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #4a2d75', boxShadow: '0 4px 14px rgba(0,0,0,0.4)' }} 
        />
      </div>

      {/* Right Column: Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
          <div>
            <span className="degree-tag" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>✨ Internship</span>
            <h3 className="institution-title" style={{ fontSize: '1.3rem', margin: '4px 0 2px 0' }}>Full Stack Web Developer (MERN)</h3>
            <h4 style={{ color: '#38bdf8', fontWeight: '500', fontSize: '1rem' }}>Skill Nexis</h4>
          </div>
          <div style={{ textAlign: 'right', minWidth: '130px' }}>
            </div>
        </div>

        <p className="panel-text" style={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#94a3b8' }}>
          Completed an intensive 6-week hands-on internship focusing on full-stack web engineering, component-driven UI development, and robust backend REST API architectures using the MERN stack.
        </p>

        <ul style={{ color: '#e2e8f0', paddingLeft: '18px', lineHeight: '1.6', fontSize: '0.92rem' }}>
          <li style={{ marginBottom: '8px' }}>
            Engineered responsive and scalable full-stack web application features utilizing MongoDB, Express.js, React.js, and Node.js.
          </li>
          <li style={{ marginBottom: '8px' }}>
            Implemented end-to-end user authentication protocols, state management hooks, and optimized frontend client routing.
          </li>
          <li style={{ marginBottom: '8px' }}>
            Designed modular RESTful APIs and optimized database schemas to enable seamless frontend-backend communication.
          </li>
          <li>
            Followed industry-standard Git version control workflows and best code formatting practices across production builds.
          </li>
        </ul>
      </div>
    </div>

    {/* ROLE 3: Junior Full Stack Developer Intern at YuvaIntern / Henry Harvin */}
    <div 
      style={{ display: 'flex', gap: '24px', alignItems: 'center' }} 
      className="neon-card-panel scroll-reveal-target box-bounce"
    >
      {/* Left Column: Certificate Image */}
      <div style={{ flex: '0 0 340px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/yuva.jpeg" 
          alt="YuvaIntern Henry Harvin Full Stack Internship Certificate" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #4a2d75', boxShadow: '0 4px 14px rgba(0,0,0,0.4)' }} 
        />
      </div>

      {/* Right Column: Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
          <div>
            <span className="degree-tag" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>✨ Internship</span>
            <h3 className="institution-title" style={{ fontSize: '1.3rem', margin: '4px 0 2px 0' }}>Junior Full Stack Developer Intern</h3>
            <h4 style={{ color: '#38bdf8', fontWeight: '500', fontSize: '1rem' }}>YuvaIntern (Henry Harvin Education)</h4>
          </div>
          <div style={{ textAlign: 'right', minWidth: '130px' }}>
            </div>
        </div>

        <p className="panel-text" style={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#94a3b8' }}>
          Demonstrated consistent dedication and full-stack software development expertise throughout a structured internship program under YuvaIntern in association with Henry Harvin Education and NSDC.
        </p>

        <ul style={{ color: '#e2e8f0', paddingLeft: '18px', lineHeight: '1.6', fontSize: '0.92rem' }}>
          <li style={{ marginBottom: '8px' }}>
            Developed full-stack web modules and interactive user interfaces following strict organizational production standards.
          </li>
          <li style={{ marginBottom: '8px' }}>
            Collaborated across cross-functional remote teams to deliver clean, scalable application components and fix technical bugs.
          </li>
          <li style={{ marginBottom: '8px' }}>
            Applied best practice database interactions and client-side logic to ensure responsive web UI/UX execution.
          </li>
          <li>
            Earned formal recognition for strong technical agility, professionalism, and integrity across project development milestones.
          </li>
        </ul>
      </div>
    </div>

    {/* ROLE 4: AI in Process Intelligence Virtual Intern */}
    <div 
      style={{ display: 'flex', gap: '24px', alignItems: 'center' }} 
      className="neon-card-panel scroll-reveal-target box-bounce"
    >
      {/* Left Column: Certificate Image */}
      <div style={{ flex: '0 0 340px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/certificate aicte.jpeg" 
          alt="AICTE EduSkills Celonis Virtual Internship Certificate" 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #4a2d75', boxShadow: '0 4px 14px rgba(0,0,0,0.4)' }} 
        />
      </div>

      {/* Right Column: Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '1rem' }}>
          <div>
            <span className="degree-tag" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>🎓 Virtual Internship</span>
            <h3 className="institution-title" style={{ fontSize: '1.3rem', margin: '4px 0 2px 0' }}>AI in Process Intelligence Intern</h3>
            <h4 style={{ color: '#38bdf8', fontWeight: '500', fontSize: '1rem' }}>AICTE & EduSkills (Supported by Celonis)</h4>
          </div>
          <div style={{ textAlign: 'left', minWidth: '130px' }}>
            <p className="timeline-date" style={{ fontWeight: '600', color: '#a855f7', marginBottom: '2px', fontSize: '0.9rem' }}>Apr 2026 - Jun 2026</p>
            <p style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: '700', margin: 0 }}>Grade: "O" (Outstanding)</p>
          </div>
        </div>

        <p className="panel-text" style={{ marginBottom: '1rem', fontSize: '0.95rem', color: '#94a3b8' }}>
          Completed an intensive 8-week structured program exploring enterprise process mining, optimization logic, and data-driven automation frameworks.
        </p>

        <ul style={{ color: '#e2e8f0', paddingLeft: '18px', lineHeight: '1.6', fontSize: '0.92rem' }}>
          <li style={{ marginBottom: '8px' }}>
            Dived deep into process mining methodologies to identify system bottlenecks and execute AI-driven application optimization tracks.
          </li>
          <li style={{ marginBottom: '8px' }}>
            Analyzed complex operations workflows to discover execution patterns and build real-world business intelligence structures.
          </li>
          <li>
            Applied advanced logical algorithms to solve simulated organizational obstacles, earning the highest possible performance evaluation grade.
          </li>
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
        <br />
        <div className="neon-card-panel scroll-reveal-target box-bounce">
          <span className="degree-tag">Senior Secondary (12th)</span>
          <h4 className="institution-title">St. Marys's Christian School, Sahibabad</h4>
          <p className="timeline-date"> Completed senior secondary education through two academic tracks (PCB and PCM), demonstrating interdisciplinary academic preparation and self-driven learning </p>
        </div>
        <br />
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
            <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cloud Computing Fundamentals</h4>
            <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Issued by: IBM SkillsBuild (Jul 06, 2026)</p>
            <p className="panel-text" style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Earned a professional technical credential verifying foundational mastery over core Cloud Computing concepts, workflows, and industry applications.
            </p>
          </div>

          {/* Certificate 2: ecsoc */}
          <div className="neon-card-panel spec-padding scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)', marginBottom: '1rem' }}>
              <img src="ecsoc.jpeg" alt="ECSoC '26 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>ECSOC'26 Contributor</h4>
            <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Issued by: Elite Coders</p>
            <p className="panel-text" style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Awarded for actively participating in Elite Coders Summer of Code 2026 as an open-source contributor. Contributed functional code enhancements to community repositories, collaborated with global developers, and gained hands-on open-source development experience.          
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

           <div className="neon-card-panel spec-padding scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.3)', marginBottom: '1rem' }}>
              <img src="crypto.jpeg" alt="ECSoC '26 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <h4 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>The Crypto Heist CTF </h4>
            <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Issued by: ThunderCipher</p>
            <p className="panel-text" style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5' }}>
              Solved hands-on cybersecurity and cryptographic challenges, demonstrating analytical problem-solving skills, vulnerability exploitation, and security logic under competitive event conditions.                </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Achievements</h2>
        
        <div className="achievements-container-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%' }}>
          {/* Achievement 1:  */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)' }}>
                <img src="RAG.jpeg" alt="SDGI Global University SGU Hackathon 2.0 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h4 style={{ color: '#38bdf8', fontSize: '1.15rem', marginBottom: '0.4rem' }}> Build AI-Powered Applications Using RAG Pipelines</h4>
              <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}> Issued by : Creozen Ltd (13 July, 2026) </p>
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Built and deployed AI-powered applications leveraging Retrieval-Augmented Generation (RAG) architectures.
                </p>
            </div>
          </div>
          

          {/* Achievement 2: BUG..S.E.N.S.E Hackathon */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)' }}>
                <img src="IMSUC.jpeg" alt="IMS Ghaziabad BUG S.E.N.S.E of HACK-A-THON -2K26 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h4 style={{ color: '#38bdf8', fontSize: '1.15rem', marginBottom: '0.4rem' }}>BUG S.E.N.S.E of HACK-A-THON -2K26</h4>
              <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Department of Computer Science, IMS Ghaziabad (Apr 7, 2026)</p>
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Participated in a rigorous coding and debugging hackathon challenge, demonstrating strong analytical capability and system-level logical tracking under timed conditions.
              </p>
            </div>
          </div>
            {/* Achievement 3: */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)' }}>
                <img src="SDGI.jpeg" alt="SDGI Global University SGU Hackathon 2.0 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h4 style={{ color: '#38bdf8', fontSize: '1.15rem', marginBottom: '0.4rem' }}> SGU Hackathon 2.0-2026</h4>
              <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>SDGI Global University | Team: Code Divas (Mar 20-21, 2026)</p>
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Competed alongside team "Code Divas" representing IMS Engineering College in an intensive 2-day national hackathon event focused on innovation and problem-solving.
              </p>
            </div>
          </div>
            {/* Achievement 4:  */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)' }}>
                <img src="ipec.jpeg" alt="IMS Ghaziabad BUG S.E.N.S.E of HACK-A-THON -2K26 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h4 style={{ color: '#38bdf8', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Grand Hack IPEC (24-Hour Hackathon)</h4>
              <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>HackShastra & IPEC Ghaziabad (September 26–27, 2026)</p>
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
               Participated in a 24-hour offline national-level hackathon, Grand Hack IPEC, organized by HackShastra at IPEC Ghaziabad.
              </p>
            </div>
          </div>
            {/* Achievement 2: BUG..S.E.N.S.E Hackathon */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)' }}>
                <img src="she.jpeg" alt="IMS Ghaziabad BUG S.E.N.S.E of HACK-A-THON -2K26 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h4 style={{ color: '#38bdf8', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Shepreneurs Hackathon</h4>
              <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>TechVerse Solutions & SheBuilds (August 15, 2026) </p>
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Awarded for active participation in Shepreneurs, an inspiring community initiative dedicated to empowering women innovators, fostering technology-driven entrepreneurship, and building a network of change-makers</p>
            </div>
          </div>
            {/* Achievement 2: BUG..S.E.N.S.E Hackathon */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '100%', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '1.2rem', boxShadow: '0 0 10px rgba(168, 85, 247, 0.1)' }}>
                <img src="aspire.jpeg" alt="IMS Ghaziabad BUG S.E.N.S.E of HACK-A-THON -2K26 Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h4 style={{ color: '#38bdf8', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Women Who Master Hackathon</h4>
              <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Logitech & Aspire For Her (27th July, 2026) </p>
              <p className="panel-text" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Contributed to a nationwide movement aimed at empowering over 100K women in technology through collaborative coding and software innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-panel">
        <h2 className="section-title scroll-reveal-target heading-bounce">Projects</h2>
        
        <div className="showcase-project-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', width: '100%', alignItems: 'start' }}>
          
          {/* PROJECT 1: SkillSphere */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ padding: '20px 24px', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 className="proj-title" style={{ fontSize: '1.35rem', color: '#fff', margin: '0 0 4px 0' }}>SKILLSPHERE</h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>AI-Powered Hyperlocal Freelance Ecosystem</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a 
                  href="https://github.com/aadyadixit17-code/skillsphere" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-neon-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#38bdf8', border: '1px solid #38bdf8', textDecoration: 'none' }}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>

                <button 
                  onClick={(e) => {
                    const contentDiv = e.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling;
                    const isHidden = contentDiv.style.display === 'none';
                    contentDiv.style.display = isHidden ? 'block' : 'none';
                    e.currentTarget.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
                  }}
                  aria-label="Toggle Description"
                  style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid #a855f7', color: '#c084fc', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                >
                  ▼
                </button>
              </div>
            </div>

            <div className="proj-tech-stack-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)' }}>◆ AI Integration</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ MERN Stack</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.4)' }}>◆ CI/CD concept</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)' }}>◆ Application Deployment</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)' }}>◆ Environment Configuration</span>
              
            </div>

            <div style={{ display: 'none', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 10px 0' }}>A full-stack MERN platform designed to connect clients with local freelancers through AI-powered job matching, skill assessments, personalised learning paths, milestone-based payments, and real-time collaboration. The project incorporates DevOps concepts such as Git/GitHub version control, environment-based configuration, application deployment, build management, and deployment workflow automation, with a focus on maintainability, scalability, and reliable application delivery.</p> </div>
          </div>


          {/* PROJECT 22: Blinkit Clone */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ padding: '20px 24px', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 className="proj-title" style={{ fontSize: '1.35rem', color: '#fff', margin: '0 0 4px 0' }}>BLINKIT CLONE</h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Quick-Commerce Grocery Delivery Web Application</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a 
                  href="https://github.com/aadyadixit17-code/blinkit-clone" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-neon-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#38bdf8', border: '1px solid #38bdf8', textDecoration: 'none' }}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>

                <button 
                  onClick={(e) => {
                    const contentDiv = e.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling;
                    const isHidden = contentDiv.style.display === 'none';
                    contentDiv.style.display = isHidden ? 'block' : 'none';
                    e.currentTarget.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
                  }}
                  aria-label="Toggle Description"
                  style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid #a855f7', color: '#c084fc', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                >
                  ▼
                </button>
              </div>
            </div>

            <div className="proj-tech-stack-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.4)' }}>◆ React.js</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ Java Script</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)' }}>◆ Git & GitHub</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#ec4899', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.4)' }}>◆ Responsive UI</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.4)' }}>◆ CI/CD</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ Application Deployment</span>
             
            </div>

            <div style={{ display: 'none', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 10px 0' }}>
                Developed a responsive Blinkit-inspired grocery delivery web application featuring dynamic product search, category filtering, and interactive cart management. Applied Git/GitHub version control and DevOps concepts related to application deployment and CI/CD workflows for efficient application delivery. </p>
              
            </div>
          </div>



          {/* PROJECT 33: AssetFlow */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ padding: '20px 24px', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 className="proj-title" style={{ fontSize: '1.35rem', color: '#fff', margin: '0 0 4px 0' }}>ASSETFLOW</h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Intelligent Asset Management & Tracking System</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a 
                  href="https://github.com/aadyadixit17-code/AssetFlow" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-neon-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#38bdf8', border: '1px solid #38bdf8', textDecoration: 'none' }}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>

                <button 
                  onClick={(e) => {
                    const contentDiv = e.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling;
                    const isHidden = contentDiv.style.display === 'none';
                    contentDiv.style.display = isHidden ? 'block' : 'none';
                    e.currentTarget.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
                  }}
                  aria-label="Toggle Description"
                  style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid #a855f7', color: '#c084fc', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                >
                  ▼
                </button>
              </div>
            </div>

            <div className="proj-tech-stack-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ Asset Tracking</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)' }}>◆ Inventory Management</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)' }}>◆ Real-Time Analytics</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ Deployment</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)' }}>◆ Configuration </span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ Role Based Access Control</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.4)' }}>◆ Version Control</span>
              
              </div>

            <div style={{ display: 'none', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 10px 0' }}>
                Developed AssetFlow, an asset management and tracking system featuring real-time inventory monitoring, role-based access control, and analytics dashboards, with a focus on scalable application architecture, Git/GitHub version control, and streamlined deployment practices.</p>
             
            </div>
          </div>


          {/* PROJECT 6: DeepFake Digital Media Authenticity Verification */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ padding: '20px 24px', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 className="proj-title" style={{ fontSize: '1.35rem', color: '#fff', margin: '0 0 4px 0' }}>DEEPFAKE DIGITAL MEDIA AUTHENCITY VERIFICATION</h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>AI-Powered Digital Media Authenticity Detection</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a 
                  href="https://github.com/aadyadixit17-code/DeepFake-Digital-Media-Authenticity-Verification" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-neon-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#38bdf8', border: '1px solid #38bdf8', textDecoration: 'none' }}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>

                <button 
                  onClick={(e) => {
                    const contentDiv = e.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling;
                    const isHidden = contentDiv.style.display === 'none';
                    contentDiv.style.display = isHidden ? 'block' : 'none';
                    e.currentTarget.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
                  }}
                  aria-label="Toggle Description"
                  style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid #a855f7', color: '#c084fc', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                >
                  ▼
                </button>
              </div>
            </div>

            <div className="proj-tech-stack-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)' }}>◆ Deep Learning Models</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ Media Forensics</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.4)' }}>◆ Artifact Detection</span>
              </div>

            <div style={{ display: 'none', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 10px 0' }}>
               Developed an AI-powered digital media authenticity verification system using deep learning and computer vision to detect deepfakes, facial manipulation, and image artifacts, generating authenticity scores to support reliable media analysis and digital content verification.</p>
              
            </div>
          </div>







          
          {/* PROJECT 2: Personal Portfolio Website */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ padding: '20px 24px', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 className="proj-title" style={{ fontSize: '1.35rem', color: '#fff', margin: '0 0 4px 0' }}>PERSONAL PORTFOLIO WEBSITE</h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Custom React Application</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a 
                  href="https://github.com/aadyadixit17-code/Student-Portfolio" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-neon-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#38bdf8', border: '1px solid #38bdf8', textDecoration: 'none' }}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>

                <button 
                  onClick={(e) => {
                    const contentDiv = e.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling;
                    const isHidden = contentDiv.style.display === 'none';
                    contentDiv.style.display = isHidden ? 'block' : 'none';
                    e.currentTarget.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
                  }}
                  aria-label="Toggle Description"
                  style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid #a855f7', color: '#c084fc', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                >
                  ▼
                </button>
              </div>
            </div>

            <div className="proj-tech-stack-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ React Engine</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)' }}>◆ Hooks & Refs</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#ec4899', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.4)' }}>◆ CSS Keyframes</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.4)' }}>◆ Responsive Layout</span>
            </div>

            <div style={{ display: 'none', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 10px 0' }}>
                A custom React application optimized with fluid scroll-reveal animations, responsive layouts, and interactive UI component states. Features a multi-layered sparkling space theme designed for high-performance scannability.
              </p>
              <ul style={{ paddingLeft: '18px', margin: 0, color: '#94a3b8' }}>
                <li style={{ marginBottom: '6px' }}>Built with custom CSS keyframe animations and interactive component state handlers.</li>
                <li style={{ marginBottom: '6px' }}>Structured around modular components for quick maintenance and high scannability.</li>
                <li>Designed with fully responsive layouts supporting seamless cross-device viewports.</li>
              </ul>
            </div>
          </div>

          {/* PROJECT 3: Volunteer Registration  */}
          <div className="neon-card-panel scroll-reveal-target box-bounce" style={{ padding: '20px 24px', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 className="proj-title" style={{ fontSize: '1.35rem', color: '#fff', margin: '0 0 4px 0' }}>VOLUNTEER REGISTRATION SYSTEM</h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Community Management & Operations Portal</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a 
                  href="https://github.com/aadyadixit17-code/Volunteer-Registration-System" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-neon-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#38bdf8', border: '1px solid #38bdf8', textDecoration: 'none' }}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>

                <button 
                  onClick={(e) => {
                    const contentDiv = e.currentTarget.parentElement.parentElement.nextElementSibling.nextElementSibling;
                    const isHidden = contentDiv.style.display === 'none';
                    contentDiv.style.display = isHidden ? 'block' : 'none';
                    e.currentTarget.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
                  }}
                  aria-label="Toggle Description"
                  style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid #a855f7', color: '#c084fc', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                >
                  ▼
                </button>
              </div>
            </div>

            <div className="proj-tech-stack-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#a855f7', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.4)' }}>◆ Full Stack Architecture</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>◆ Form Validation</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '600', padding: '4px 10px', borderRadius: '20px', color: '#22c55e', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.4)' }}>◆ Database Management</span>
            </div>

            <div style={{ display: 'none', marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.6' }}>
              <p style={{ margin: '0 0 10px 0' }}>
                A structured management portal designed to streamline community operations. Features custom onboarding workflows, dynamic event role assignment, and robust data tracking sheets for scheduling, tracking, and allocating volunteer networks.
              </p>
              <ul style={{ paddingLeft: '18px', margin: 0, color: '#94a3b8' }}>
                <li style={{ marginBottom: '6px' }}>Implements custom onboarding workflows and dynamic event role allocations.</li>
                <li style={{ marginBottom: '6px' }}>Provides secure data tracking sheets for volunteer scheduling and resource allocation.</li>
                <li>Ensures robust client/server-side validation and efficient database management.</li>
              </ul>
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
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #38bdf8', background: 'rgba(0,0,0,0.5)', color: '#fff' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
              <label style={{ color: '#38bdf8', fontSize: '0.9rem' }}>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #38bdf8', background: 'rgba(0,0,0,0.5)', color: '#fff' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
              <label style={{ color: '#38bdf8', fontSize: '0.9rem' }}>Message</label>
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
                rows="4" 
                style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #38bdf8', background: 'rgba(0,0,0,0.5)', color: '#fff' }}
              ></textarea>
            </div>
            <button type="submit" className="btn-neon-primary">Send Message</button>
            {formStatus === 'SUCCESS' && <p style={{ color: '#22c55e' }}>Message sent successfully!</p>}
            {formStatus === 'ERROR' && <p style={{ color: '#ef4444' }}>Something went wrong. Please try again.</p>}
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