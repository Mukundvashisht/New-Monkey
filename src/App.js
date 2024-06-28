import logo from './logo.svg';
import './App.css';

// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';

export default class App extends Component {
  // static propTypes = { second: third }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}

