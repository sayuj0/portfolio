import Particles from "./Particles";

function App() {
  const handleHomeClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (sectionId) => (event) => {
    event.preventDefault();

    const nav = document.querySelector(".simple-nav");
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    const heading = document.querySelector(`#${sectionId} h2`);
    const target = heading || document.getElementById(sectionId);
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    window.history.pushState({}, "", `#${sectionId}`);
    window.scrollTo({ top: Math.max(0, targetTop - navHeight - 16), behavior: "smooth" });
  };

  const handleSkillsClick = (event) => {
    event.preventDefault();

    const target = document.getElementById("skills");
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const hero = document.querySelector(".hero");
    const nav = document.querySelector(".simple-nav");

    let heroBottom = targetTop;
    if (hero) {
      const heroTop = hero.getBoundingClientRect().top + window.scrollY;
      heroBottom = heroTop + hero.getBoundingClientRect().height;
    }

    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    window.history.pushState({}, "", "#skills");
    window.scrollTo({
      top: Math.max(targetTop - navHeight - 16, heroBottom - 50),
      behavior: "smooth",
    });
  };

  const skills = {
    languages: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "XML",
    ],
    frameworksAndLibraries: ["Flask", "React", "SQLAlchemy"],
    tools: ["Docker", "Selenium", "Pytest", "Git", "GitHub"],
    other: [
      "REST APIs",
      "Automation",
      "Linux/Windows CLI",
      "Web Scraping",
      "Regex",
      "Raspberry Pi",
      "Agile",
    ],
  };

  return (
    <div className="appShell">
      <header className="simple-nav">
        <div className="simple-nav__inner">
          <a className="simple-nav__brand" href="/" onClick={handleHomeClick}>
            Sayuj Shrestha
          </a>

          <nav className="simple-nav__links">
            <a href="/" onClick={handleHomeClick}>
              Home
            </a>
            <a href="#skills" onClick={handleSkillsClick}>
              Skills
            </a>
            <a href="#experience" onClick={handleSectionClick("experience")}>
              Experience
            </a>
            <a href="#projects" onClick={handleSectionClick("projects")}>
              Projects
            </a>
            <a
              href="#certifications"
              onClick={handleSectionClick("certifications")}
            >
              Certifications
            </a>
            <a href="#contact" onClick={handleSectionClick("contact")}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <aside className="sideSocial" aria-label="Social links (right)">
        <div
          className="sideSocial__line sideSocial__line--top"
          aria-hidden="true"
        />
        <a
          className="hero__iconBtn"
          href="https://github.com/sayuj0"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2c-5.52 0-10 4.6-10 10.26 0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.39-3.37-1.39-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.12 10.12 0 0 0 22 12.26C22 6.6 17.52 2 12 2z" />
          </svg>
        </a>

        <a
          className="hero__iconBtn"
          href="https://www.linkedin.com/in/sayujs/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.98 3.5C3.88 3.5 3 4.4 3 5.5S3.88 7.5 4.98 7.5c1.09 0 1.98-.9 1.98-2s-.89-2-1.98-2zM3.5 21h3V9h-3v12zM9.5 9h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56C18.5 9.08 20 10.7 20 14.06V21h-3v-6.15c0-1.47-.03-3.35-2.04-3.35-2.04 0-2.35 1.6-2.35 3.25V21h-3V9z" />
          </svg>
        </a>

        <a
          className="hero__iconBtn"
          href="mailto:sayuj21@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
          title="Email"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
          </svg>
        </a>

        <div className="sideSocial__line" aria-hidden="true" />
      </aside>

      <main>
        <section className="hero">
          <div className="hero__bg" aria-hidden="true">
            <Particles />
          </div>

          <div className="hero__inner">
            <div className="hero__left">
              <h1 className="hero__title">Hi, I'm Sayuj Shrestha</h1>
              <div className="hero__subtitleWrap">
                <p className="hero__subtitle">Software Engineer</p>
                <div className="loader" />
              </div>
              <p className="hero__summary">
                Computer Science student and software engineer building
                full-stack applications, developer tools, and data-driven
                software systems.
              </p>

              <div className="hero__cta">
                <a className="hero__btn hero__btn--compact" href="#projects">
                  View My Work
                  <svg
                    className="hero__btnIcon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h12m0 0-5-5m5 5-5 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="hero__btn hero__btn--compact"
                  href="/resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="hero__btnIcon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v10m0 0 4-4m-4 4-4-4M5 21h14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Resume
                </a>
              </div>

              <div className="hero__social" aria-label="Social links">
                <a
                  className="hero__iconBtn"
                  href="https://github.com/sayuj0"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2c-5.52 0-10 4.6-10 10.26 0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.39-3.37-1.39-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.12 10.12 0 0 0 22 12.26C22 6.6 17.52 2 12 2z" />
                  </svg>
                </a>

                <a
                  className="hero__iconBtn"
                  href="https://www.linkedin.com/in/sayujs/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.98 3.5C3.88 3.5 3 4.4 3 5.5S3.88 7.5 4.98 7.5c1.09 0 1.98-.9 1.98-2s-.89-2-1.98-2zM3.5 21h3V9h-3v12zM9.5 9h2.88v1.64h.04c.4-.76 1.38-1.56 2.84-1.56C18.5 9.08 20 10.7 20 14.06V21h-3v-6.15c0-1.47-.03-3.35-2.04-3.35-2.04 0-2.35 1.6-2.35 3.25V21h-3V9z" />
                  </svg>
                </a>

                <a
                  className="hero__iconBtn"
                  href="mailto:sayuj21@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hero__right">
              <div className="spinner">
                <div className="spinner__inner">
                  <img
                    className="hero__photo"
                    src="/images/profile.jpeg"
                    alt="Portrait of Sayuj Shrestha"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="aboutSection">
          <div className="aboutSection__inner">
            <h2 className="aboutSection__title">Technical Skills</h2>

            <div className="skillsGrid" role="list">
              <div className="skillCard" role="listitem">
                <div className="skillCard__titleRow">
                  <span className="skillCard__titleIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M8 9 5 12l3 3m8-6 3 3-3 3M14 7l-4 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="skillCard__title">Languages</h3>
                </div>
                <div className="skillChips" aria-label="Languages">
                  {skills.languages.map((item) => (
                    <span className="skillChip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skillCard" role="listitem">
                <div className="skillCard__titleRow">
                  <span className="skillCard__titleIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 3 3 8l9 5 9-5-9-5z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 12l9 5 9-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 16l9 5 9-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="skillCard__title">Frameworks & Libraries</h3>
                </div>
                <div
                  className="skillChips"
                  aria-label="Frameworks and libraries"
                >
                  {skills.frameworksAndLibraries.map((item) => (
                    <span className="skillChip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skillCard" role="listitem">
                <div className="skillCard__titleRow">
                  <span className="skillCard__titleIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M22.7 19 13.6 9.9c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.7-1.3l4.1 4.1-3 3L1.4 4.6C.3 6.9.7 9.9 2.7 11.9c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.6-2.6c.4-.4.4-1 0-1.4z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <h3 className="skillCard__title">Tools</h3>
                </div>
                <div className="skillChips" aria-label="Tools">
                  {skills.tools.map((item) => (
                    <span className="skillChip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skillCard" role="listitem">
                <div className="skillCard__titleRow">
                  <span className="skillCard__titleIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 3 4.5 7.5V16.5L12 21l7.5-4.5V7.5L12 3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 21v-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19.5 7.5 12 12 4.5 7.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="skillCard__title">Other</h3>
                </div>
                <div
                  className="skillChips"
                  aria-label="Other technical skills"
                >
                  {skills.other.map((item) => (
                    <span className="skillChip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="contentSection">
          <div className="contentSection__inner">
            <h2 className="contentSection__title">Experience</h2>
            <p className="contentSection__text">
              Add your roles, internships, and impact here.
            </p>
          </div>
        </section>

        <section id="projects" className="contentSection">
          <div className="contentSection__inner">
            <h2 className="contentSection__title">Projects</h2>
            <p className="contentSection__text">
              Add your best projects here.
            </p>
          </div>
        </section>

        <section id="certifications" className="contentSection">
          <div className="contentSection__inner">
            <h2 className="contentSection__title">Certifications</h2>
            <p className="contentSection__text">
              Add your certifications here.
            </p>
          </div>
        </section>

        <section id="contact" className="contentSection">
          <div className="contentSection__inner">
            <h2 className="contentSection__title">Contact</h2>
            <p className="contentSection__text">
              Add your email and links here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
