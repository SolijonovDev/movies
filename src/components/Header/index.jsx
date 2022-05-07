import React from "react";
import s from "./header.module.scss";

export const Header=()=> {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <h2>Logo</h2>
          <button>Profile</button>
        </div>
      </div>
    </header>
  );
}
