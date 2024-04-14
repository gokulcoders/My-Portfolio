// ProjectContainer.js
import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Projects/Project'; 
import './ProjectContainer.css';

const ProjectContainer = () => {
  const clientProjects = [
    {
      img: 'https://themewagon.com/wp-content/uploads/2018/07/Book-Free-Book-Landing-Website-Template.jpg',
      title: 'Project 1',
      desc: (
        <>
          Explore a world of literature at our Online Book Store – where reading meets convenience. Browse, discover, and shop seamlessly for your next captivating read.
        </>
      ),
      link: 'https://gokulcoders.github.io/book-store/',
    },
    {
      img: 'https://themewagon.com/wp-content/uploads/2022/02/screencapture-technext-github-io-gohub-v1-0-0-2022-02-08-10_33_52-1.png',
      title: 'Project 2',
      desc: (
        <>
          Embark on unforgettable journeys with our Travel Exploration webpage. Discover dream destinations and plan your next adventure effortlessly.
        </>
      ),
      link: 'https://example.com/project2',
    },
    {
      img: 'https://themewagon.com/wp-content/uploads/2020/05/burger-1.jpg',
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
