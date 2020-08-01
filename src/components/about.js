import React from 'react';
import '../Main.css'


class About extends React.Component {

  render() {
    return (
      <div className = "aboutBox">
          <h1 className = "aboutBox-title">About The Game:::</h1>
          <br></br>
          <h2 className = "aboutBox-secTitle">What is Conway's Game of Life?</h2>
          <br></br>
          <p className = "aboutBox-paragraph">It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.</p>
          <br></br>
          <h2 className = "aboutBox-secTitle">What is 'cellular automaton'?</h2>
          <br></br>
          <p className = "aboutBox-paragraph">A cellular automaton is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells. The rules are then applied iteratively for as many time steps as desired. von Neumann was one of the first people to consider such a model, and incorporated a cellular model into his "universal constructor."</p>
          <br></br>
          <h2 className = "aboutBox-secTitle">How does the game work?</h2>
          <br></br>
          <p className = "aboutBox-paragraph">It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.</p>
          <br></br>
          <h2 className = "aboutBox-secTitle">What are the rules in this game?</h2>
          <br></br>
          <h2 className = "aboutBox-thirdTitle">For a space that is 'populated':</h2>
          <br></br>
          <ul className = "aboutBox-ul">
              <li>Each cell with one or no neighbors dies, as if by solitude.</li>
              <li>Each cell with four or more neighbors dies, as if by overpopulation.</li>
              <li>Each cell with two or three neighbors survives.</li>
          </ul>
          <br></br>
          <h2 className = "aboutBox-thirdTitle">For a space that is 'empty' or 'unpopulated':</h2>
          <br></br>
          <ul className = "aboutBox-ul">
              <li>Each cell with three neighbors becomes populated.</li>
          </ul>
      </div>
    )
  }
}

export default About;
