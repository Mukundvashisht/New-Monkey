import React, { Component } from "react";
// import Loader from './Loader.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
