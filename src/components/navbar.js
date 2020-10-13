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

    console.log('listening');
    /* if (window.scrollY > 400) {
      this.setState({ color: 'white' });
    } else {
      this.setState({ color: 'transparent' });
    } */
  }

  render() {
    const op = Math.min(this.state.currentScrollHeight / 500, 1);
    console.log(op);
    return (
      <div className="navBar" style={{ backgroundColor: `rgba(250, 250, 250, ${op})` }}>
        <a href="#welcome" id="name">CT</a>
        <div className="navBar_links">
          <a href="#about">About</a>
          <a href="#internships">Internships</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
