function Footer({ onSectionClick }) {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="siteFooter__inner">
        <section className="siteFooter__about">
          <h2 className="siteFooter__heading">Sayuj Shrestha</h2>
          <p className="siteFooter__text">
            Software Engineer building full-stack applications, developer tools,
            and data-driven systems.
          </p>
        </section>

        <section className="siteFooter__linksCol">
          <h3 className="siteFooter__label">Quick Links</h3>
          <nav className="siteFooter__links" aria-label="Footer links">
            <a href="/skills" onClick={onSectionClick("skills")}>Skills</a>
            <a href="/experience" onClick={onSectionClick("experience")}>Experience</a>
            <a href="/projects" onClick={onSectionClick("projects")}>Projects</a>
            <a href="/resume/resume.pdf" target="_blank" rel="noreferrer">
              <span>Resume</span>
              <svg className="siteFooter__externalIcon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M15 3h6v6m0-6L10 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>
        </section>

        <section className="siteFooter__connect">
          <h3 className="siteFooter__label">Connect</h3>
          <div className="siteFooter__social">
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
        </section>
      </div>

      <div className="siteFooter__bottom">
        <p>&copy; {year} Sayuj Shrestha. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
