'use strict';

var CheckBox = React.createClass({
  displayName: 'CheckBox',

  getInitialState: function getInitialState() {
    return { checked: true };
  },

  handleCheck: function handleCheck() {
    this.setState({ checked: !this.state.checked });
  },

  render: function render() {
    var msg;
    if (this.state.checked) {
      msg = 'checked';
    } else {
      msg = 'unchecked';
    }
    return React.createElement(
      'div',
      null,
      React.createElement('input', { type: 'checkbox', onChange: this.handleCheck, defaultChecked: this.state.checked }),
      React.createElement(
        'h3',
        null,
        'checkbox is ',
        msg
      )
    );
  }
});

ReactDOM.render(React.createElement(CheckBox, null), document.getElementById("container"));