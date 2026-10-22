
"use client";

import { useState } from "react";

const navigation = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Events", href: "#events" },
];

const projects = [
  {
    number: "01",
    title: "Routezen",
    category: "INTELLIGENT LOGISTICS",
    description:
      "A logistics recovery platform that connects shipment delays with business impact and helps teams explore safer recovery decisions.",
    technologies: ["React", "TypeScript", "APIs", "Data Analysis"],
    theme: "routezen",
  },
  {
    number: "02",
    title: "HireLens",
    category: "AI + RECRUITMENT",
    description:
      "An AI-assisted hiring platform exploring job-description matching, candidate insights, and smarter recruitment workflows.",
    technologies: ["Java", "Spring Boot", "Next.js", "Supabase"],
    theme: "hirelens",
  },
  {
    number: "03",
    title: "VeriChain Nexus",
    category: "BLOCKCHAIN + IDENTITY",
    description:
      "A project focused on digital identity and verifiable credentials, designed to make credential verification more trustworthy.",
    technologies: ["Blockchain", "Web Development", "Digital Identity"],
    theme: "verichain",
  },
  {
    number: "04",
    title: "AI Tower Analysis",
    category: "COMPUTER VISION",
    description:
      "A visual analysis project using object detection to explore how AI can identify and analyse structures from images.",
    technologies: ["Python", "YOLO", "LabelImg", "Computer Vision"],
    theme: "tower",
  },
];

const skillGroups = [
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "BACKEND",
    skills: ["Java", "Spring Boot", "REST APIs", "Python"],
  },
  {
    title: "DATA & AI",
    skills: ["Supabase", "PostgreSQL", "pgvector", "Ollama", "YOLO"],
  },
  {
    title: "BUILD & COLLABORATE",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Team Development",
      "Problem Solving",
    ],
  },
];

export default function Home() {
  const [isNight, setIsNight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  function goToAbout() {
    document.getElementById("about")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <main
      className={[
        "site-shell",
        isNight ? "theme-night" : "",
        reducedMotion ? "reduce-motion" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* HERO */}
      <section className="hero" id="top">
        <div className="sky-grain" aria-hidden="true" />
        <div className="sun" aria-hidden="true" />

        <div className="cloud cloud-top" aria-hidden="true" />
        <div className="cloud cloud-right" aria-hidden="true" />
        <div className="cloud cloud-left" aria-hidden="true" />
        <div className="cloud cloud-middle" aria-hidden="true" />

        <header className="topbar">
          <a className="location-link" href="#top">
            <span className="location-pin" aria-hidden="true">
              ⌖
            </span>
            <span>BENGALURU, INDIA</span>
          </a>

          <nav
            className={`nav-pill ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            <a
              href="#top"
              className="brand-mark"
              aria-label="Dilip home"
              onClick={() => setMenuOpen(false)}
            >
              D.
            </a>

            <div className="nav-links">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              <span aria-hidden="true">✉</span>
              Contact
            </a>
          </nav>

          <div className="header-actions">
            <button
              className="round-action motion-toggle"
              type="button"
              title="Toggle reduced motion"
              aria-label="Toggle reduced motion"
              aria-pressed={reducedMotion}
              onClick={() => setReducedMotion((current) => !current)}
            >
              {reducedMotion ? "▶" : "−"}
            </button>

            <button
              className="round-action theme-toggle"
              type="button"
              title="Toggle day and night theme"
              aria-label="Toggle day and night theme"
              aria-pressed={isNight}
              onClick={() => setIsNight((current) => !current)}
            >
              {isNight ? "☾" : "☼"}
            </button>

            <button
              className="mobile-menu-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </header>

        <div className="hero-inner">
          <div className="vertical-motto" aria-hidden="true">
            IMAGINE · INNOVATE · BUILD
          </div>

          <p className="hero-eyebrow">
            <span className="yellow-dot" aria-hidden="true" />
            HELLO, I&apos;M DILIP — I BUILD THINGS FOR THE WEB
          </p>

          <div className="title-stage">
            <h1 className="hero-title">
              <span className="title-first">Builders who</span>
              <span className="title-second">Ship</span>
            </h1>

            <div className="cassette">
              <div
                className="cassette-speaker speaker-left"
                aria-hidden="true"
              >
                <div className="speaker-ring">
                  <div className="speaker-center" />
                </div>
              </div>

              <div className="cassette-controls">
                <p className="cassette-label">A little about me — 2:00</p>

                <div className="cassette-track">
                  <span />
                </div>

                <div className="cassette-time">
                  <span>00:00</span>
                  <span>02:00</span>
                </div>

                <button
                  className="cassette-play"
                  type="button"
                  aria-label="Read my story"
                  onClick={goToAbout}
                >
                  ▶
                </button>
              </div>

              <div
                className="cassette-speaker speaker-right"
                aria-hidden="true"
              >
                <div className="speaker-ring">
                  <div className="speaker-center" />
                </div>
              </div>
            </div>
          </div>

          <p className="hero-description">
            Curious mind. Creative developer.
            <br />
            Always building something new.
          </p>

          <a className="hero-cta" href="#projects">
            EXPLORE MY WORK <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div
          className="bottom-cloud bottom-cloud-one"
          aria-hidden="true"
        />
        <div
          className="bottom-cloud bottom-cloud-two"
          aria-hidden="true"
        />
        <div
          className="bottom-cloud bottom-cloud-three"
          aria-hidden="true"
        />

        <a
          href="#about"
          className="scroll-cue"
          aria-label="Scroll to about section"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-shell">
          <p className="section-kicker">01 / A LITTLE ABOUT ME</p>

          <div className="about-grid">
            <h2 className="section-heading">
              Curious by nature.
              <br />
              <em>Builder by habit.</em>
            </h2>

            <div className="about-copy">
              <p>
                I&apos;m Dilip, a developer who enjoys turning ideas into
                useful digital experiences. I like exploring the space
                between software engineering, AI, and thoughtful design.
              </p>

              <p>
                From developing full-stack applications to solving real-world
                problems at hackathons, I learn best by building, testing,
                collaborating, and improving.
              </p>

              <a className="text-link" href="#contact">
                LET&apos;S BUILD SOMETHING <span>↗</span>
              </a>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat">
              <span className="stat-number">04+</span>
              <span className="stat-label">PROJECTS & EXPERIMENTS</span>
            </div>

            <div className="stat">
              <span className="stat-number">01</span>
              <span className="stat-label">BUILD AT A TIME</span>
            </div>

            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">THINGS LEFT TO LEARN</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-shell">
          <div className="section-topline">
            <p className="section-kicker">02 / SELECTED WORK</p>
            <span className="section-side-note">
              IDEAS INTO INTERFACES INTO IMPACT
            </span>
          </div>

          <div className="section-title-row">
            <h2 className="section-heading">
              Things I&apos;ve
              <br />
              <em>been building.</em>
            </h2>

            <p className="section-intro">
              A collection of experiments, real-world problem solving, and
              ideas that became projects.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art art-${project.theme}`}>
                  <span className="project-number">{project.number}</span>

                  <span
                    className="art-decoration art-decoration-one"
                    aria-hidden="true"
                  />
                  <span
                    className="art-decoration art-decoration-two"
                    aria-hidden="true"
                  />

                  <span className="art-word" aria-hidden="true">
                    {project.title === "Routezen"
                      ? "R."
                      : project.title === "HireLens"
                        ? "H/"
                        : project.title === "VeriChain Nexus"
                          ? "V↗"
                          : "AI"}
                  </span>

                  <span className="art-caption">{project.category}</span>
                </div>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a className="project-link" href="#contact">
                    ASK ME ABOUT THIS <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-shell">
          <p className="section-kicker">03 / MY TOOLKIT</p>

          <div className="section-title-row">
            <h2 className="section-heading">
              Tools for the
              <br />
              <em>next big thing.</em>
            </h2>

            <p className="section-intro">
              Technologies I work with, explore, and use to turn ideas into
              functioning software.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section journey-section" id="journey">
        <div className="section-shell">
          <p className="section-kicker">04 / THE JOURNEY</p>

          <div className="section-title-row">
            <h2 className="section-heading">
              Still learning.
              <br />
              <em>Always shipping.</em>
            </h2>

            <p className="section-intro">
              Every project adds a new tool, a new perspective, or a better
              question to ask.
            </p>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-period">THE FOUNDATION</p>

              <div>
                <h3>Learning by building</h3>
                <p>
                  Growing my skills in programming, web development,
                  databases, and the fundamentals behind reliable software.
                </p>
              </div>

              <span className="timeline-number">01</span>
            </article>

            <article className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-period">COLLABORATION</p>

              <div>
                <h3>Building with teams</h3>
                <p>
                  Working on shared projects, dividing responsibilities,
                  using Git, and learning to bring frontend and backend work
                  together.
                </p>
              </div>

              <span className="timeline-number">02</span>
            </article>

            <article className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <p className="timeline-period">WHAT&apos;S NEXT</p>

              <div>
                <h3>Turning experiments into products</h3>
                <p>
                  Exploring AI-enabled applications and building software
                  that addresses practical problems instead of stopping at
                  a demo.
                </p>
              </div>

              <span className="timeline-number">03</span>
            </article>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section achievements-section" id="achievements">
        <div className="section-shell">
          <p className="section-kicker">05 / PROUD MOMENTS</p>

          <h2 className="section-heading">
            Progress worth
            <br />
            <em>celebrating.</em>
          </h2>

          <div className="achievement-list">
            <article className="achievement-item">
              <span className="achievement-symbol" aria-hidden="true">
                ✳
              </span>

              <div>
                <p className="project-category">HACKATHON</p>
                <h3>Second place at KSIT Elector Hack</h3>
                <p>
                  A team achievement that strengthened my interest in
                  building under pressure and solving problems collaboratively.
                </p>
              </div>

              <span className="achievement-arrow" aria-hidden="true">
                ↗
              </span>
            </article>

            <article className="achievement-item">
              <span className="achievement-symbol" aria-hidden="true">
                ⌘
              </span>

              <div>
                <p className="project-category">PROJECT DEVELOPMENT</p>
                <h3>From ideas to working prototypes</h3>
                <p>
                  Exploring full-stack engineering, computer vision,
                  digital credentials, and intelligent logistics through
                  hands-on projects.
                </p>
              </div>

              <span className="achievement-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section events-section" id="events">
        <div className="section-shell events-content">
          <p className="section-kicker">06 / BEYOND THE EDITOR</p>

          <div className="events-heading-row">
            <h2 className="section-heading">
              Better ideas
              <br />
              <em>happen together.</em>
            </h2>

            <span className="events-stamp" aria-hidden="true">
              BUILD
              <br />
              SHARE
              <br />
              REPEAT
            </span>
          </div>

          <p className="events-description">
            Hackathons, technical communities, collaborative builds,
            brainstorming sessions, and the occasional debugging marathon.
            I enjoy the process of learning with people who like making
            things happen.
          </p>

          <a className="text-link" href="#contact">
            COLLABORATE WITH ME <span>↗</span>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-shell">
          <p className="section-kicker">07 / YOUR MOVE</p>

          <p className="contact-overline">HAVE A GOOD IDEA?</p>

          <h2>
            Let&apos;s make
            <br />
            <em>it happen.</em>
          </h2>

          <p className="contact-description">
            Have a project in mind, an interesting problem, or an opportunity
            to build something together? Let&apos;s talk.
          </p>

          <a
            className="contact-button"
            href="mailto:divya135907@gmail.com?subject=Let%27s%20build%20something"
          >
            <span>GET IN TOUCH</span>
            <span aria-hidden="true">↗</span>
          </a>

          <div className="social-row">
            <a
              href="https://github.com/Dilip-66"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>

        <footer className="site-footer">
          <span>DESIGNED WITH CURIOSITY.</span>
          <span>BUILT BY DILIP © 2026</span>
        </footer>
      </section>
    </main>
  );
}
