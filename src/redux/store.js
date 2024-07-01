import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import { loadState, saveState } from '../localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  preloadedState: { movies: preloadedState }
});

store.subscribe(() => {
  saveState(store.getState().movies);
});

export default store;