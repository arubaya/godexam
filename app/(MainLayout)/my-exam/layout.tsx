import { HEADER_DASHBOARD_HEIGHT } from "@/constants/appVariables";
import { Box } from "@mui/material";
import Header from "@/components/molecules/Header";

export default function MyExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title="History" subtitle="My Exam" />
      <Box
        component="main"
        className="w-full h-full px-6 py-4"
        sx={{
          marginTop: `${HEADER_DASHBOARD_HEIGHT}px`,
        }}
      >
        {children}
      </Box>
    </>
  );
}
