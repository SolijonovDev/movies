import { createSlice } from "@reduxjs/toolkit";
import { fetchOneMovie } from "./../actions/onemovieActions";

const initialState = {
  loading: false,
  files: {},
  name: "",
  desc:"",
  year: 0,
  countries: "",
};

const movieReducer = createSlice({
  name: "movie",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchOneMovie.fulfilled, (state, action) => {
      const res = action.payload.movie;
      state.name = res.title;
      state.desc=res.description;
      state.year = res.year;
      state.countries=res.countries_str;
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
