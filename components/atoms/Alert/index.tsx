"use client";

import { Snackbar } from "@mui/material";
import React from "react";

import MuiAlert, { AlertProps } from "@mui/material/Alert";

import useGlobalStateStore, {
  INIT_GLOBAL_STATE,
} from "@/stores/useGlobalStateStore";

const MuiAlertCustom = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

const Alert = () => {
  const { alertData, setOpenAlert } = useGlobalStateStore();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(INIT_GLOBAL_STATE.alertData);
  };
  return (
    <Snackbar
      open={alertData.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlertCustom
        onClose={handleClose}
        severity={alertData.severity}
        sx={{ width: "100%" }}
      >
        {alertData.message}
      </MuiAlertCustom>
    </Snackbar>
  );
};

export default Alert;
