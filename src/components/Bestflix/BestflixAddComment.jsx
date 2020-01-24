import React, { Component } from "react";

export default class BestflixAddComment extends Component {
  state = {
    name: "",
    comment: ""
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.comment) {
      console.log("Please fill in a name and a comment");
      return;
    } else {
      this.props.submitNewComment(this.state.name, this.state.comment);
      this.setState({ name: "", comment: "" });
    }
  };

  updateField = e => {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    this.setState({
      [fieldName]: fieldValue
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateField}
          />
          <label>Comment</label>
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.updateField}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
