import React, { useState } from 'react';

const Navbar = () => {
  const [sideBar, setSideBar] = useState('');

  const toggleSideBar = () => {
    sideBar === '' ? setSideBar('show-sidebar') : setSideBar('');
  }

  return (
    <>
      {/* Navbar */}
      <nav class='nav'>
        <div class='nav-center'>
          {/* nav header */}
          <div class='nav-header'>
            <i class='fas fa-code nav-logo'></i>
            <button class='nav-btn' type='submit' onClick={toggleSideBar}>
              <i class='fas fa-bars'></i>
            </button>
          </div>
          {/* nav-links */}
          <ul class='nav-links'>
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
      <aside class={`sidebar ${sideBar}`}>
        <div>
          <button class='close-btn' onClick={toggleSideBar}>
            <i class='fas fa-times'></i>
          </button>
          {/* nav-links */}
          <ul class='sidebar-links'>
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
          <ul class='social-icons'>
            <li>
              <a href='https://www.twitter.com' class='social-icon'>
                <i class='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' class='social-icon'>
                <i class='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' class='social-icon'>
                <i class='fab fa-squarespace'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' class='social-icon'>
                <i class='fab fa-behance'></i>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com' class='social-icon'>
                <i class='fab fa-instagram'></i>
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
