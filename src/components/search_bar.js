import React, { Component } from 'react';

//class based component
class SearchBar extends Component {
  //initialize state in a class based component (functional components do not have state)
  constructor(props) {
    super(props);

    //create new object. Will want to record property 'term'(search) on state
    //Need to keep track of some awareness of state
    //update it to be the value of the input
    //only inside of our constructor function do we change our state like this
    //everywhere else, we use this.setState, other than referencing
    this.state = { term: '' };
  }

//onChange = React defined property
//Always wrap JS variable in {} inside of JSX

//Value of the input: {this.state.term}
//inital value is set equal to an empty string
//when user enters some text, the state is updated to this.state.term = changed text value
//value of the input has not actually changed. only called event handler with the new value
//event handler runs updating this.state.term to be that new value
//user only triggers an event, not actually change input Value
//because we updated the state of that event that causes the value of the input to change

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
      // onChange={event => this.setState({ term: event.target.value })}
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// event handler
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  // }

export default SearchBar;
