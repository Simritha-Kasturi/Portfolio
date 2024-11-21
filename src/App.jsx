import React from 'react';
import styles from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import {About} from "./components/About/About";
import { Experience } from './components/Experience/Experience';
import {Projects} from "./components/Projects/Projects";
import {Results} from "./components/Results/Results";
import {Attendance} from "./components/Attendance/Attendance";
import {Contact} from "./components/Contact/Contact";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
     <Projects />
     {/* <Results /> 
      <Attendance /> */}
     <Contact />
    </div>
      
  );
}

export default App;
