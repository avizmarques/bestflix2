import React, { Component } from "react";
import BestflixCard from "./BestflixCard";
import "./style.css";

export default class Bestflix extends Component {
  state = {
    movies: null
  };

  componentDidMount = async () => {
    const res = await fetch(
      "http://api.themoviedb.org/3/discover/movie?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9&sort_by=popularity.desc"
    );
    const parsedRes = await res.json();
    const movieInfo = parsedRes.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      year: movie.release_date.substring(0, 4),
      overview: movie.overview,
      imgUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      votes: 0
    }));
    this.updateMovies(movieInfo);
  };

  updateMovies = movies => {
    this.setState({ movies });
  };

  displayMovieCards = movies => {
    return movies.map((movie, i) => (
      <BestflixCard
        key={i}
        id={movie.id}
        title={movie.title}
        year={movie.year}
        imgUrl={movie.imgUrl}
        votes={movie.votes}
        addVotes={() => this.addVotes(movie.id)}
        subtractVotes={() => this.subtractVotes(movie.id)}
      />
    ));
  };

  addVotes = id => {
    return this.setState({
      movies: this.state.movies.map(movie =>
        movie.id === id ? { ...movie, votes: movie.votes + 1 } : movie
      )
    });
  };

  subtractVotes = id => {
    return this.setState({
      movies: this.state.movies.map(movie =>
        movie.id === id
          ? movie.votes !== 0
            ? { ...movie, votes: movie.votes - 1 }
            : movie
          : movie
      )
    });
  };

  render() {
    return (
      <div>
        <h1>Bestflix</h1>
        <h2>Most popular movies</h2>
        <div className="cardContainer">
          {this.state.movies
            ? this.displayMovieCards(this.state.movies)
            : "Loading..."}
        </div>
      </div>
    );
  }
}
