// ProjectContainer.js
import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Projects/Project'; 
import './ProjectContainer.css';

const ProjectContainer = () => {
  const clientProjects = [
    {
      img: 'https://img.freepik.com/free-psd/banner-bookstore-ad-template_23-2148680419.jpg?w=1380&t=st=1709010109~exp=1709010709~hmac=682776ad190869361f739cbcbc363302b95d6735ed7d6e213f305b47680d336e',
      title: 'Project 1',
      desc: (
        <>
          Explore a world of literature at our Online Book Store – where reading meets convenience. Browse, discover, and shop seamlessly for your next captivating read.
        </>
      ),
      link: 'https://www.google.com/',
    },
    {
      img: 'https://themewagon.com/wp-content/uploads/2022/09/screencapture-technext-github-io-tour-2022-09-22-11_14_20.png',
      title: 'Project 2',
      desc: (
        <>
          Embark on unforgettable journeys with our Travel Exploration webpage. Discover dream destinations and plan your next adventure effortlessly.
        </>
      ),
      link: 'https://example.com/project2',
    },
    {
      img: 'https://img.freepik.com/free-psd/burger-instagram-landing-page-template_23-2148615948.jpg?t=st=1709010249~exp=1709013849~hmac=2f44f733babe0ca872113dd3ffe41e97960a5217ea5a3f015348fb1a4df509b4&w=1380',
      title: 'Project 3',
      desc: (
        <>
          Savor the deliciousness with our Burger Haven webpage. Indulge in mouthwatering flavors crafted to perfection in every bite.
        </>
      ),
      link: 'https://example.com/project3',
    },
    
  ];

  return (
    <Element className="projectcontainer" id="projects">
      <h1>Projects</h1>
      <p>Here are some projects I did</p>
      <div className="projectcontainer__projects">
        {clientProjects.map((project, index) => (
          <Project
            key={index}
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
          />
        ))}
      </div>
    </Element>
  );
}

export default ProjectContainer;
