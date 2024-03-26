import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import "./Topcontent.css";

const Topcontent = () => {
  const [typedH1, setTypedH1] = useState('');
  const [typedP, setTypedP] = useState('');

  const textToType = {
    h1: "Mr. Gokul",
    p: "A Professional Web and App Developer",
  };

  useEffect(() => {
    const typeText = (target, text, setStateFunction) => {
      let charIndex = 0;
      const intervalId = setInterval(() => {
        setStateFunction((prevTypedText) => text.slice(0, charIndex++));

        if (charIndex > text.length) {
          clearInterval(intervalId);
        }
      }, 30); 
    };

    typeText('h1', textToType.h1, setTypedH1);
  }, [textToType.h1]);

  useEffect(() => {
    const typeText = (target, text, setStateFunction) => {
      let charIndex = 0;
      const intervalId = setInterval(() => {
        setStateFunction((prevTypedText) => text.slice(0, charIndex++));

        if (charIndex > text.length) {
          clearInterval(intervalId);
        }
      }, 60); 
    };

    setTimeout(() => typeText('p', textToType.p, setTypedP), 1500);
  }, [textToType.p]);

  return (
    <div className="topcontent">
      <div className="topcontent_container">
        <h1>{typedH1}</h1>
        <p>{typedP}</p>
        <a href="www.google.com">
          <button className="topcontent_downloadbutton">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topcontent_workbutton">My Work</button>
        </Link>
      </div>

      
    </div>
  );
}

export default Topcontent;
