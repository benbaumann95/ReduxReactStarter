import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    //onChange = React defined property
    return <input onChange={event => console.log(event.target.value)} />;
  }

  // event handler
//   onInputChange(event) {
//     console.log(event.target.value);
//   }
// }


export default SearchBar;
