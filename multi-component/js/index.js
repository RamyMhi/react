"use strict";

var Text1 = React.createClass({
  displayName: "Text1",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "title "
      ),
      React.createElement(
        "p",
        null,
        "something here"
      )
    );
  }
});

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Text1, null),
  React.createElement(Text1, null),
  React.createElement(Text1, null)
), document.getElementById("container"));