import '../style.scss';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  mobileMenu = () => {
    const x = document.getElementById('navBar');
    if (x.className === 'navBar') {
      x.className += ' responsive';
    } else {
      x.className = 'navBar';
    }
  }

  render() {
    const op = Math.min(this.state.currentScrollHeight / 500, 1);
    return (
      <div className="navBar" id="navBar" style={{ backgroundColor: `rgba(222,242,241, ${op})` }}>
        <a href="#welcome" id="name">CT</a>
        <div className="navBar_links">
          <a href="#welcome" onClick={this.mobileMenu}>HOME</a>
          <a href="#about" onClick={this.mobileMenu}>ABOUT</a>
          <a href="#internships" onClick={this.mobileMenu}>EXPERIENCES</a>
          <a href="#projects" onClick={this.mobileMenu}>PROJECTS</a>
          <a href="#contact" onClick={this.mobileMenu}>CONTACT</a>
        </div>
        <button type="button" className="icon" onClick={this.mobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    );
  }
}

export default NavBar;
