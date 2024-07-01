import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../redux/movieSlice';

const Movie = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.genre}</p>
      <button onClick={() => dispatch(toggleWatched(movie.id))}>
        {movie.watched ? 'Unwatch' : 'Watch'}
      </button>
      <button onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>
    </div>
  );
};

export default Movie;
