import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { withBase } from "../utils/paths";

/**
 * @typedef {object} FeaturedProject
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {string[]} techStack
 * @property {string} about
 * @property {string[]} cardHighlights
 * @property {string[]} achievements
 * @property {string} imageSrc
 * @property {string} imageAlt
 * @property {string} githubUrl
 * @property {string} [liveDemoUrl]
 */

/** @type {FeaturedProject[]} */
const featuredProjects = [
  {
    title: "Coming soon",
    description:
      "Coming soon: a new project that I'm excited to share! Check back later for updates and details on this upcoming addition to my portfolio.",
    tags: ["Coming soon"],
    techStack: ["Coming soon"],
    about:
      "Coming soon.",
    cardHighlights: [
      "Coming soon",
      "Coming soon",
    ],
    achievements: [
      "Coming soon",
      "Coming soon",
    ],
    imageSrc: "",
    imageAlt: "",
    githubUrl: "https://github.com/sayuj0?tab=repositories",
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
    imageSrc: withBase("images/unicareers.png"),
    imageAlt: "Project Two screenshot",
    githubUrl: "https://github.com/sayuj0/MajorLink",
  },
  {
    title: "Snake Persistence Task",
    description:
      "A PsychoPy-based Snake behavioral task developed in Python to assess behavioral persistence in relation to coping self-efficacy, with synchronized event logging for physiological data collection.",
    tags: ["Python", "PsychoPy", "EKG", "GSR", "+3"],
    techStack: ["Python", "PsychoPy", "EKG", "GSR", "Automation", "CSV", "Git"],
    about:
      "This project is a Python-based Snake behavioral task built with PsychoPy for research on persistence and coping self-efficacy. Before the main gameplay starts, the researcher selects one of several counterbalanced task versions, and each version uses a different order of stages and conditions. The experiment runs full-screen and includes configurable stages, snake movement, scoring, collision handling, HUD feedback, and sprite-based visuals. The task logs participant performance to CSV and sends automated event markers so gameplay events can be synchronized with EKG and GSR recordings.",
    cardHighlights: [
      "Built a PsychoPy-based Snake behavioral task used across 50+ research participants to measure persistence through timed, multi-stage gameplay",
      "Integrated automated event markers for keypress, reward, collision, and stage lifecycle events to synchronize gameplay with EKG and GSR recordings",
    ],
    achievements: [
      "Built a PsychoPy-based Snake behavioral task used across 50+ research participants to measure persistence through timed, multi-stage gameplay",
      "Implemented counterbalanced versions (A-F) and Neutral vs. Positive conditions, including encouragement prompts after collisions",
      "Integrated automated event markers for keypress, reward, collision, and stage lifecycle events to synchronize gameplay with EKG and GSR recordings",
      "Automated CSV logging of participant metadata, session details, and performance data for analysis",
    ],
    imageSrc: withBase("images/snake.png"),
    imageAlt: "Snake persistence task screenshot",
    githubUrl: "https://github.com/sayuj0/snake_persistence_task",
  },
  {
    title: "Developer Portfolio",
    description:
      "A responsive single-page developer portfolio built with React and Vite to showcase projects, skills, experience, certifications, and contact information.",
    tags: ["React", "JavaScript", "Vite", "Node", "+3"],
    techStack: ["React", "JavaScript", "Vite", "Node", "CSS", "HTML", "WebGL"],
    about:
      "This project is a responsive single-page developer portfolio built to showcase technical skills, experience, featured projects, and certifications in a clean and modern format. It was created with React and Vite using a component-based structure that keeps each section organized and easy to maintain. The site includes custom styling, responsive layouts, scroll-aware navigation, project detail modals, and an animated background to create a more polished and interactive user experience.",
    cardHighlights: [
      "Built a responsive single-page developer portfolio using React and Vite to showcase projects, technical skills, work experience, certifications, and contact information",
      "Implemented interactive UI features including scroll-aware navigation, project detail modals, and responsive layouts using JavaScript and custom CSS",
    ],
    achievements: [
      "Built a responsive single-page developer portfolio using React and Vite to showcase projects, technical skills, work experience, certifications, and contact information",
      "Implemented interactive UI features including scroll-aware navigation, project detail modals, and responsive layouts using JavaScript and custom CSS",
      "Developed a modular frontend structure with reusable React components and organized content across clearly separated portfolio sections",
      "Integrated an OGL/WebGL particle background to enhance the visual design and create a more dynamic user experience",
    ],
    imageSrc: withBase("images/preview.png"),
    imageAlt: "Developer Portfolio Screenshot",
    githubUrl: "https://github.com/sayuj0/portfolio",
  },
  {
    title: "Wandering",
    description:
      "A personal travel website that captures favorite memories, meals, and future destinations through a responsive, story-driven design.",
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "+1"],
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Cloudflare"],
    about:
      "Wandering is my personal travel website, built as a digital scrapbook for favorite memories, meals, and future destinations. It features sections like Home, About, Destinations, Food, Future, and Contact, combining storytelling with responsive design and interactive galleries. Built with HTML5, CSS3, and JavaScript, the site was deployed through GitHub Pages with a custom domain.",
    cardHighlights: [
      "Designed and deployed a responsive personal travel website with interactive galleries and Swiper-based image carousels",
      "Developed the site with HTML, CSS, and JavaScript, using custom properties, media queries, mobile navigation, and carousel functionality",
    ],
    achievements: [
      "Designed and deployed a responsive personal travel website with interactive galleries and Swiper-based image carousels",
      "Developed the site with HTML, CSS, and JavaScript, using custom properties, media queries, mobile navigation, and carousel functionality",
      "Optimized the website for mobile, tablet, and desktop devices and deployed it through GitHub Pages with a custom domain",
      "Built a functional contact form and integrated smooth client-side behavior for a more polished user experience",
    ],
    imageSrc: withBase("images/wandering.png"),
    imageAlt: "Wandering screenshot",
    githubUrl: "https://github.com/sayuj0/travel-website",
    liveDemoUrl: "https://wanderingtravel.org/",
  },
  {
    title: "Productivity Hub",
    description:
      "A Flask-based task manager for creating, organizing, searching, and tracking todos through a clean CRUD workflow.",
    tags: ["Python", "Flask", "SQLAlchemy", "SQLite", "+6"],
    techStack: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "SQLite",
      "HTML",
      "CSS",
      "Jinja2",
      "Docker",
      "Pytest",
      "Selenium",
    ],
    about:
      "Productivity Hub is a Flask-based task management application built around a simple and practical todo workflow. Users can create, edit, delete, search, and mark tasks as complete, with timestamps and completion states displayed directly in the interface. The app uses SQLAlchemy with SQLite for persistent storage and Jinja2 templates with HTML and CSS for the front end. It also includes automated testing for reliability, using Pytest for backend coverage and parallel test execution, and Selenium to check key browser workflows like creating, editing, searching, and completing tasks. The project was containerized with Docker for consistent setup and deployment.",
    cardHighlights: [
      "Built a Flask-based CRUD task management app that supports creating, editing, deleting, searching, and completing todos",
      "Added automated testing with Pytest and Selenium to validate backend logic and verify end-to-end browser workflows",
    ],
    achievements: [
      "Built a Flask-based CRUD task management app that supports creating, editing, deleting, searching, and completing todos",
      "Added automated testing with Pytest and Selenium to validate backend logic and verify end-to-end browser workflows",
      "Implemented storage with SQLAlchemy and SQLite and developed a server-rendered interface with Jinja2, HTML, and CSS",
      "Containerized the application with Docker for reproducible setup and consistent deployment",
    ],
    imageSrc: withBase("images/productivity.png"),
    imageAlt: "Productivity Hub screenshot",
    githubUrl: "https://github.com/sayuj0/Productivity-Hub",
  },
];

/**
 * Project grid with a portal-based details modal.
 * Locks body scroll while the modal is open and offsets it below the sticky nav.
 */
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

                    {index === 4 && (
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

        {activeProject &&
          createPortal(
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
            </div>,
            document.body
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
