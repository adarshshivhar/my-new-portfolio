import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';


const Experience = ({experience}) => {
  
  const [jobs, setJobs] = useState(experience);
  const [value, setValue] = useState(0);
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className='section' id='experience'>
      <div className='title'>
        <h2>expierence</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Experience;
