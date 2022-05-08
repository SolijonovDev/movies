import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./../actions/moviesActions";

const initialState = {
  loading: false,
  page: 1,
  items_per_page: 5,
  total_items: 10,
  movies: [],
};

const moviesReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPagination(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.data.movies;
      state.items_per_page = action.payload.data.items_per_page;
      state.total_items = action.payload.data.total_items;
      state.loading = false;
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.loading = false;
      alert("Error");
    });
  },
});
export const { setPagination } = moviesReducer.actions;

export default moviesReducer.reducer;
