import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneMovie } from "./../../store/actions/onemovieActions";

import s from "./movie.module.scss";
import Loading from "../../components/Loading";
import CustomSeparator from "../../components/Bread";

export const Movie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, files, name, desc, year, countries } = useSelector(
    (state) => state.movie
  );

  React.useEffect(() => {
    dispatch(fetchOneMovie(id));
  }, [id]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={s.movie}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.movie_bread}>
            <CustomSeparator />
          </div>
          <div className={s.movie_info}>
            <div className={s.movie_photo}>
              <img src={files?.poster_url} alt="pho" />
            </div>
            <div className={s.movie_texts}>
              <h2>{name}</h2>
              <p>{desc}</p>
              <p>Yil: {year}</p>
              <p>Mamlakat: {countries}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
