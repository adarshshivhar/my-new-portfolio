import React from 'react';

const Header = () => {
  return (
    <>
      <header class='hero'>
        <div class='section-center hero-center'>
          <article class='hero-info'>
            <div class='underline'></div>
            <h1>i'm john</h1>
            <h4>freelance web & mobile UI/UX Designer</h4>
            <a href='contact.html' class='btn hero-btn'>
              hire me
            </a>
            {/* -- social icons -- */}
            <ul class='social-icons hero-icons'>
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
          </article>
          <article class='hero-img'>
            <img src='./images/hero-2.jpg' class='hero-photo' alt='john doe' />
          </article>
        </div>
      </header>
    </>
  );
};

export default Header;
