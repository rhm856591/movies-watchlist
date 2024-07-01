// src/redux/movieSlice.js

import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    editMovie: (state, action) => {
      const index = state.findIndex(movie => movie.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteMovie: (state, action) => {
      return state.filter(movie => movie.id !== action.payload);
    },
    toggleWatched: (state, action) => {
      const index = state.findIndex(movie => movie.id === action.payload);
      state[index].watched = !state[index].watched;
    },
    rateMovie: (state, action) => {
      const { id, rating } = action.payload;
      const index = state.findIndex(movie => movie.id === id);
      state[index].rating = rating;
    },
    reviewMovie: (state, action) => {
      const { id, review } = action.payload;
      const index = state.findIndex(movie => movie.id === id);
      state[index].review = review;
    }
  }
});

export const { addMovie, editMovie, deleteMovie, toggleWatched, rateMovie, reviewMovie } = movieSlice.actions;

export default movieSlice.reducer;
