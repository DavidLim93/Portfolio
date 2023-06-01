import React from 'react'

export default function Projects() {
  return (
    <div>
        <h2 className='heading'>Here is the list of my projects I have created for each module</h2>
        <ul className='list'>
            <li>Javascript: <a href="https://davidlim93.github.io/Pokedex/">Pokedex</a></li>
            <li>React: <a href="https://harrypotterspells.netlify.app/">Harry Potter Spells</a></li>
            <p>Unable to deploy the following but the link to my github repository with the codes are below:</p>
            <li>Ruby: <a href="https://github.com/DavidLim93/phase-3-sinatra-react-project.git">Task Tracker</a></li>
            <li>Rails: <a href="https://github.com/DavidLim93/Phase-4-project-game-reviews.git">Game Review</a></li>
            <li>Final Project: <a href="https://github.com/DavidLim93/Phase-5-Pokemon-Memory-Game.git">Pokemon Memory Game</a></li>
        </ul>
    </div>
  )
}
