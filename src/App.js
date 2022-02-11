import './App.css';
import React from 'react';
import NavBar from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Section from './Components/Section';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

function App() {
  var home = <Home />;
  var about = <About />;
  var experience = <Experience />;
  var resume = <Resume />;
  var contact = <Contact />;

  return (
    <div className="App">
        <NavBar/>
        <Section
          content={home}
          id="section0"
        />
        <Section
          content={about}
          id="section1"
        />
        <Section
          content={experience}
          id="section2"
        />
        <Section
          content={resume}
          id="section3"
        />
        <Section
          content={contact}
          id="section4"
        />
    </div>
  );
}

export default App;

