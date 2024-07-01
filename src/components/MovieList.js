// src/components/MovieList.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched, rateMovie, reviewMovie } from '../redux/movieSlice';

const MovieList = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [rating, setRating] = useState({});
  const [review, setReview] = useState({});

  const handleRatingChange = (id, newRating) => {
    setRating({ ...rating, [id]: newRating });
    dispatch(rateMovie({ id, rating: newRating }));
  };

  const handleReviewChange = (id, newReview) => {
    setReview({ ...review, [id]: newReview });
    dispatch(reviewMovie({ id, review: newReview }));
  };

  return (
    <div className="container">
      <h2>My Watchlist</h2>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Release Year: {movie.releaseYear}</p>
              <p>Genre: {movie.genre}</p>
              <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
              {movie.watched && (
                <>
                  <p>Rating: {movie.rating}</p>
                  <p>Review: {movie.review}</p>
                </>
              )}
            </div>
            <div className="movie-actions">
              <button
                className="button"
                onClick={() => dispatch(toggleWatched(movie.id))}
              >
                {movie.watched ? 'Unwatch' : 'Watch'}
              </button>
              <button
                className="button"
                onClick={() => dispatch(deleteMovie(movie.id))}
              >
                Delete
              </button>
            </div>
            {movie.watched && (
              <div className="rating-review">
                <label>
                  Rating:
                  <input
                    type="number"
                    value={rating[movie.id] || movie.rating}
                    onChange={(e) => handleRatingChange(movie.id, parseInt(e.target.value))}
                    min="1"
                    max="5"
                  />
                </label>
                <label>
                  Review:
                  <textarea
                    value={review[movie.id] || movie.review}
                    onChange={(e) => handleReviewChange(movie.id, e.target.value)}
                  />
                </label>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
