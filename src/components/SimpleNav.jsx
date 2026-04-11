function SimpleNav({ onHomeClick, onSkillsClick, onSectionClick }) {
  return (
    <header className="simple-nav">
      <div className="simple-nav__inner">
        <a className="simple-nav__brand" href="/" onClick={onHomeClick}>
          Sayuj Shrestha
        </a>

        <nav className="simple-nav__links">
          <a href="/" onClick={onHomeClick}>
            Home
          </a>
          <a href="/skills" onClick={onSkillsClick}>
            Skills
          </a>
          <a href="/experience" onClick={onSectionClick("experience")}>
            Experience
          </a>
          <a href="/projects" onClick={onSectionClick("projects")}>
            Projects
          </a>
          <a
            href="/certifications"
            onClick={onSectionClick("certifications")}
          >
            Certifications
          </a>
          <a href="/contact" onClick={onSectionClick("contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SimpleNav;
