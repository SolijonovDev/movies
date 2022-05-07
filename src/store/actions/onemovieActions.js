import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../http'



export const fetchOneMovie = createAsyncThunk(
    'onemovie/fetchAll',
    async (id, thunk) => {
        try {
            const response = await Api.getMovie(id)
            return response.data;
        } catch (e) {
            return thunk.rejectWithValue("Error ")
        }
    }
)