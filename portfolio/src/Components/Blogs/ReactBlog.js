import React from 'react'
import HPhouses from './images/HPhouses.jpeg'

export default function ReactBlog() {
  return (
    <div className="para">
        <h1 className="heading ">React Blog</h1>
    <p >
        I do have to admit, React was probably one of the hardest language that I have learnt during my bootcamp course so far. From components to figuring out which method to use in each component had me thinking to ensure each code worked. I guess it all comes down to the more you code and practice, the easier it becomes. 
    </p>
    <p >
        For the React project, I decided to go with a Harry Potter theme, as who doesn't like Harry Potter. If you are one of them who does not like it, we can not be friends. Sorry. I am just joking!
    </p>
    <img src={HPhouses} alt="HPhouses" className="pic " />
    <p > 
        As there a fair bit of spells available in the world of magic, I have decided to create a website to see each spells and the descriptions. 
    </p>
    <p >
        There are 3 main components to the website. Home page, spells and new spell. You will be able to see the list of spells under spells. It does contain most of the spells but there may missing spells.
    </p>
    <p >
        That's where New Spell component comes in. This will allow you to add spells to the list and let it show under the spells component. You will need to add the title of the spell and the description of the spell. Easy as pie!
    </p>
    <p >
        If you would like to see the website live, please click <a href="https://harrypotterspells.netlify.app/">here</a> or go to https://harrypotterspells.netlify.app/
    </p>
    </div>
  )
}
