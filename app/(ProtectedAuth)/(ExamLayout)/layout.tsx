"use client";

import { HEADER_HEIGHT } from "@/constants/appVariables";
import { Box } from "@mui/material";
import HeaderExam from "@/components/molecules/HeaderExam";
import FooterExam from "@/components/molecules/FooterExam";
import useExamStore from "@/stores/useExamStore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LoadingState from "@/components/molecules/LoadingState";

export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams<{ id: string }>();
  const { isStartExam, activeExam, resetExamStore } = useExamStore();
  const [_hasHydrated, setHasHydrated] = useState(false);
  useEffect(() => {
    useExamStore.persist.rehydrate();
    setHasHydrated(true);
  }, []);
  useEffect(() => {
    if (_hasHydrated && activeExam.id !== id) {
      // resetExamStore();
    }
  }, [_hasHydrated, activeExam.id, id, resetExamStore]);
  if (!_hasHydrated) {
    return <LoadingState withProgress />;
  }
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

        {isStartExam && <FooterExam />}
      </Box>
    </Box>
  );
}
