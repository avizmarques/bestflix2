import React, { Component } from "react";
import BestflixAddComment from "./BestflixAddComment";

export default class BestflixDetail extends Component {
  state = {
    movie: null,
    comments: []
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9`
    );
    const movie = await res.json();
    this.updateMovie({
      title: movie.title,
      year: movie.release_date.substring(0, 4),
      imgUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      overview: movie.overview
    });
  };

  updateMovie = movie => {
    return this.setState({ movie });
  };

  submitNewComment = (name, comment) => {
    return this.setState({
      comments: [
        ...this.state.comments,
        { name, comment, key: Math.trunc(Math.random() * 1000) }
      ]
    });
  };

  render() {
    const commentsHTML = this.state.comments.map(comment => (
      <div>
        <p>Name: {comment.name}</p>
        <p>Comment: {comment.comment}</p>
      </div>
    ));

    if (this.state.movie) {
      const { title, year, imgUrl, overview } = this.state.movie;
      return (
        <div className="detail">
          <h1>{title}</h1>
          <h2>{year}</h2>
          <img src={imgUrl} />
          <p>{overview}</p>
          <BestflixAddComment submitNewComment={this.submitNewComment} />
          <h3>Comments:</h3>
          {this.state.comments !== [] && commentsHTML}
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}
