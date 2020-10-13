import '../style.scss';
import React from 'react';

const Internships = (props) => {
  return (
    <div className="internships" id="internships">
      <h1>INTERNSHIPS</h1>
      <hr />
      <div className="right">
        <div className="info">
          <h2>MACHINE LEARNING RESEARCH</h2>
          <h3>JUNE 2020 - PRESENT</h3>
        </div>
        <p>I am doing some machine learning research to predict chines border incursions into india. I have learned so so much</p>
      </div>
      <div className="left">
        <p>medius is a fintech startup some of my friends foundeded and where I am the lead engineer</p>
        <div className="info">
          <h2>MEDIUS</h2>
          <h3>AUGUST 2020 - PRESENT</h3>
        </div>
      </div>
      <div className="right">
        <div className="info">
          <h2>HOUSE SCIENCE</h2>
          <h3>JUNE 2019 - AUGUST 2019</h3>
        </div>
        <p>i got to work on the hill and do some very cool stuff!</p>
      </div>
    </div>
  );
};

export default Internships;
