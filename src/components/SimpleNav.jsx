import { useEffect, useState } from "react";

const MOBILE_NAV_BREAKPOINT = 780;

function SimpleNav({ onHomeClick, onSkillsClick, onSectionClick, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (id) => activeSection === id;
  const canHandleClick = (event) =>
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey;

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const wrapNavHandler = (handler) => (event) => {
    handler(event);
    if (canHandleClick(event)) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`simple-nav${isMenuOpen ? " is-menu-open" : ""}`}>
      <div className="simple-nav__inner">
        <a className="simple-nav__brand" href="/" onClick={onHomeClick}>
          Sayuj Shrestha
        </a>

        <button
          type="button"
          className="simple-nav__menuBtn"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <nav className="simple-nav__links">
          <a
            href="/"
            onClick={wrapNavHandler(onHomeClick)}
            className={isActive("home") ? "is-active" : undefined}
            aria-current={isActive("home") ? "page" : undefined}
          >
            Home
          </a>
          <a
            href="/skills"
            onClick={wrapNavHandler(onSkillsClick)}
            className={isActive("skills") ? "is-active" : undefined}
            aria-current={isActive("skills") ? "page" : undefined}
          >
            Skills
          </a>
          <a
            href="/experience"
            onClick={wrapNavHandler(onSectionClick("experience"))}
            className={isActive("experience") ? "is-active" : undefined}
            aria-current={isActive("experience") ? "page" : undefined}
          >
            Experience
          </a>
          <a
            href="/projects"
            onClick={wrapNavHandler(onSectionClick("projects"))}
            className={isActive("projects") ? "is-active" : undefined}
            aria-current={isActive("projects") ? "page" : undefined}
          >
            Projects
          </a>
          <a
            href="/certifications"
            onClick={wrapNavHandler(onSectionClick("certifications"))}
            className={isActive("certifications") ? "is-active" : undefined}
            aria-current={isActive("certifications") ? "page" : undefined}
          >
            Certifications
          </a>
          <a
            href="/contact"
            onClick={wrapNavHandler(onSectionClick("contact"))}
            className={isActive("contact") ? "is-active" : undefined}
            aria-current={isActive("contact") ? "page" : undefined}
          >
            Contact
          </a>
        </nav>
      </div>

      <button
        type="button"
        className="mobileNavBackdrop"
        onClick={() => setIsMenuOpen(false)}
        aria-label="Close menu overlay"
      />

      <aside
        id="mobile-nav-panel"
        className="mobileNavPanel"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobileNavPanel__header">
          <p className="mobileNavPanel__title">Sayuj Shrestha</p>
          <button
            type="button"
            className="mobileNavPanel__close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav className="mobileNavPanel__links">
          <a
            href="/"
            onClick={wrapNavHandler(onHomeClick)}
            className={isActive("home") ? "is-active" : undefined}
            aria-current={isActive("home") ? "page" : undefined}
          >
            Home
          </a>
          <a
            href="/skills"
            onClick={wrapNavHandler(onSkillsClick)}
            className={isActive("skills") ? "is-active" : undefined}
            aria-current={isActive("skills") ? "page" : undefined}
          >
            Skills
          </a>
          <a
            href="/experience"
            onClick={wrapNavHandler(onSectionClick("experience"))}
            className={isActive("experience") ? "is-active" : undefined}
            aria-current={isActive("experience") ? "page" : undefined}
          >
            Experience
          </a>
          <a
            href="/projects"
            onClick={wrapNavHandler(onSectionClick("projects"))}
            className={isActive("projects") ? "is-active" : undefined}
            aria-current={isActive("projects") ? "page" : undefined}
          >
            Projects
          </a>
          <a
            href="/certifications"
            onClick={wrapNavHandler(onSectionClick("certifications"))}
            className={isActive("certifications") ? "is-active" : undefined}
            aria-current={isActive("certifications") ? "page" : undefined}
          >
            Certifications
          </a>
          <a
            href="/contact"
            onClick={wrapNavHandler(onSectionClick("contact"))}
            className={isActive("contact") ? "is-active" : undefined}
            aria-current={isActive("contact") ? "page" : undefined}
          >
            Contact
          </a>
        </nav>
      </aside>
    </header>
  );
}

export default SimpleNav;
