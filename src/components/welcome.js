/* eslint-disable react/jsx-props-no-spreading */
import '../style.scss';
import React, { Component } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loader-spinner';
import Baker from '../images/baker.jpeg';
import Fall from '../images/fall.jpeg';
import Franconia from '../images/franconia.jpeg';
import Mink from '../images/mink.jpeg';
import Morey from '../images/morey.jpeg';
import Normandy from '../images/normandy.jpeg';
import Sunrise from '../images/sunrise.jpeg';

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  autoplay: true,
  pauseOnHover: false,
};

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    window.setTimeout(this.changeLoaded, 2000);
  }

  changeLoaded = () => {
    this.setState({ isLoading: false });
  }

  // visible={this.state.isLoading}
  // {`spinner-${this.state.isLoading}`}
  render() {
    console.log('loaded', this.state.isLoading);
    const val = this.state.isLoading ? 'none' : 'flex';
    return (
      <div>
        <div className={`spinner-${this.state.isLoading}`}>
          <Loader type="Puff" timeout={2000} color="#3aafa9" />
        </div>
        <div className={`welcome-${this.state.isLoading}`} id="welcome" style={{ display: { val } }}>
          <div className="name">
            <h1>CAROLINE TORNQUIST</h1>
            <h2>dartmouth &#39;22 computer science major</h2>
            <div className="socials">
              <a href="https://github.com/ctornquist" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="fa-2x" />
              </a>
              <a href="https://www.linkedin.com/in/carolinetornquist/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
              </a>
            </div>
          </div>
          <Fade {...fadeProperties}>
            <div className="each-fade">
              <div className="image-container">
                <img src={Morey} alt="first" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Sunrise} alt="first" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Franconia} alt="first" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Mink} alt="first" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Baker} alt="first" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Normandy} alt="first" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Fall} alt="first" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Welcome;
