import '../style.scss';
import React from 'react';

const Projects = (props) => {
  return (
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      <hr />
      <div className="row">
        <div className="card">
          <p className="title">tiny search engine</p>
          <p className="description">la la la testing</p>
        </div>
        <div className="card">
          <p className="title">sublit</p>
          <p className="description">la la la testing</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <p className="title">sudoku solver</p>
          <p className="description">la la la testing</p>
        </div>
        <div className="card">
          <p className="title">huffman encoder</p>
          <p className="description">la la la testing</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <p className="title">react notes</p>
          <p className="description">la la la testing</p>
        </div>
        <div className="card">
          <p className="title">blog</p>
          <p className="description">la la la testing</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <p className="title">part of speech tagger</p>
          <p className="description">la la la testing</p>
        </div>
        <div className="card">
          <p className="title">personal website</p>
          <p className="description">la la la testing</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
