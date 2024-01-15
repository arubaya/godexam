import Card from "@/components/atoms/Card";
import ExamRulesCard from "@/components/molecules/ExamRulesCard";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ExamPage = () => {
  return (
    <Box className="flex flex-col items-stretch flex-1 w-full px-3 ">
      <ExamRulesCard />
    </Box>
  );
};

export default ExamPage;
