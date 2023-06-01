import React from 'react'
import Pikachu from './images/Pikachu.png'
import pokeball from './images/pokeball.jpg'
import Pokedex from './images/Pokedex.png'

export default function JavaScriptBlog() {
  return (
    <div className="para">
    <h1 className="h2">Javascript Blog</h1>
    <p >
        Learning Javascript was definitely challenging as there are a lot of information and methods you will need to remember in order to apply the methods to ensure the website is functional. 
    </p>
    <p>
        Being a huge Pokemon fan, I thought what would be more enjoyable than to create a pokedex. I created a pokedex where it shows the pokemon id, name, types and abilities. Hopefully in the future, I will expand on the pokedex to include moves each pokemon learns at which level.
    </p> 
    <p>
        Getting the project started was pretty easy as a I had an idea how I wanted it to look - search pokemon, show results with the sprite and the information showing next to the pokemon. Using the pokemon API provided by <a href="https://pokeapi.co/docs/v2">PokeAPI</a> was a blessing in disguise as it had all the information that I needed to start the project.
    </p>
    <p>
        With the project, I decided to go for the looks before I started to fetch the API and add the information into the div. Got to make it pretty! 😊
    </p>
        <img className="pikachu" src={Pikachu} alt="pickachu" />
    <p>
        Fetching the API and rendering the information into the innerHTML was a very interesting process as there were so many arrays from the API that you could have used. Luckily, I knew what I wanted when I was planning the project. Once I was able to fetch the arrays I needed and rendered the information to the innerHTML, the tricky part was resetting the innerHTML before every search so it only showed one pokemon at a time and not a full list of pokemon you searched for. Researching how to do this, just changing the container that has the pokemon information to just show " " seemed to do the trick but I do know there are more sophisticated ways to do this. Hopefully in the future, I will be able to change the codes in the JS file to be more sophisticated.
    </p>
    <p>
        The other tricky thing that I faced while doing this project was the abilities, as a pokemon can have up to 3 abilities. Seeing what the best option would be to navigate through this, I decided to use ternary operator for the 2nd and 3rd skill where I ask JS to return "" if it was null and if true, to return the ability. Once the const returned the ability, I had to remove the special characters if the ability was two words, as there would be a hyphen in between the words. Using the .replace method, it was as easy as pie.
    </p>
    <p>
        Once I was happy with the information from each fetch, I added the event listener for the search function. As there was an issue where the search function was case sensitive, I had to research how to make the search function case insensitive. Knowing i had to use .toLowerCase(), I tried different areas where the code will make the value lower cases but was not successful. As I could not figure out how to do it, I had to reach out to my mentor Sam. Luckily, Sam was able to tell me exactly where I needed to put the code and it worked! Adding to the fetch function where we put the value of the search function, it did wonders. 
    </p>
    <p>
        Finally to complete the project, I added a comment section below where the pokemon information would show. Adding the comment section was pretty simple. Adding a new function for the comment and creating new element to show the comment, then rendering the comment to the div was all I needed. Obviously I change the coloring for the comment section to make it more colorful.
    </p>
    <p>
        AND VOILA!!!!! The pokedex has now been completed with the function to search for any pokemon using their pokemon id or name, and shows the front sprite and a little bit of information of the pokemon.
    </p>
    <p>
        Here is an example of the final product:
    </p>
   
    <img className="pokedex" src={Pokedex} alt="Pokedex" />
    <br/>
    If you would like to see the pokedex, click here: <a href="https://davidlim93.github.io/Pokedex/"><img className="logo" src={pokeball} alt="Pokeball" /></a>


    </div>
  )
}
