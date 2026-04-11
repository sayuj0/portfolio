import Particles from "../Particles";

function HeroSection({ onProjectsClick }) {
  return (
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
            Computer Science student and software engineer building full-stack
            applications, developer tools, and data-driven software systems.
          </p>

          <div className="hero__cta">
            <a
              className="hero__btn hero__btn--compact"
              href="/projects"
              onClick={onProjectsClick}
            >
              View My Work
              <svg className="hero__btnIcon" viewBox="0 0 24 24" aria-hidden="true">
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
              <svg className="hero__btnIcon" viewBox="0 0 24 24" aria-hidden="true">
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
  );
}

export default HeroSection;
