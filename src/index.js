import React from 'react';
import ReactDOM from 'react-dom'

// Create a new component that should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}


// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));


const App2 = () => {
  const hello = <h1>"Learning React from scratch!"</h1>;
  return hello;
}

ReactDOM.render(<App2 />, document.querySelector('.container-1'));
