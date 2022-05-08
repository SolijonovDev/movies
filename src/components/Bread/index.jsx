import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';
import s from './bread.module.scss'


export default function CustomSeparator() {

  return (
    <Stack spacing={2}>
      <Breadcrumbs style={{color:"#fff"}} separator="›" aria-label="breadcrumb">
        <Link
        className={s.link}
        to="/"
        >
          Home
        </Link>
        ,
        <Typography  className={s.text}>
          Watch
        </Typography>
        ,
      </Breadcrumbs>
    </Stack>
  );
}
