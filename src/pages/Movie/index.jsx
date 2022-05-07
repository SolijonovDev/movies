import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneMovie } from "./../../store/actions/onemovieActions";

import s from "./movie.module.scss";

export const Movie = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, title, year, countries, files } = useSelector(
    (state) => state.movie
  );

  React.useEffect(() => {
    dispatch(fetchOneMovie(id));
  }, [id]);
  if (loading) {
    return <h4>Yuklanmoqda</h4>;
  }
  return (
    <div className={s.movie}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.movie_info}>
          <div className={s.movie_photo}>
            <img src={files?.poster_url} alt="pho" />
          </div>
          <div className={s.movie_desc}>
            <h2>Id : {id}</h2>
            <h2>{title}</h2>
            <p>Year: {year}</p>
            <p>Contries : {countries}</p>
          </div>
          </div>
          <button className={s.movie_btn} onClick={() => history.push("/")}>Back</button>
        </div>
      </div>
    </div>
  );
};
