import React from 'react';
import './App.css';
import Example from './Example';
import About from './About';
import CurrentWork from './CurrentWork';
import NavigationBar from './NavigationBar';
import IAm from './IAm';
import Experience from './Experience';

import cityimage from './assets/images/less-hectic-city.jpg';

function App() {
  //todo: add all coursework and fill out experience (starups, code, etc)
  return (
    <div className="App">
      <header className="App-header">
      <h1>James Y. Li</h1>
        <img src={cityimage} className="city-image" alt="image of a city" />
        <IAm/>
        <Example number ={5}/>
      </header>
      <NavigationBar/>
      <About/>
      <CurrentWork/>
      <Experience/>
    </div>
    
  );
}

export default App;

