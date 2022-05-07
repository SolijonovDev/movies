import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchMovies } from "./../../store/actions/moviesActions";

import s from "./home.module.scss";
import PaginationControlled from "./../../components/Pagination/index";

export const Home = () => {
  const { movies, loading, page } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    dispatch(fetchMovies(page));
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading ... </h2>
      </div>
    );
  }
  return (
    <div className={s.items}>
      <div className="container">
        <div className={s.inner}>
          {(movies.length || <div>Not films</div>) &&
            movies.map((v) => (
              <div
                onClick={() => history.push(`/movie/${v.id}`)}
                key={v.id}
                className={s.item}
              >
                <img src={v.files.poster_url} alt="pho" />
                <h4>{v.title}</h4>
                <p>{v.year}</p>
              </div>
            ))}
          <PaginationControlled />
        </div>
      </div>
    </div>
  );
};
