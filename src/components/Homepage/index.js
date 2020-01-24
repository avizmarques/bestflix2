import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Movies and chill</h1>
        <Link to="/batflix">Batflix</Link> |{" "}
        <Link to="/bestflix">Bestflix</Link>
      </div>
    );
  }
}
