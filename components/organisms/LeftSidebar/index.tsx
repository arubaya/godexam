"use client";

import React from "react";
import SidebarNavigation from "../SidebarNavigation";
import { Box, Drawer } from "@mui/material";
import useGlobalStateStore from "@/stores/useGlobalStateStore";
import { SIDEBAR_WIDTH } from "@/constants/appVariables";

const LeftSidebar = () => {
  const { openSidebarNavigation, setOpenSidebarNavigation } =
    useGlobalStateStore();

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenSidebarNavigation(open);
  };
  return (
    <>
      <Box
        className="fixed hidden min-h-screen p-3 transition-all md:flex"
        sx={{
          width: SIDEBAR_WIDTH,
        }}
      >
        <SidebarNavigation />
      </Box>
      <Drawer
        variant="temporary"
        open={openSidebarNavigation}
        anchor="left"
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: SIDEBAR_WIDTH,
          },
        }}
      >
        <SidebarNavigation />
      </Drawer>
    </>
  );
};

export default LeftSidebar;
