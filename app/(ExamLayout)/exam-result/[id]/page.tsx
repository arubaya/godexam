"use client";

import ExamResult from "@/components/organisms/ExamResult";
import useExamStore from "@/stores/useExamStore";
import { Box } from "@mui/material";
import React, { useEffect } from "react";

const ExamResultPageById = () => {
  const { setStartExam, setRunningTime } = useExamStore();
  useEffect(() => {
    setRunningTime(0);
    setStartExam(false);
  }, [setRunningTime, setStartExam]);
  return (
    <Box className="flex flex-col items-stretch flex-1 w-full px-3 ">
      <ExamResult />
    </Box>
  );
};

export default ExamResultPageById;
