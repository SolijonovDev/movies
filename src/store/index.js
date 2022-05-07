import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesReducer from './reducers/moviesSlice'
import movieReducer from './reducers/onemovie';

const rootReducer = combineReducers({
  movies:moviesReducer,
  movie:movieReducer
});


const store = configureStore({
  reducer: rootReducer,
})

export default store

