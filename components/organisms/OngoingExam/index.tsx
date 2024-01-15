import ActiveExamQuestionListCard from "@/components/molecules/ActiveExamQuestionListCard";
import OngoingExamCard from "@/components/molecules/OngoingExamCard";
import { Box } from "@mui/material";
import React from "react";

const OngoingExam = () => {
  return (
    <Box className="flex flex-col-reverse justify-between w-full gap-4 md:flex-row">
      <OngoingExamCard />
      <ActiveExamQuestionListCard />
    </Box>
  );
};

export default OngoingExam;
