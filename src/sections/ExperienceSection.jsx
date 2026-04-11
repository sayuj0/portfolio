import { useEffect, useRef } from "react";

function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      dates: "Jun 2026 – Present",
      organization: "Lockheed Martin Space",
      location: "Highlands Ranch, CO",
      bullets: [
        "Contributed to...",
        "Collaborated with...",
        "Applied...",
        "Maintained...",
      ],
    },
    {
      role: "Research Software Developer",
      dates: "Jan 2026 – Mar 2026",
      organization: "Saint Xavier University",
      location: "Remote",
      bullets: [
        "Built a PsychoPy-based Snake behavioral task to measure persistence with timed multi-stage gameplay",
        "Implemented counterbalanced versions (A–F) and Neutral vs. Positive conditions, including encouragement prompts after collisions",
        "Integrated Lab Streaming Layer markers via pylsl for keypress, reward, collision, and stage lifecycle events to synchronize gameplay events with EEG, ECG, and GSR recordings",
        "Automated CSV logging of participant/session metadata and behavioral performance metrics for analysis across 50+ research participants",
      ],
    },
    {
      role: "Learning Assistant - Computer Science",
      dates: "August 2025 – Present",
      organization: "Metropolitan State University of Denver",
      location: "Denver, CO",
      bullets: [
        "Led technical workshops for 200+ students on Git, CLI, unit testing, automation, and Docker to help students apply industry-relevant tools through hands-on programming.",
        "Assist 60+ students in a programming course covering Java, OOP, data structures, recursion, and algorithm design",
        "Guide students in debugging code, clarifying concepts, and reinforcing best practices for code organization, documentation, version control, and testing",
      ],
    },
  ];

  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const timelineEl = timelineRef.current;
    if (!sectionEl || !timelineEl) return;

    let rafId = 0;

    const update = () => {
      rafId = 0;

      const rect = sectionEl.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      const startPoint = viewportH * 0.2;
      const endPoint = viewportH * 0.8;
      const scrollable = rect.height - (endPoint - startPoint);
      const rawProgress = scrollable <= 0 ? 1 : (startPoint - rect.top) / scrollable;
      const progress = Math.max(0, Math.min(1, rawProgress));

      timelineEl.style.setProperty("--experience-progress", progress.toFixed(4));
    };

    const scheduleUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <section id="experience" className="contentSection experienceSection">
      <div className="contentSection__inner experienceSection__inner" ref={sectionRef}>
        <div className="experienceTimeline" ref={timelineRef} aria-hidden="true">
          <div className="experienceTimeline__line">
            <div className="experienceTimeline__fill" />
            <div className="experienceTimeline__dot" />
          </div>
        </div>

        <div className="experienceSection__content">
          <h2 className="contentSection__title">Work Experience</h2>
          <div className="experienceList" role="list">
            {experiences.map((experience) => (
              <article
                className="experienceCard"
                role="listitem"
                key={`${experience.role}-${experience.organization}-${experience.dates}`}
              >
                <header className="experienceCard__header">
                  <div className="experienceCard__row">
                    <h3 className="experienceCard__role">{experience.role}</h3>
                    <div className="experienceCard__meta" aria-label="Role dates and location">
                      <span className="skillChip experienceBadge">{experience.dates}</span>
                    </div>
                  </div>
                  <div className="experienceCard__row experienceCard__row--muted">
                    <p className="experienceCard__org">{experience.organization}</p>
                    <div className="experienceCard__meta" aria-label="Location">
                      <span className="skillChip experienceBadge">{experience.location}</span>
                    </div>
                  </div>
                </header>

                <ul className="experienceCard__bullets">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
