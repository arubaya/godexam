import { HEADER_DASHBOARD_HEIGHT } from "@/constants/appVariables";
import { Box } from "@mui/material";
import Header from "@/components/organisms/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header title="Dashboard" subtitle="Exam" />
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
