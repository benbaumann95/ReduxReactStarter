import React, { Component } from 'react';

class SearchBarPractice extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  render() {
    return (
      <div>
        <input
          value = {this.state.text}
          onChange={event => this.setState({ text: event.target.value })} />
      </div>
    );
  }
}


export default SearchBarPractice;
