import React, { Component, Fragment } from "react";
import { BatflixCard } from "./BatflixCard";
export default class Batflix extends Component {
  state = {
    loading: true,
    categorieData: []
  };
  componentDidMount() {
    fetch(
      "http://api.themoviedb.org/3/search/movie?api_key=b8bbda4fdff3d12c92a0ff51ac4cf6d9&query=batman"
    )
      .then(fetchedCategorieData => fetchedCategorieData.json())
      .then(Movies =>
        this.setState({
          loading: false,
          categorieData: [...Movies.results].map(function(movie) {
            return {
              id: movie.id,
              original_title: movie.original_title,
              overview: movie.overview,
              imgUrl: "http://image.tmdb.org/t/p/w300" + movie.poster_path,
              release_date: movie.release_date,
              numLikes: 0
            };
          })
        })
      );
  }

  incrementLikesMovie = () => {
    this.setState({ numberLikes: this.state.numLikes + 1 });
  };

  decrementLikesMovie = () => {
    this.setState({ numberLikes: this.state.numLikes - 1 });
  };

  displayMovies = movies => {
    return movies.map(movie => {
      return (
        <BatflixCard
          imgUrl={movie.imgUrl}
          title={movie.original_title}
          year={movie.release_date}
          overview={movie.overview}
          key={movie.id}
          incrementLikes={this.incrementLikesMovie}
          decrementLikes={this.decrementLikesMovie}
        />
      );
    });
  };
  render() {
    console.log("This is an test", this.state.categorieData);
    return (
      <Fragment>
        <section className="cardContainer">
          <section className="categorieInfo">
            <h1>batflixContainer categorie title.</h1>
          </section>
          <section className="Cards">
            {this.state.loading && <p>Is still Loading</p>}
            {!this.state.loading &&
              this.displayMovies(this.state.categorieData)}
          </section>
        </section>
      </Fragment>
    );
  }
}
