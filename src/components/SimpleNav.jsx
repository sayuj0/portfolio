function SimpleNav({ onHomeClick, onSkillsClick, onSectionClick, activeSection }) {
  const isActive = (id) => activeSection === id;

  return (
    <header className="simple-nav">
      <div className="simple-nav__inner">
        <a className="simple-nav__brand" href="/" onClick={onHomeClick}>
          Sayuj Shrestha
        </a>

        <nav className="simple-nav__links">
          <a
            href="/"
            onClick={onHomeClick}
            className={isActive("home") ? "is-active" : undefined}
            aria-current={isActive("home") ? "page" : undefined}
          >
            Home
          </a>
          <a
            href="/skills"
            onClick={onSkillsClick}
            className={isActive("skills") ? "is-active" : undefined}
            aria-current={isActive("skills") ? "page" : undefined}
          >
            Skills
          </a>
          <a
            href="/experience"
            onClick={onSectionClick("experience")}
            className={isActive("experience") ? "is-active" : undefined}
            aria-current={isActive("experience") ? "page" : undefined}
          >
            Experience
          </a>
          <a
            href="/projects"
            onClick={onSectionClick("projects")}
            className={isActive("projects") ? "is-active" : undefined}
            aria-current={isActive("projects") ? "page" : undefined}
          >
            Projects
          </a>
          <a
            href="/certifications"
            onClick={onSectionClick("certifications")}
            className={isActive("certifications") ? "is-active" : undefined}
            aria-current={isActive("certifications") ? "page" : undefined}
          >
            Certifications
          </a>
          <a
            href="/contact"
            onClick={onSectionClick("contact")}
            className={isActive("contact") ? "is-active" : undefined}
            aria-current={isActive("contact") ? "page" : undefined}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SimpleNav;
