import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyles = {
    display: 'inline-block',
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: '#702963',
    textDecoration: 'none',
    color: 'white',
    border: '2px solid #fff',
  };

  const activeLinkStyles = {
    background: 'white',
    color: '#702963',
  };

  return (
    <div>
      <ul className='list'>

          <NavLink exact to="/" style={linkStyles} activeStyle={activeLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/blogs" style={linkStyles} activeStyle={activeLinkStyles}>
            Blogs
          </NavLink>
          <NavLink to="/projects" style={linkStyles} activeStyle={activeLinkStyles}>
            Projects
          </NavLink>
          </ul>
    </div>
  );
}
