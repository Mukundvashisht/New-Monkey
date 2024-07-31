import './App.css';

// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  // static propTypes = { second: third }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" country="in" category="General" />}></Route>
            <Route path="/business" element={<News key="business" country="in" category="Business" />}></Route>
            <Route path="/entertainment" element={<News key="entertainment" country="in" category="Entertainment" />}></Route>
            <Route path="/health" element={<News key="health" country="in" category="Health" />}></Route>
            <Route path="/science" element={<News key="science" country="in" category="Science" />}></Route>
            <Route path="/sports" element={<News key="sports" country="in" category="Sports" />}></Route>
            <Route path="/technology" element={<News key="technology" country="in" category="Technology" />}></Route>
          </Routes>

        </Router>
      </div>
    )
  }
}

