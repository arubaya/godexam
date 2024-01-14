import {
  HEADER_DASHBOARD_HEIGHT,
  SIDEBAR_WIDTH,
} from "@/constants/appVariables";
import { Box } from "@mui/material";
import LeftSidebar from "@/components/organisms/LeftSidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box component="main" className="flex w-full min-h-screen">
      {/* Sidebar */}
      <LeftSidebar />
      <Box
        component="div"
        className="flex flex-col min-h-screen"
        sx={{
          marginLeft: { xs: "0px", md: `${SIDEBAR_WIDTH}px` },
          width: { xs: "100%", md: `calc(100% - ${SIDEBAR_WIDTH}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
