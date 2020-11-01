import React, { useState } from 'react';

const Navbar = () => {
  const [sideBar, setSideBar] = useState('');

  const toggleSideBar = () => {
    sideBar === '' ? setSideBar('show-sidebar') : setSideBar('');
  }

  return (
    <>
      {/* Navbar */}
      <nav className='nav'>
        <div className='nav-center'>
          {/* nav header */}
          <div className='nav-header'>
            <i className='fas fa-code nav-logo'></i>
            <button className='nav-btn' type='submit' onClick={toggleSideBar}>
              <i className='fas fa-bars'></i>
            </button>
          </div>
          {/* nav-links */}
          <ul className='nav-links'>
            <li>
              <a href='index.html'>home</a>
            </li>
            <li>
              <a href='about.html'>about</a>
            </li>
            <li>
              <a href='projects.html'>projects</a>
            </li>
            <li>
              <a href='contact.html'>contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Sidebar */}
      <aside className={`sidebar ${sideBar}`}>
        <div>
          <button className='close-btn' onClick={toggleSideBar}>
            <i className='fas fa-times'></i>
          </button>
          {/* nav-links */}
          <ul className='sidebar-links'>
            <li>
              <a href='index.html'>home</a>
            </li>
            <li>
              <a href='about.html'>about</a>
            </li>
            <li>
              <a href='projects.html'>projects</a>
            </li>
            <li>
              <a href='contact.html'>contact</a>
            </li>
          </ul>
          {/*social icons */}
          <ul className='social-icons'>
            <li>
              <a href='https://www.twitter.com' className='social-icon'>
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' className='social-icon'>
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' className='social-icon'>
                <i className='fab fa-squarespace'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' className='social-icon'>
                <i className='fab fa-behance'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' className='social-icon'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* Sidebar End */}
    </>
  );
};

export default Navbar;
