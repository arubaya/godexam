import { Box, LinearProgress } from "@mui/material";
import React from "react";
import GodExamLogo from "@/assets/images/godexam-logo.svg";
import Image from "next/image";
import classNames from "classnames";

interface LoadingStateProps {
  withProgress?: boolean;
  fullScreen?: boolean;
}

const LoadingState = ({ withProgress, fullScreen }: LoadingStateProps) => {
  return (
    <Box
      className={classNames(
        "flex items-center justify-center w-full min-h-screen",
        { "absolute top-0": fullScreen }
      )}
    >
      {withProgress && (
        <Box className="fixed top-0 w-full">
          <LinearProgress />
        </Box>
      )}
      <Image
        className="animate-bounce"
        src={GodExamLogo}
        alt="Exam Logo"
        width={100}
      />
    </Box>
  );
};

export default LoadingState;
