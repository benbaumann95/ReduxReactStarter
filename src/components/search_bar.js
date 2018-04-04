import React, { Component } from 'react';

//class based component
class SearchBar extends Component {
  //initialize state in a class based component (functional components do not have state)
  constructor(props) {
    super(props);

    //create new object. Will want to record property 'term'(search) on state
    //update it to be the value of the input
    //only inside of our constructor function do we change our state like this
    //everywhere else, we use this.setState, other than referencing
    this.state = { term: '' };
  }

  render() {
    //onChange = React defined property
    return (
      //Always wrap JS variable in {} inside of JSX
      <div>  
        <input onChange={event => this.setState({ term: event.target.value })} />
        Value of the input: {this.state.term}
      </div>
    );
  }
}

// event handler
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  // }


export default SearchBar;
