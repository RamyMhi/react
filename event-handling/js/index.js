"use strict";

var Comment = React.createClass({
  displayName: "Comment",

  edit: function edit() {
    alert("edit btn");
  },
  remove: function remove() {
    alert("remove btn");
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "commentContainer" },
      React.createElement(
        "div",
        { className: "commentText" },
        this.props.children
      ),
      React.createElement(
        "button",
        { onClick: this.edit, className: "btn btn-primary" },
        "edit"
      ),
      React.createElement(
        "button",
        { onClick: this.remove, className: "btn btn-danger" },
        "remove"
      )
    );
  }
});
ReactDOM.render(React.createElement(
  "div",
  { className: "board" },
  React.createElement(
    Comment,
    null,
    "text 1"
  ),
  React.createElement(
    Comment,
    null,
    "text 2"
  ),
  React.createElement(
    Comment,
    null,
    "text 3"
  )
), document.getElementById("container"));