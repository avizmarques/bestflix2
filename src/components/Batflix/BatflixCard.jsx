import React, { Component, Fragment } from "react";
export class BatflixCard extends Component {
  state = {};

  renderMovieCard = movie => {
    return (
      <section
        className="card"
        style={{
          display: "inline-block",
          maxWidth: "20vw",
          margin: "2rem",
          padding: "2rem"
        }}
      >
        <section className="cardImage">
          <img src={this.props.imgUrl} alt="" style={{ maxWidth: "18vw" }} />
        </section>
        <section className="cardInfo">
          <h1>{this.props.title}</h1>
          <p>{this.props.year.slice(0, 4)}</p>
        </section>
        <section className="vote">
          <button onclick={this.upvoteClick}>+</button>
          {this.props.numLikes}
          <button onclick={this.downvoteClick}>-</button>
        </section>
      </section>
    );
  };

  upvoteClick = () => {
    this.props.incrementLikes(this.props.id);
  };
  downvoteClick = () => {
    this.props.decrementLikes(this.props.id);
  };

  render() {
    return <Fragment>{this.renderMovieCard()}</Fragment>;
  }
}
export default Fragment;
