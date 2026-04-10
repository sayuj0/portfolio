import SimpleNav from "./components/SimpleNav";
import SideSocial from "./components/SideSocial";

import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";

import { skills } from "./data/skills";

function App() {
  const handleHomeClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (sectionId) => (event) => {
    event.preventDefault();

    const nav = document.querySelector(".simple-nav");
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    const heading = document.querySelector(`#${sectionId} h2`);
    const target = heading || document.getElementById(sectionId);
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    window.history.pushState({}, "", `#${sectionId}`);
    window.scrollTo({ top: Math.max(0, targetTop - navHeight - 16), behavior: "smooth" });
  };

  const handleSkillsClick = (event) => {
    event.preventDefault();

    const target = document.getElementById("skills");
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const hero = document.querySelector(".hero");
    const nav = document.querySelector(".simple-nav");

    let heroBottom = targetTop;
    if (hero) {
      const heroTop = hero.getBoundingClientRect().top + window.scrollY;
      heroBottom = heroTop + hero.getBoundingClientRect().height;
    }

    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    window.history.pushState({}, "", "#skills");
    window.scrollTo({
      top: Math.max(targetTop - navHeight - 16, heroBottom - 50),
      behavior: "smooth",
    });
  };

  return (
    <div className="appShell">
      <SimpleNav
        onHomeClick={handleHomeClick}
        onSkillsClick={handleSkillsClick}
        onSectionClick={handleSectionClick}
      />

      <SideSocial />

      <main>
        <HeroSection />
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
