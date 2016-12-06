"use strict";

var Movie = React.createClass({
  displayName: "Movie",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.props.title
      ),
      React.createElement(
        "h3",
        null,
        this.props.genre
      )
    );
  }
});
ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Movie, { title: "Flash", genre: "fantasy" }),
  React.createElement(Movie, { title: "Avatar", genre: "fantasy" })
), document.getElementById("container"));