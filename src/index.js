import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD11iA-eBNZjIhZ5FtVJhqTkZEgph6zrXY';

// Create a new component to produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Render in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
