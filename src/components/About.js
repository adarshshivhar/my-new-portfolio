import React from 'react';

const About = ({about}) => {
  const {
    describePart1,
    describePart2,
    aboutImg,
    resume,
  } = about;
  return (
    <>
      <section class='section about'>
        <div class='section-center about-center'>
          {/* -- about img -- */}
          <article class='about-img'>
            <img src={aboutImg} class='hero-photo' alt='about img' />
          </article>
          {/* -- about info -- */}
          <article class='about-info'>
            {/* -- section title -- */}
            <div class='section-title about-title'>
              <h2>about</h2>
              <div class='underline'></div>
            </div>
            {/* --end of section title -- */}
            <p>{describePart1}</p>
            <p>{describePart2}</p>
            <a href={resume} class='btn' target="_blank">
              resume
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
