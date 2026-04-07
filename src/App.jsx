import Particles from "./Particles";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Particles />
      </div>

      <header className="simple-nav">
        <div className="simple-nav__inner">
          <a className="simple-nav__brand" href="/">
            Sayuj Shrestha
          </a>

          <nav className="simple-nav__links">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
