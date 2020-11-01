import React from 'react';

const Timeline = ({ education }) => {
  return (
    <>
      <section class='section timeline' id='education'>
        {/* -- section title -- */}
        <div class='section-title'>
          <h2>education</h2>
          <div class='underline'></div>
        </div>
        {/* --end of section title -- */}
        <div class='section-center timeline-center'>
          {/* -- single timeline item -- */}
          {education.map((item) => {
            const { collegeOrSchool, degree, duration, cpiOrPercent } = item;
            return (
              <article class='timeline-item'>
                <h4>{collegeOrSchool}</h4>
                <p>
                  <b>
                    {degree} | {duration}
                  </b>
                </p>
                <p>
                  <b>CPI/Percentage:- {cpiOrPercent}</b>
                </p>
                <span class='number'>{item.id}</span>
              </article>
            );
          })}
          {/* -- end of  single timeline item -- */}
        </div>
      </section>
    </>
  );
};

export default Timeline;
