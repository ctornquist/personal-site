/* eslint-disable react/jsx-props-no-spreading */
import '../style.scss';
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import Baker from '../images/baker.jpeg';
import Fall from '../images/fall.jpeg';
import Franconia from '../images/franconia.jpeg';
import Mink from '../images/mink.jpeg';
import Morey from '../images/morey.jpeg';
import Normandy from '../images/normandy.jpeg';
import Sharon from '../images/sharon.jpeg';
import Sunrise from '../images/sunrise.jpeg';

const fadeProperties = {
  duration: 15000,
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
        <p>icons to socials here</p>
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
