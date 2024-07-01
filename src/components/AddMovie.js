// src/components/AddMovie.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/movieSlice';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie({ id: Date.now(), title, description, releaseYear, genre, watched: false, rating: 0, review: '' }));
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
  };

  return (
    <div className="container">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Release Year</label>
          <input
            type="number"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <button className="button" type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
