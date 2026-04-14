import React from 'react'

export default function OnlinePortfolio() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Profile", href: "#profile" },
    { label: "Resume", href: "#resume" },
    { label: "Work Samples", href: "#work-samples" },
    { label: "Development & Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "Event Ticketing Web Application",
      subtitle: "Full-Stack Web Application",
      description: [
        "This project involved developing a full-stack event ticketing platform using ASP.NET Core and SQL-based data storage. The system allows users to browse events, purchase tickets, and manage event information through a structured web interface.",
        "The application includes role-based authentication using ASP.NET Core Identity to support attendees, organizers, and administrators. Additional functionality includes AJAX-powered search and filtering, QR code ticket generation, and an organizer analytics dashboard built with Chart.js.",
        "The platform was deployed to Microsoft Azure using a GitHub Actions CI/CD workflow. Reliability and maintainability were supported through xUnit unit tests and structured application logging using Serilog.",
      ],
      tech: ["ASP.NET Core", "C#", "JavaScript", "SQL", "Chart.js", "Azure", "GitHub Actions"],
      github: "https://github.com/Ceedaw/Event-Ticketing-Web-Application",
    },
    {
      title: "Human Resource Management & Payroll System",
      subtitle: "Java Desktop Application",
      description: [
        "This project involved building a desktop human resource management application using Java and object-oriented programming principles. The system manages employee records across departments and supports creating, updating, and reviewing employee information through a graphical user interface.",
        "A payroll processing component was implemented to calculate salaries, taxes, overtime, and bonus compensation. Employee data was stored using Java serialization to allow persistent storage and report generation.",
        "The application also incorporated access controls and dashboard-style summaries to provide management insight into payroll and staffing information.",
      ],
      tech: ["Java", "Object-Oriented Programming", "Serialization"],
      github: "https://github.com/Ceedaw/Human-Resource-Management-Payroll-System",
    },
    {
      title: "ABC Clinic Clinical Management System",
      subtitle: "System Analysis and Design Project",
      description: [
        "This project involved the analysis and design of a clinical management system intended to support high patient volume in a walk-in clinic environment. The work followed structured software development lifecycle practices and included requirements analysis, system modeling, and feasibility evaluation.",
        "Project contributions included creating UML use case and class diagrams, BPMN workflow models, and context and Level-0 data flow diagrams. A normalized relational data model was also designed to support the clinic’s operational data.",
        "Additional deliverables included UI wireframes and documentation outlining system workflows, database structure, and testing strategy.",
      ],
      tech: ["UML", "BPMN", "Database Design", "System Analysis"],
      github: "https://github.com/Ceedaw",
    },
    {
      title: "PHP Voting Application",
      subtitle: "Database-Driven Web Application",
      description: [
        "This project involved developing a multi-user voting platform using PHP with object-oriented design and MySQL database integration. The application allows authenticated users to create topics, participate in voting, and track results.",
        "Database interactions were implemented using PDO for secure query execution and dependency injection patterns. The system includes safeguards to prevent duplicate voting and maintain data consistency.",
        "The application was deployed to a live web server and supported by PHPUnit tests to validate class functionality and database interactions.",
      ],
      tech: ["PHP", "MySQL", "PDO"],
      github: "https://github.com/Ceedaw",
    },
  ];

  const skills = {
    Languages: ["C#", "Java", "JavaScript", "Python", "SQL"],
    Frameworks: ["ASP.NET Core MVC", "Entity Framework Core", "Flask"],
    Tools: ["Git", "GitHub", "Linux", "VS Code", "JetBrains Rider"],
  };

  const coursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Web Application Development",
    "Full Stack Development",
    "Database Management",
    "Agile Software Development",
    "Software Quality Assurance",
    "Linux Essentials",
    "System Analysis & Design",
  ];

  const developmentItems = [
    "ASP.NET Core web development",
    "Java application development",
    "Relational database design",
    "SQL query development",
    "Version control using Git and GitHub",
    "Agile development practices",
  ];

  return (
    <div className="site-shell">
      <div className="background-glow background-glow-left" />
      <div className="background-glow background-glow-right" />

      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand-block">
            <div className="brand-name">Ceejay Dawe</div>
            <div className="brand-subtitle">Software Developer | Computer Programming Graduate</div>
          </a>

          <nav className="top-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="container main-content">
        <section id="home" className="panel hero-panel">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Home</div>
              <h1 className="hero-title">
                Designing and building practical full-stack software solutions.
              </h1>
              <p className="hero-copy">
                I am a graduate of the Computer Programming program at George Brown College with 
                experience designing and building software applications through hands-on development 
                projects. My work has focused on full-stack web development, 
                Java application development, and database-driven systems.
              </p>
              <p className="hero-copy hero-copy-muted">
                Through my projects I gained experience working with technologies such as ASP.NET Core,
                JavaScript, SQL databases, and Git. I enjoy building structured software solutions and
                developing applications that are reliable, maintainable, and designed with clear system
                architecture.
              </p>

              <div className="button-row">
                <a href="#work-samples" className="button button-primary">
                  View Work Samples
                </a>
                <a href="#resume" className="button button-secondary">
                  View Resume
                </a>
                <a
                  href="https://github.com/Ceedaw"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="hero-side-grid">
              <div className="mini-card">
                <div className="mini-label">Focus</div>
                <h2>Full-Stack Development</h2>
                <p>
                  Experience building web applications, Java-based software, and database-driven 
                  systems through hands-on development projects.
                </p>
              </div>
              <div className="mini-card">
                <div className="mini-label">Primary Stack</div>
                <div className="tag-row">
                  {["ASP.NET Core", "C#", "JavaScript", "SQL", "Git"].map((item) => (
                    <span key={item} className="tag tag-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="panel">
          <div className="eyebrow">Profile</div>
          <h2 className="section-title">Profile</h2>
          <div className="two-column-layout">
            <div className="body-copy stack-gap">
              <p>
                My path into software development started with a lifelong interest in video games. 
                What began as a hobby, eventually sparked a curiosity about how games are actually built.
                 This led me to explore coding in high school and later pursue it formally at 
                 George Brown College. That original curiosity has since grown into a genuine 
                 passion for software development as a craft.
              </p>
              <p>
                Through my academic projects, I developed a strong appreciation for the full development 
                lifecycle — from designing database schemas and building out back-end logic, to 
                crafting front-end experiences that tie everything together. I enjoy working across 
                the stack because it gives me a complete picture of how a system fits together, 
                and helps me make better decisions at every layer.
              </p>
              <p>
                I tend to approach my work with care and attention to detail, and I find that I 
                produce my best results in collaborative environments, where ideas can be discussed 
                and refined as a team. My goal is to keep growing as a developer, who can take an 
                ambiguous brief and deliver something well-structured, thoroughly tested, 
                and built to last.
              </p>
            </div>

            <aside className="mini-card profile-card">
              <div className="mini-label">Professional Snapshot</div>
              <ul className="clean-list">
                <li>Graduate of Computer Programming</li>
                <li>Experience developing web, desktop, and database-driven applications</li>
                <li>Strong foundation in structured software development practices</li>
                <li>Comfortable working with modern development tools and Git-based workflows</li>
              </ul>
            </aside>
          </div>

          <div className="card-grid three-up top-space">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="content-card">
                <h3>{category}</h3>
                <div className="tag-row">
                  {items.map((item) => (
                    <span key={item} className="tag tag-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="panel">
          <div className="section-header">
            <div>
              <div className="eyebrow">Resume</div>
              <h2 className="section-title">Resume</h2>
            </div>
            <a href="/resume.pdf" className="button button-primary" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>

          <p className="body-copy top-space-sm">
            <p>
            A PDF version of my resume is available through the download button above which
            includes an overview of my technical skills, development projects, and professional
            experience.
            </p>
            
          </p>

          <div className="resume-box top-space">
            <p>A PDF version of my resume is available through the download button above.</p>
          </div>
        </section>

        <section id="work-samples" className="panel">
          <div className="eyebrow">Work Samples</div>
          <h2 className="section-title">Work Samples</h2>
          <p className="body-copy top-space-sm">
            The following projects were completed during my Computer Programming program and demonstrate
            experience in full-stack development, application design, and system analysis. Each project
            required applying programming concepts, database design, and development tools to build functional
            software systems.
          </p>

          <div className="stack-list top-space">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-header">
                  <div>
                    <div className="eyebrow small-eyebrow">{project.subtitle}</div>
                    <h3>{project.title}</h3>
                  </div>
                  <a href={project.github} target="_blank" rel="noreferrer" className="button button-secondary">
                    View Source Code
                  </a>
                </div>

                <div className="body-copy stack-gap top-space-sm">
                  {project.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="tag-row top-space-sm">
                  {project.tech.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="panel">
          <div className="eyebrow">Development & Achievements</div>
          <h2 className="section-title">Development & Achievements</h2>
          <p className="body-copy top-space-sm">
            Completing the Computer Programming program provided opportunities to work on a range of
            development projects, while strengthening technical knowledge in programming, system design, and
            database development.
          </p>

          <div className="card-grid two-up top-space">
            <div className="content-card">
              <h3>Education</h3>
              <p className="top-space-sm"><strong>George Brown College</strong></p>
              <p>Computer Programming Diploma</p>
              <p>Completed April 2026</p>

              <p className="top-space-sm"><strong>Dean’s List — George Brown College</strong></p>
              <p>Recognized for academic excellence during the Computer Programming program.</p>

              <p className="top-space-sm"><strong>Pre-Service Firefighter Certificate — Seneca College</strong></p>
              <p>Completed pre-service firefighter training focused on emergency response and fire safety.</p>
            </div>

            <div className="content-card">
              <h3>Technical Development</h3>
              <ul className="clean-list top-space-sm">
                {developmentItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="content-card top-space">
            <h3>Relevant Coursework</h3>
            <div className="tag-row top-space-sm">
              {coursework.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="panel">
          <div className="eyebrow">Contact</div>
          <h2 className="section-title">Contact</h2>
          <p className="body-copy top-space-sm">
            For additional information about my projects or development experience, feel free to reach out or
            visit my GitHub profile.
          </p>

          <div className="card-grid two-up top-space">
            <div className="content-card">
              <div className="mini-label">Email</div>
              <p className="contact-value">ceejay.j.dawe@gmail.com</p>
            </div>
            <div className="content-card">
              <div className="mini-label">GitHub</div>
              <p className="contact-value">github.com/Ceedaw</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
