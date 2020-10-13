import '../style.scss';
import React from 'react';
import Fade from 'react-reveal/Fade';

const Internships = (props) => {
  return (
    <div className="internships" id="internships">
      <h1>EXPERIENCES</h1>
      <hr />
      <Fade left cascade>
        <div className="right">
          <div className="info">
            <h2>MACHINE LEARNING RESEARCH</h2>
            <h3>JUNE 2020 - PRESENT</h3>
          </div>
          <p>
            Along with Professor Subrahmanian and friends from the Dutch military, I am using machine learning tools
            to build predictive models of Chinese border incursions into India.
            We are submitting a paper in upcoming weeks discussing our work creating association rules using
            to accurately determine the “triggers” that precede incursions
          </p>
        </div>
        <div className="right">
          <p>
            I am managing a team of five engineers to build the MVP, a crowdsourced investment social media site in React, Node, Express and MongoDB, to be presented before investors in late 2020.
            I have spearheaded creation and styling of landing, community and profile pages, as well as connected and
            updated the API’s endpoints to get stock price changes and allow for multiple types of users and posts.
            This project has taught me a lot about project management and communicating complicated technical ideas.
          </p>
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
          <p>
            In the summer of 2019 I worked as a Policy Intern for the House Committee on Science, Space and Technology.
            I undertook both individual and team assignments in a fast-paced, high-pressure, politically-sensitive environment.
            I wrote the brief for the Committee’s hearing, Artificial Intelligence: Societal and Ethical Implications, which outlined for Members the benefits and risks associated with AI,
            including the potential for unintentional bias in the underlying algorithms.
            This included authoring questions that were asked by Members of Congress.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Internships;
