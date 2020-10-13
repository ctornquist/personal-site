/* eslint-disable react/jsx-props-no-spreading */
import '../style.scss';
import React from 'react';
import proPic from '../images/profile.jpeg';

const About = (props) => {
  return (
    <div className="about" id="about">
      <h1>ABOUT</h1>
      <hr />
      <div className="about_info">
        <img src={proPic} alt="caroline" />
        <p className="slideIn">Hi I am caroline and i am interested in getting a swe job woohoo la la la there are so many things to know about me</p>
      </div>
    </div>
  );
};

export default About;
