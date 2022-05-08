import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./../../store/actions/moviesActions";
import { setPagination } from "../../store/reducers/moviesSlice";

export default function PaginationControlled() {
  const dispatch = useDispatch();
  const { page, items_per_page, total_items } = useSelector(
    (state) => state.movies
  );
  const handleChange = (event, value) => {
    dispatch(setPagination(+value));
    dispatch(fetchMovies(+value));
    window.scrollTo(0,0);
  };

  return (
    <Pagination
      size="medium"
      color="primary"
      variant="text"
      count={Math.ceil(total_items / items_per_page)}
      page={page}
      onChange={handleChange}
    />
  );
}
