"use client";

import ExamItem from "@/components/molecules/ExamItem";
import { DUMMY_EXAM_DATA } from "@/constants/exams";
import { Box, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";

const MyExamPage = () => {
  const [searchText, setSearchText] = useState("");
  const processedExamList = useMemo(
    () =>
      DUMMY_EXAM_DATA?.filter((exam) =>
        searchText !== ""
          ? exam.title.toLowerCase().includes(searchText.toLowerCase())
          : true
      ),
    [searchText]
  );
  return (
    <Box className="flex flex-col w-full gap-3">
      <TextField
        label="Search"
        value={searchText}
        margin="normal"
        size="small"
        sx={{ maxWidth: "300px" }}
        autoComplete="off"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Box className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-3">
        {processedExamList.map((exam) => (
          <ExamItem
            key={exam.id}
            id={exam.id}
            title={exam.title}
            examType={exam.examType}
            duration={exam.duration}
            date={exam.date}
            totalQuestion={exam.totalQuestion}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MyExamPage;
