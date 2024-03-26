// Education.js

import React from 'react';
import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>

      
      <div className="education-entry">
        <h3>Saradha Vidhyalaya Matriculation Higher Secondary School</h3>
        <p className="education-degree">Secondary School Leaving Certificate(SSLC)</p>
        <p className="education-date">Year:2018-2019</p>
      </div>

      
      <div className="education-entry">
        <h3>Sri Venkateshwara Vidhyalaya Higher Secondary School</h3>
        <p className="education-degree">Higher Secondary Certificate(HSC)</p>
        <p className="education-date">Year:2020-2021</p>
        
      </div>

      
      <div className="education-entry">
        <h3>Nandha Engineering College</h3>
        <p className="education-degree">Bachelor of Science and Computer Science</p>
        <p className="education-date">Year:2021-2025</p>
      </div>
    </section>
  );
};

export default Education;
