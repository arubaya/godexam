import { Box, LinearProgress } from "@mui/material";
import React from "react";
import GodExamLogo from "@/assets/images/godexam-logo.svg";
import Image from "next/image";

interface LoadingStateProps {
  withProgress?: boolean;
}

const LoadingState = ({ withProgress }: LoadingStateProps) => {
  return (
    <Box className="flex items-center justify-center w-full min-h-screen">
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
