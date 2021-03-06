import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./../../store/actions/moviesActions";

import s from "./home.module.scss";
import PaginationControlled from "./../../components/Pagination/index";
import { Item } from "./Item";
import Loading from "../../components/Loading";

export const Home = () => {
  const { movies, loading, page } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!loading) {
      dispatch(fetchMovies(page));
    }
  }, []);

  return (
    <div className={s.home}>
      <div className="container">
        <div className={s.inner}>
          <h2 className={s.home_name}>Filmlar</h2>
          {loading ? (
            <Loading />
          ) : (
            <div className={s.home_items}>
              {(movies.length || <div>Not films</div>) &&
                movies.map((v) => <Item key={v.id + v.title} movie={v} />)}
            </div>
          )}
          <div className={s.home_pagination}>
            <PaginationControlled />
          </div>
        </div>
      </div>
    </div>
  );
};
