"use strict";

var Gene = React.createClass({
  displayName: "Gene",

  render: function render() {
    return React.createElement(
      "h1",
      null,
      "hello"
    );
  }
});
ReactDOM.render(React.createElement(Gene, null), document.getElementById("container"));