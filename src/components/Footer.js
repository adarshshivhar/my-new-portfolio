import React from 'react';

const Footer = ({ footer }) => {
  const { socialIcons } = footer;
  return (
    <>
      <footer class='footer'>
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

        <p>
          &copy; <span id='date'></span> Adarsh Shivhare. all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
