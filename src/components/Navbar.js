import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = ({ sidebar }) => {
  const [sideBar, setSideBar] = useState('');
  const [fix, setFix] = useState('');

  const toggleSideBar = () => {
    sideBar === '' ? setSideBar('show-sidebar') : setSideBar('');
  };

  const fixNavbar = () => {
    if (window.pageYOffset > 80) {
      setFix('navbar-fixed');
    } else {
      setFix('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fixNavbar);
    return () => {
      window.removeEventListener('scroll', fixNavbar);
    };
  });
  const { socialIcons } = sidebar;
  return (
    <>
      {/* Navbar */}
      <nav className={`nav ${fix}`}>
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
              <Link
                to='header'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                about
              </Link>
              {/* <a href='about.html'>about</a> */}
            </li>
            <li>
              <Link
                to='experience'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to='skills'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                skills
              </Link>
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
              <Link
                to='header'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleSideBar}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={toggleSideBar}
              >
                about
              </Link>
              {/* <a href='about.html'>about</a> */}
            </li>
            <li>
              <Link
                to='experience'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={toggleSideBar}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to='skills'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={toggleSideBar}
              >
                skills
              </Link>
            </li>
            <li>
              <Link
                to='education'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={toggleSideBar}
              >
                education
              </Link>
            </li>
          </ul>
          {/*social icons */}
          <ul className='social-icons'>
            {socialIcons.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link} class='social-icon' target='_blank'>
                    <i class={`fab fa-${item.icon}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      {/* Sidebar End */}
    </>
  );
};

export default Navbar;
