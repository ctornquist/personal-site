import '../style.scss';
import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScrollHeight: 1,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = (e) => {
    const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
    if (this.state.currentScrollHeight !== newScrollHeight) {
      this.setState({ currentScrollHeight: newScrollHeight });
    }
  }

  render() {
    const op = Math.min(this.state.currentScrollHeight / 500, 1);
    console.log(op);
    return (
      <div className="navBar" style={{ backgroundColor: `rgba(222,242,241, ${op})` }}>
        <a href="#welcome" id="name">CT</a>
        <div className="navBar_links">
          <a href="#about">ABOUT</a>
          <a href="#internships">EXPERIENCES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
