import React, { Component } from "react";

export default class BestflixCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.year}</p>
        <img src={this.props.imgUrl} />
        <div>
          Votes
          <button onClick={this.props.addVotes}>+</button> {this.props.votes}{" "}
          <button onClick={this.props.subtractVotes}>-</button>
        </div>
      </div>
    );
  }
}
