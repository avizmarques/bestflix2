import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BestflixCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.year}</p>
        <Link to={`/bestflix/${this.props.id}`}>
          <img src={this.props.imgUrl} />
        </Link>
        <div>
          Votes
          <button onClick={this.props.addVotes}>+</button> {this.props.votes}{" "}
          <button onClick={this.props.subtractVotes}>-</button>
        </div>
      </div>
    );
  }
}
