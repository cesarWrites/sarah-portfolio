import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
function App() {
  return (
    // <div className="App">
    //   <About/>
    //   <Resume/>
    //   <Projects/>
    //   <Articles/>
    //   <Contact/>
    //  </div>

    <div className="container">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          {/* <li>
            <a href="#resume">Resume</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>


      <div id="about">
        {/* About Component */}
        <h2><About/></h2>
      </div>

      <div id="projects">
        {/* Projects Component */}
        <h2><Projects/></h2>
      </div>
      <div id="articles">
        <h2><Articles/></h2>
      </div>
      {/* <div id="resume">
        <h2><Resume/></h2>
      </div> */}
      <div id="contact" style={{ width: "100%", marginBottom: 0}}>
        {/* Contact Component */}
        <h2><Contact/></h2>
      </div>

      </div>
  );
}

export default App;
