import React from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

const App = () => {
  return (
    <div className="App">
      <h1>Movie Watchlist</h1>
      <AddMovie />
      <MovieList />
    </div>
  );
};

export default App;
