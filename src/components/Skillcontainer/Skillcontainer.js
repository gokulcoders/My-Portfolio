import React from 'react';
import { Element } from 'react-scroll';
import Myimg from "../../assets/skills.jpg";
import LinearProgress from '@mui/material/LinearProgress';
import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
    <div>
      <Element className="skillcontainer" id="skills">
        <div className="skillcontainer__image">
          <img src={Myimg} alt="" />
        </div>
        <div className="skillcontainer__text">
          <h2>SKILLSET</h2>
        
        <div className="skillcontainer_skillset">
          <h5>JAVA</h5>
          <div className="skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>HTML & CSS</h5>
          <div className="skillcontainer_slider skillcontainer_slider2">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>JAVASCRIPT</h5>
          <div className="skillcontainer_slider skillcontainer_slider3">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>REACT</h5>
          <div className="skillcontainer_slider skillcontainer_slider4">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>MONGODB</h5>
          <div className="skillcontainer_slider skillcontainer_slider5">
            <LinearProgress variant="determinate" value={95} />
          </div>
        </div>
        <div className="skillcontainer_skillset">
          <h5>UIUX</h5>
          <div className="skillcontainer_slider skillcontainer_slider6">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>

        {/* <section className="my-entry">

         <h1>hii bro</h1>
        </section> */}
        </div>

        
      </Element>
    </div>
  );
};

export default Skillcontainer;
