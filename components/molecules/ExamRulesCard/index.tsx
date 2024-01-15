import Card from "@/components/atoms/Card";
import { EXAM_RULES } from "@/constants/exams";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ExamRulesCard = () => {
  return (
    <Box className="flex flex-col w-full gap-2">
      <Card>
        <Typography color="secondary.main" variant="h5" className="font-bold">
          Exam Rules
        </Typography>
      </Card>
      <Card>
        {EXAM_RULES.map((examRule) => (
          <Box key={examRule.id} component="section">
            <Typography variant="h6" className="font-semibold">
              {examRule.ruleTitle}
            </Typography>
            <Box component="ul" className="flex flex-col w-full gap-1 mt-2">
              {examRule.rules.map((rule, index) => (
                <Box key={index} component="li">
                  <Typography>{rule}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
        <Box className="flex items-center justify-end">
          <Button variant="contained" size="small">
            Agree & Start Exam
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ExamRulesCard;
