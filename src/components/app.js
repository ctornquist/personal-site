import '../style.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavBar from './navbar';
import Welcome from './welcome';
import About from './about';
import Internships from './internships';
import Projects from './projects';
import Contact from './contact';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <Welcome />
      <About />
      <Internships />
      <Projects />
      <Contact />
      <footer>
        <p> &#169; caroline tornquist 2020</p>
        <div className="socials">
          <a href="https://github.com/ctornquist">
            <FontAwesomeIcon icon={faGithub} className="fa-2x" />
          </a>
          <a href="https://www.linkedin.com/in/carolinetornquist/">
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
