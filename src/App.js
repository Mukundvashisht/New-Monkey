import "./App.css";

// import PropTypes from 'prop-types'
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  // static propTypes = { second: third }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News key="general" country="us" category="General" />}
            ></Route>
            <Route
              path="/business"
              element={<News key="business" country="us" category="Business" />}
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="us"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={<News key="health" country="us" category="Health" />}
            ></Route>
            <Route
              path="/science"
              element={<News key="science" country="us" category="Science" />}
            ></Route>
            <Route
              path="/sports"
              element={<News key="sports" country="us" category="Sports" />}
            ></Route>
            <Route
              path="/technology"
              element={
                <News key="technology" country="us" category="Technology" />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
