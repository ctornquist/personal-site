/* eslint-disable react/jsx-props-no-spreading */
import '../style.scss';
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Baker from '../images/baker.jpeg';
import Fall from '../images/fall.jpeg';
import Franconia from '../images/franconia.jpeg';
import Mink from '../images/mink.jpeg';
import Morey from '../images/morey.jpeg';
import Normandy from '../images/normandy.jpeg';
import Sharon from '../images/sharon.jpeg';
import Sunrise from '../images/sunrise.jpeg';

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
};

const Welcome = (props) => {
  return (
    <div className="welcome" id="welcome">
      <div className="name">
        <h1>CAROLINE TORNQUIST</h1>
        <h2>dartmouth 22 cs major</h2>
        <div className="socials">
          <a href="https://github.com/ctornquist">
            <FontAwesomeIcon icon={faGithub} className="fa-2x" />
          </a>
          <a href="https://www.linkedin.com/in/carolinetornquist/">
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
          </a>
        </div>
      </div>
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={Baker} alt="first" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={Fall} alt="first" />
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
            <img src={Morey} alt="first" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={Normandy} alt="first" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={Sharon} alt="first" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={Sunrise} alt="first" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Welcome;
