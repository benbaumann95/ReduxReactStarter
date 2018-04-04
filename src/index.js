import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB5JC9LnjZ0K8zknyDtYD7T3g6kUx72kgQ';

// Create a new component that should produce some HTML
// Functional based component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
