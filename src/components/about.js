/* eslint-disable react/jsx-props-no-spreading */
import '../style.scss';
import React from 'react';
import proPic from '../images/profile.jpeg';

const About = (props) => {
  return (
    <div className="about">
      <div id="about" />
      <h1>ABOUT</h1>
      <hr />
      <div className="about_info">
        <img src={proPic} alt="caroline" />
        <div className="bio">
          <p className="slideIn">Hi! I’m Caroline, a ’22 (junior) at Dartmouth College from Arlington, VA.
            I’ve always loved math and puzzles, and in college found an outlet for that through Computer Science.
            I have taken courses on web development, software development, object oriented programing and basic ML.
            I’m fluent in Java, C, Javascript (React/Node/Express), HTML/CSS/SASS/Bootstrap and have been exposed to MATLAB and Python.
          </p>
          <p>
            Outside of the classroom, I play ultimate frisbee on Dartmouth’s club team (<a href="https://www.youtube.com/watch?v=2PM5m7_vcys" target="_blank" rel="noreferrer">watch this</a>)
            and the elite women’s club team from DC.
            Additionally, I have a deep love for the outdoors and can often be found hiking, swimming or skiing in and around Hanover, NH.
          </p>
          <p>
            I’m currently seeking SWE internships for Summer 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
