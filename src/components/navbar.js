import '../style.scss';
import React from 'react';

const NavBar = (props) => {
  /* componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 100 ? "red" : "blue";

      this.setState({ navBackground: backgroundcolor });
    });
  } */

  return (
    <div className="navBar">
      <a href="#welcome" id="name">CT</a>
      <div className="navBar_links">
        <a href="#about">About</a>
        <a href="#internships">Internships</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
