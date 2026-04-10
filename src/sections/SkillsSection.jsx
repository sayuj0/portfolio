function SkillsSection({ skills }) {
  return (
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
            <div className="skillChips" aria-label="Frameworks and libraries">
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
            <div className="skillChips" aria-label="Other technical skills">
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
  );
}

export default SkillsSection;
