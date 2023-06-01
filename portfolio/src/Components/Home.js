import React from 'react'
import GitHub from './Blogs/images/GitHub.png'
import linkedin from './Blogs/images/linkedin.png'

export default function Home() {
  return (
    <div className='home'>
        <p>Welcome to my portfolio where I will showcase my blogs and projects I have created while studying Software Engineering through Academy XI.</p>
        <ul className='list'>
            <h3>Links</h3>
            <a href="https://github.com/DavidLim93"><img src={GitHub} alt="Github" className='social-logo'/></a>
           <a href="https://www.linkedin.com/in/david-lim-16b4a1210/"><img src={linkedin} alt="LinkedIn" className='social-logo'/></a>
        </ul>
    </div>
  )
}
