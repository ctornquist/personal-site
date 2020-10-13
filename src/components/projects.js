import '../style.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faDoorOpen, faPuzzlePiece, faFileArchive, faStickyNote, faLanguage, faComments, faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import Slide from 'react-reveal/Slide';

const Projects = (props) => {
  return (
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      <hr />
      <Slide bottom cascade>
        <div className="row">
          <div className="card">
            <FontAwesomeIcon icon={faSearch} className="fa-7x" />
            <p className="title">tiny search engine</p>
            <p className="description">I created a module to parse webpages linked to a given URL, index their contents and process queries to search the pages.
              It outputs search results ranked by relavency. Check out the code <a href="https://github.com/ctornquist/Search-Engine">here</a>.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faDoorOpen} className="fa-7x" />
            <p className="title">sublit</p>
            <p className="description">
              I collaborated with four other students to design and engineer a web app that connects students with leases to people trying to sublet for a term.
              I pesonally implemented an API that supports CRUD operations, user authentication and instant messaging between users. Email me for the code.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <FontAwesomeIcon icon={faPuzzlePiece} className="fa-7x" />
            <p className="title">sudoku solver</p>
            <p className="description">
              I collaborated with three other students to design and engineer a module to create and solve sudoku boards.
              I wrote a recursive backtracking algorithm to efficiently solve each puzzle and generate puzzles with unique solutions.
              Check out the code <a href="https://github.com/ctornquist/sudoku-solver">here</a>.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faFileArchive} className="fa-7x" />
            <p className="title">huffman encoder</p>
            <p className="description">Wrote a program to losslessly compress and decompress files using Huffman’s variable-length bit code techniques.
              It can efficiently compress files to 50% of their previous size allowing for easy transfer of data. Check out the code <a href="https://github.com/ctornquist/Huffmann-Encoding">here</a>.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <FontAwesomeIcon icon={faStickyNote} className="fa-7x" />
            <p className="title">react notes</p>
            <p className="description">Created board with markdown supported sticky notes that users can edit, delete and drag around.
              Utilized Google Firebase for persistent storage and real time updates across users.
              Check out the code and leave me a note <a href="https://github.com/ctornquist/react-notes">here</a>.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faComments} className="fa-7x" />
            <p className="title">blog</p>
            <p className="description">I created a blog web app to learn more about routing in React and using Redux to manage data.
              Users can sign up, create blog posts, look through other people&#39;s posts, and expand each blog tile into a full page.
              Check out the frontend <a href="https://github.com/ctornquist/blog-frontend">here</a> and the API <a href="https://github.com/ctornquist/blog-api">here</a>.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <FontAwesomeIcon icon={faLanguage} className="fa-7x" />
            <p className="title">part of speech tagger</p>
            <p className="description">Used Hidden Markov Models and the Viterbi algorithm to label each word in a given sentence with its part of speech.
              Trained on a large dataset, program is capable of tagging 35,000 words with 96% accuracy.
              Check out the code <a href="https://github.com/ctornquist/Part-of-Speech-Tagger">here</a>.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faWindowRestore} className="fa-7x" />
            <p className="title">personal website</p>
            <p className="description">You&#39;re looking at it right now! I built this to explore some new tools in React and show off all my cool nature pics :)
              Check out the code <a href="https://github.com/ctornquist/ctornquist.github.io">here</a>.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Projects;
