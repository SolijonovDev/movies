import React from "react";
import s from "./header.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.inner}>
          <Link to="/" className={s.header_logo}>
            <h2>Logo</h2>
          </Link>
          <Button className={s.header_btn} variant="text" color="primary">Kirish</Button>
        </div>
      </div>
    </header>
  );
};
