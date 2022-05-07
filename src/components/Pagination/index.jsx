import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch ,useSelector} from "react-redux";
import { fetchMovies } from "./../../store/actions/moviesActions";
import { setPagination } from "../../store/reducers/moviesSlice";

export default function PaginationControlled() {
  const dispatch = useDispatch();
  const {page}=useSelector(state=>state.movies)
//   const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    // setPage(value);
    dispatch(setPagination(+value))
    dispatch(fetchMovies(+value));
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
