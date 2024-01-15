"use client";

import { HEADER_HEIGHT } from "@/constants/appVariables";
import { Box } from "@mui/material";
import HeaderExam from "@/components/molecules/HeaderExam";
import FooterExam from "@/components/molecules/FooterExam";
import useExamStore from "@/stores/useExamStore";

export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAgreeRule } = useExamStore();
  return (
    <Box component="main" className="flex w-full min-h-screen">
      <Box
        component="div"
        className="flex flex-col justify-between w-full min-h-screen"
      >
        <HeaderExam />
        <Box
          className="w-full"
          sx={{
            marginTop: `${HEADER_HEIGHT + 10}px`,
            marginBottom: `${HEADER_HEIGHT + 10}px`,
          }}
        >
          {children}
        </Box>

        {isAgreeRule && <FooterExam />}
      </Box>
    </Box>
  );
}
