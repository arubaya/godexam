"use client";

import ExamRulesCard from "@/components/molecules/ExamRulesCard";
import OngoingExam from "@/components/organisms/OngoingExam";
import useExamStore from "@/stores/useExamStore";
import { Box } from "@mui/material";
import React from "react";

const ExamPageById = () => {
  const { isStartExam } = useExamStore();
  return (
    <Box className="flex flex-col items-stretch flex-1 w-full px-3 ">
      {!isStartExam ? <ExamRulesCard /> : <OngoingExam />}
    </Box>
  );
};

export default ExamPageById;
