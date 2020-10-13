import '../style.scss';
import React from 'react';
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
        <p> copyright caroline tornquist 2020</p>
        <p>add some socials in here</p>
      </footer>
    </div>
  );
};

export default App;
