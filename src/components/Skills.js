import React from 'react';

const Skills = ({ skills }) => {
  return (
    <>
      <section class='section skills' id="skills">
        {/* -- section title -- */}
        <div class='section-title'>
          <h2>skills</h2>
          <div class='underline'></div>
        </div>
        {/* --end of section title -- */}
        <div class='section-center skills-center'>
          {skills.map((item) => {
            const { id, domain, tech } = item;
            return (
              <article key={id}>
                <h3>{domain}</h3>
                {/* -- single skill -- */}
                {tech.map((techItem) => {
                  const {id, name, profeciency} = techItem
                  return (
                    <div class='skill' key={id}>
                      <p>{name}</p>
                      <div class='skill-container'>
                        <div class={`skill-value value-${profeciency}`}></div>
                        <p class={`skill-text skill-text-${profeciency}`}>
                          {profeciency}%
                        </p>
                      </div>
                    </div>
                  );
                })}
                {/* --end of  single skill -- */}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
