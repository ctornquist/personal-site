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
import Morey from '../images/morey.jpeg';
import Normandy from '../images/normandy.jpeg';
import Sunrise from '../images/sunrise.jpeg';
import FallGile from '../images/fallGile.jpeg';
// import Flowers from '../images/flowers.jpeg';
import Quechee from '../images/quechee.jpeg';
import WaterSunset from '../images/waterSunset.jpeg';

const fadeProperties = {
  duration: 3000,
  transitionDuration: 1000,
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
    window.setTimeout(this.changeLoaded, 1700);
  }

  changeLoaded = () => {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div>
        <div className={`spinner-${this.state.isLoading}`}>
          <Loader type="Puff" timeout={1700} color="#3aafa9" />
        </div>
        <div className={`welcome-${this.state.isLoading}`} id="welcome">
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
                <img src={Morey} alt="lake morey" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Sunrise} alt="sunrise at gile" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Franconia} alt="franconia ridge" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Baker} alt="baker tower" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={FallGile} alt="sunset on the connecticut" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Normandy} alt="cliffs at normandy" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Fall} alt="fall at mink brook" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={WaterSunset} alt="sunset in southboro" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={Quechee} alt="quechee gorge" />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Welcome;
