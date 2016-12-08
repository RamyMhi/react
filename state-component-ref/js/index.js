"use strict";

var Comment = React.createClass({
  displayName: "Comment",

  getInitialState: function getInitialState() {
    return { editing: false };
  },
  edit: function edit() {
    this.setState({ editing: true });
  },
  save: function save() {
    var val = this.refs.Text1.value;
    this.props.updateCommentprop(this.refs.Text1.value, this.props.index);
    this.setState({ editing: false });
  },
  remove: function remove() {
    this.props.deleteCommentprop(this.props.index);
  },
  renderNormal: function renderNormal() {
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
  },
  renderForm: function renderForm() {
    return React.createElement(
      "div",
      { className: "commentContainer" },
      React.createElement("textarea", { ref: "Text1", defaultValue: this.props.children }),
      React.createElement(
        "button",
        { onClick: this.save, className: "btn btn-success" },
        "save"
      )
    );
  },
  render: function render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
});

var Board = React.createClass({
  displayName: "Board",

  //initial function create comments state
  getInitialState: function getInitialState() {
    return {
      comments: []
    };
  },
  //add fucntion
  add: function add(text) {
    var arr = this.state.comments;
    arr.push(text);
    this.setState({ comments: arr });
  },
  //remove comment
  removeComment: function removeComment(i) {
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({ comments: arr });
  },
  // update comment
  updateComment: function updateComment(newText, i) {
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({ comments: arr });
  },
  //show comment
  eachComment: function eachComment(text, i) {
    return React.createElement(
      Comment,
      { key: i, index: i, updateCommentprop: this.updateComment, deleteCommentprop: this.removeComment },
      text
    );
  },
  //render fucntion
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: this.add.bind(null, "default"), className: "btn-info" },
        "new comment"
      ),
      React.createElement(
        "div",
        { className: "board" },
        this.state.comments.map(this.eachComment)
      )
    );
  }
});
ReactDOM.render(React.createElement(Board, null), document.getElementById("container"));