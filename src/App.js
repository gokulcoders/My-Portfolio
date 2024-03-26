import React, { Component } from 'react';
import Header from './components/Header';
import Topcontainer from './components/Topcontainer/Topcontainer';
import Skillcontainer from './components/Skillcontainer/Skillcontainer';
import ProjectContainer from './ProjectContainer/ProjectContainer';
import Education from './components/ExperencesContainer/Education';
import ContactContainer from './components/ContactContainer/ContactContainer';
class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <Header />
        <Topcontainer />
        <Education />
        <Skillcontainer />
        <ProjectContainer />
        <ContactContainer />
        
        
      </div>
    );
  }
}
 
export default App;
