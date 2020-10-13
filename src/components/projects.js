import '../style.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faDoorOpen, faPuzzlePiece, faFileArchive, faStickyNote, faLanguage, faComments, faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';

const Projects = (props) => {
  return (
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      <hr />
      <div className="row">
        <div className="card">
          <FontAwesomeIcon icon={faSearch} className="fa-7x" />
          <p className="title">tiny search engine</p>
          <p className="description">la la la testing</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faDoorOpen} className="fa-7x" />
          <p className="title">sublit</p>
          <p className="description">la la la testing</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <FontAwesomeIcon icon={faPuzzlePiece} className="fa-7x" />
          <p className="title">sudoku solver</p>
          <p className="description">la la la testing</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faFileArchive} className="fa-7x" />
          <p className="title">huffman encoder</p>
          <p className="description">la la la testing</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <FontAwesomeIcon icon={faStickyNote} className="fa-7x" />
          <p className="title">react notes</p>
          <p className="description">la la la testing</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faComments} className="fa-7x" />
          <p className="title">blog</p>
          <p className="description">la la la testing</p>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <FontAwesomeIcon icon={faLanguage} className="fa-7x" />
          <p className="title">part of speech tagger</p>
          <p className="description">la la la testing</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faWindowRestore} className="fa-7x" />
          <p className="title">personal website</p>
          <p className="description">la la la testing</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
