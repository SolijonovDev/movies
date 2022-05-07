import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../http'



export const fetchMovies = createAsyncThunk(
    'movies/fetchAll',
    async (id, thunk) => {
        try {
            console.log("fetchmovie id",id);
            const response = await Api.getMovies(id)
            return response.data;
        } catch (e) {
            return thunk.rejectWithValue("Error ")
        }
    }
)
