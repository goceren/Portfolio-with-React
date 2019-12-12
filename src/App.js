import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import { Element } from 'react-scroll';
import Copyright from './components/Copyright';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Element name="home">
          <Header />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="portfolio">
          <Portfolio />
        </Element>
        <Copyright/>
      </div>
    )
  }
}
