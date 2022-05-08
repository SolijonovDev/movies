import React from "react";
import s from "./home.module.scss";

import { useHistory } from "react-router-dom";

export const Item = ({ movie: v }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push(`/movie/${v.id}`)}
      key={v.id}
      className={s.item}
    >
     <div className={s.item_photo}>
     <img src={v.files.poster_url} alt="pho" />
     </div>
      <h4>{v.title}</h4>
    </div>
  );
};
