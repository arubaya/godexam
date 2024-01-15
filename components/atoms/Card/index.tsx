import { Paper, PaperProps } from "@mui/material";
import classNames from "classnames";
import React from "react";

const Card = ({ children, className }: PaperProps) => {
  return (
    <Paper
      className={classNames(
        "flex flex-col gap-3 p-4 border-2 border-white border-solid shadow-lg rounded-xl",
        className
      )}
      elevation={0}
    >
      {children}
    </Paper>
  );
};

export default Card;
