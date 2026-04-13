import { useEffect, useMemo, useState } from "react";

const featuredProjects = [
  {
    title: "Project One",
    description:
      "A short, high-impact summary of what this project does and why it matters.",
    tags: ["React", "Vite", "CSS"],
    techStack: ["React", "Vite", "CSS"],
    about:
      "A short paragraph describing the problem, your approach, and what you built.",
    cardHighlights: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    achievements: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    imageSrc: "",
    imageAlt: "",
    detailsUrl: "",
    githubUrl: "https://github.com/sayuj0?tab=repositories",
    liveDemoUrl: "",
  },
  {
    title: "MajorLink",
    description:
      "A platform for students to find major-related jobs and track applications, with admin tools to manage postings and application progress.",
    tags: ["Python", "Flask", "SQLAlchemy", "Docker", "+7"],
    techStack: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "Docker",
      "PostgreSQL",
      "SQLite",
      "HTML",
      "CSS",
      "Jinja2",
      "Selenium",
      "Gunicorn",
    ],
    about:
      "Applying to jobs can be frustrating, especially when students miss relevant opportunities because they are not searching the exact title, even though they are qualified through their major. MajorLink solves this by letting students set their major and discover job postings connected directly to their field of study. The platform helps students find and apply to relevant jobs while giving administrators tools to manage majors, postings, and application activity. Students can create accounts, update their major, browse and search major-linked opportunities, submit applications, and track status updates throughout the process. Administrators can manage majors and job postings, review applications, and update statuses and notes to support the full workflow from posting to decision. The platform was built with Flask, Jinja2, Flask-Login, and SQLAlchemy, using SQLite for local development and PostgreSQL through Docker Compose for production-style deployment.",
    cardHighlights: [
      "Built a major-based job posting and application platform with separate Admin and Student experiences",
      "Developed 22 Flask routes across 19 UI pages to support the full application workflow",
    ],
    achievements: [
      "Built a major-based job posting and application platform with 2 role-specific experiences, Admin and Student, across 22 Flask routes and 19 UI pages",
      "Developed end-to-end workflows for admins to manage majors and major-linked job postings, and for students to create accounts, browse jobs, submit applications, and track application status",
      "Implemented persistent data storage with Flask-SQLAlchemy, using SQLite for local development and PostgreSQL with Docker Compose for production-like deployment",
      "Containerized the application with Docker and validated core user workflows through Selenium-based black-box end-to-end testing",
    ],
    imageSrc: "/images/unicareers.png",
    imageAlt: "Project Two screenshot",
    detailsUrl: "",
    githubUrl: "https://github.com/sayuj0/MajorLink",
    liveDemoUrl: "",
  },
  {
    title: "Wandering",
    description:
      "A short, high-impact summary of what this project does and why it matters.",
    tags: ["Python", "Data", "Automation"],
    techStack: ["Python", "Data", "Automation"],
    about:
      "A short paragraph describing the problem, your approach, and what you built.",
    cardHighlights: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    achievements: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    imageSrc: "/images/wandering.png",
    imageAlt: "Wandering screenshot",
    detailsUrl: "",
    githubUrl: "https://github.com/sayuj0?tab=repositories",
    liveDemoUrl: "",
  },
  {
    title: "Project Four",
    description:
      "A short, high-impact summary of what this project does and why it matters.",
    tags: ["TypeScript", "Frontend", "UX"],
    techStack: ["TypeScript", "Frontend", "UX"],
    about:
      "A short paragraph describing the problem, your approach, and what you built.",
    cardHighlights: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    achievements: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    imageSrc: "",
    imageAlt: "",
    detailsUrl: "",
    githubUrl: "https://github.com/sayuj0?tab=repositories",
    liveDemoUrl: "",
  },
  {
    title: "Project Five",
    description:
      "A short, high-impact summary of what this project does and why it matters.",
    tags: ["Node.js", "Backend", "Auth"],
    techStack: ["Node.js", "Backend", "Auth"],
    about:
      "A short paragraph describing the problem, your approach, and what you built.",
    cardHighlights: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    achievements: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    imageSrc: "",
    imageAlt: "",
    detailsUrl: "",
    githubUrl: "https://github.com/sayuj0?tab=repositories",
    liveDemoUrl: "",
  },
  {
    title: "Project Six",
    description:
      "A short, high-impact summary of what this project does and why it matters.",
    tags: ["Cloud", "CI/CD", "Deploy"],
    techStack: ["Cloud", "CI/CD", "Deploy"],
    about:
      "A short paragraph describing the problem, your approach, and what you built.",
    cardHighlights: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    achievements: [
      "Key accomplishment or measurable impact",
      "Notable technical detail or feature",
    ],
    imageSrc: "",
    imageAlt: "",
    detailsUrl: "",
    githubUrl: "https://github.com/sayuj0?tab=repositories",
    liveDemoUrl: "",
  },
];

function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [modalSafeTop, setModalSafeTop] = useState(0);

  const activeProject = useMemo(() => {
    if (activeProjectIndex == null) return null;
    return featuredProjects[activeProjectIndex] ?? null;
  }, [activeProjectIndex]);

  const closeModal = () => setActiveProjectIndex(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);

    const measureNavHeight = () => {
      const nav = document.querySelector(".simple-nav");
      const navHeight = nav ? nav.getBoundingClientRect().height : 0;
      setModalSafeTop(Math.max(0, Math.round(navHeight)));
    };

    measureNavHeight();
    window.addEventListener("resize", measureNavHeight);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", measureNavHeight);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <section id="projects" className="contentSection">
      <div className="contentSection__inner">
        <h2 className="contentSection__title">Featured Projects</h2>

        <div className="projectsGrid" aria-label="Featured projects">
          {featuredProjects.map((project, index) => (
            <article className="projectCard" key={`${project.title}-${index}`}>
              <div className="projectCard__media">
                {project.imageSrc ? (
                  <img
                    className="projectCard__image"
                    src={project.imageSrc}
                    alt={project.imageAlt || project.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="projectCard__mediaPlaceholder" />
                )}
              </div>

              <div className="projectCard__content">
                <h3 className="projectCard__title">{project.title}</h3>
                <p className="projectCard__description">{project.description}</p>

                <div className="projectTags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <span className="projectTag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="projectCard__highlights">
                  {project.cardHighlights.map((highlight, highlightIndex) => (
                    <li key={`${index}-${highlightIndex}`}>{highlight}</li>
                  ))}
                </ul>

                <div className="projectCard__footer">
                  <div className="projectCard__ctaRow">
                    <button
                      type="button"
                      className="hero__btn hero__btn--compact"
                      onClick={() => setActiveProjectIndex(index)}
                    >
                      View Details
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
                    </button>

                    {(index === 2 || index === 4) && (
                      <a
                        className="hero__btn hero__btn--compact"
                        href={project.liveDemoUrl || "#"}
                        target={project.liveDemoUrl ? "_blank" : undefined}
                        rel={project.liveDemoUrl ? "noreferrer" : undefined}
                        aria-disabled={!project.liveDemoUrl}
                        onClick={(event) => {
                          if (!project.liveDemoUrl) event.preventDefault();
                        }}
                      >
                        <svg
                          className="hero__btnIcon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M14 3h7v7m0-7-10 10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 7H7v10h10v-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>

                  <div className="projectCard__actions">
                    <a
                      className="hero__iconBtn"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2c-5.52 0-10 4.6-10 10.26 0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.39-3.37-1.39-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.12 10.12 0 0 0 22 12.26C22 6.6 17.52 2 12 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {activeProject && (
          <div
            className="projectModalOverlay"
            style={{ "--modal-safe-top": `${modalSafeTop}px` }}
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
          >
            <div
              className="projectModal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              aria-describedby="project-modal-desc"
            >
              <div className="projectModal__header">
                <h3 className="projectModal__title" id="project-modal-title">
                  {activeProject.title}
                </h3>
                <button
                  type="button"
                  className="projectModal__close hero__iconBtn"
                  onClick={closeModal}
                  aria-label="Close"
                  title="Close"
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

              <p className="projectModal__description" id="project-modal-desc">
                {activeProject.description}
              </p>

              <div className="projectModal__section">
                <h4 className="projectModal__sectionTitle">Tech Stack</h4>
                <div className="projectModal__tech" aria-label="Tech stack">
                  {(activeProject.techStack || [])
                    .filter(Boolean)
                    .map((item) => (
                      <span className="projectTag" key={item}>
                        {item}
                      </span>
                    ))}

                  {(!activeProject.techStack ||
                    activeProject.techStack.filter(Boolean).length === 0) && (
                    <span className="projectModal__muted">
                      Add your full tech stack here.
                    </span>
                  )}
                </div>
              </div>

              <div className="projectModal__section">
                <h4 className="projectModal__sectionTitle">About This Project</h4>
                <p className="projectModal__body">
                  {activeProject.about || activeProject.description}
                </p>
              </div>

              <div className="projectModal__section">
                <h4 className="projectModal__sectionTitle">Key Achievements</h4>
                <ul className="projectModal__list">
                  {(activeProject.achievements || activeProject.cardHighlights || []).map(
                    (item, i) => (
                    <li key={`${activeProject.title}-achievement-${i}`}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="projectModal__footer">
                <a
                  className="hero__btn hero__btn--compact projectModal__codeBtn"
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub repository"
                  title="GitHub"
                >
                  <svg
                    className="projectModal__codeIcon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2c-5.52 0-10 4.6-10 10.26 0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.39-3.37-1.39-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.12 10.12 0 0 0 22 12.26C22 6.6 17.52 2 12 2z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="projectsFooter">
          <a
            className="projectsFooter__link"
            href="https://github.com/sayuj0?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View all projects on my GitHub
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
