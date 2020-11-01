import React from 'react';

const Header = ({ header }) => {
  const { name, image, desgination, socialIcons } = header;
  return (
    <>
      <header class='hero'>
        <div class='section-center hero-center'>
          <article class='hero-info'>
            <div class='underline'></div>
            <h1>Hi,</h1>
            <h1>i'm {name}</h1>
            <h4>{desgination}</h4>
            <a href='contact.html' class='btn hero-btn'>
              hire me
            </a>
            {/* -- social icons -- */}
            <ul class='social-icons hero-icons'>
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
