import './App.css';

// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  // static propTypes = { second: third }

  render() {
    return (
      <div>
        <Navbar />
        <News country="in" category="science" />
      </div>
    )
  }
}

