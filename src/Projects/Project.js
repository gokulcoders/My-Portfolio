// Project.js
import React, { useState } from 'react';
import './Project.css';

const Project = ({ img, title, desc, link }) => {
  const [show, setShow] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="project" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {show ? (
          <div>
            
            <p className="mycontent">{desc}</p>
            
          </div>
        ) : (
          <img src={img} alt={title} />
        )}
      </div>
    </a>
  );
}

export default Project;
