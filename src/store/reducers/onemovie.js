import { createSlice } from "@reduxjs/toolkit";
import { fetchOneMovie } from "./../actions/onemovieActions";

const initialState = {
  loading: false,
  id: 0,
  title: "",
  year: 0,
  countries: "",
  files: {},
};

const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchOneMovie.fulfilled, (state, action) => {
      console.log(action.payload);
      const res = action.payload.movie;
      state.id = res.id;
      state.title = res.title;
      state.year = res.year;
      state.files = res.files;
      state.loading = false;
    });
    builder.addCase(fetchOneMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOneMovie.rejected, (state) => {
      state.loading = false;
      alert("Error");
    });
  },
});

export default movieReducer.reducer;
