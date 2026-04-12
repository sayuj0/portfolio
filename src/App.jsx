import SimpleNav from "./components/SimpleNav";
import SideSocial from "./components/SideSocial";

import { useEffect, useMemo, useState } from "react";

import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

import { skills } from "./data/skills";

function App() {
  const sectionOrder = useMemo(
    () => ["skills", "experience", "projects", "certifications", "contact"],
    []
  );

  const [activeSection, setActiveSection] = useState("home");

  const shouldHandleClick = (event) =>
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey;

  const getNavHeight = () => {
    const nav = document.querySelector(".simple-nav");
    return nav ? nav.getBoundingClientRect().height : 0;
  };

  const updateActiveSectionFromScroll = () => {
    const navHeight = getNavHeight();
    const probeY = window.scrollY + navHeight + 260;

    let current = "home";
    for (const sectionId of sectionOrder) {
      const el = document.getElementById(sectionId);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (probeY >= top) current = sectionId;
    }

    setActiveSection((prev) => (prev === current ? prev : current));
  };

  const scrollToSection = (sectionId) => {
    const nav = document.querySelector(".simple-nav");
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    const heading = document.querySelector(`#${sectionId} h2`);
    const target = heading || document.getElementById(sectionId);
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(0, targetTop - navHeight - 16), behavior: "smooth" });
  };

  const syncScrollWithLocation = () => {
    const pathname = window.location.pathname || "/";
    const hash = window.location.hash || "";

    const validSections = new Set([
      "skills",
      "experience",
      "projects",
      "certifications",
      "contact",
    ]);

    let sectionId = "";
    if (hash.startsWith("#")) {
      sectionId = hash.slice(1);
      if (validSections.has(sectionId)) {
        window.history.replaceState({}, "", `/${sectionId}`);
      }
    } else if (pathname !== "/") {
      sectionId = pathname.replace(/^\//, "");
    }

    if (validSections.has(sectionId)) {
      setActiveSection(sectionId);
      scrollToSection(sectionId);
    } else {
      setActiveSection("home");
    }
  };

  useEffect(() => {
    const onPopState = () => syncScrollWithLocation();
    window.addEventListener("popstate", onPopState);
    syncScrollWithLocation();
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    let rafId = 0;

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateActiveSectionFromScroll();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActiveSectionFromScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [sectionOrder]);

  const handleHomeClick = (event) => {
    if (!shouldHandleClick(event)) return;
    event.preventDefault();
    window.history.pushState({}, "", "/");
    setActiveSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (sectionId) => (event) => {
    if (!shouldHandleClick(event)) return;
    event.preventDefault();

    window.history.pushState({}, "", `/${sectionId}`);
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  const handleSkillsClick = (event) => {
    handleSectionClick("skills")(event);
  };

  return (
    <div className="appShell">
      <div className="appBackground" aria-hidden="true" />
      <SimpleNav
        onHomeClick={handleHomeClick}
        onSkillsClick={handleSkillsClick}
        onSectionClick={handleSectionClick}
        activeSection={activeSection}
      />

      <SideSocial />

      <main>
        <HeroSection onProjectsClick={handleSectionClick("projects")} />
        <SkillsSection skills={skills} />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
