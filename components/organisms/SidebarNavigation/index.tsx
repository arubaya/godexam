"use client";

import NavigationItem from "@/components/molecules/NavigationItem";
import { APP_LOGO_MINI } from "@/constants/appIdentity";
import { SIDEBAR_WIDTH } from "@/constants/appVariables";
import { NAVIGATION_MENU } from "@/constants/navigationMenu";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const SidebarNavigation = () => {
  const path = usePathname();
  const menus = useMemo(() => {
    const slicedPath = path.split("/");
    const currentMenu = slicedPath[1];
    return NAVIGATION_MENU.map((navigationMenu) => ({
      ...navigationMenu,
      active: `/${currentMenu}` === navigationMenu.href,
    }));
  }, [path]);
  return (
    <Box
      className="fixed flex min-h-screen p-3"
      sx={{
        width: SIDEBAR_WIDTH,
      }}
    >
      <Box className="flex flex-col self-stretch w-full p-3">
        <Box className="flex items-center self-start w-full gap-2 p-2 mt-2">
          <Image src={APP_LOGO_MINI} alt="exam logo" height={40} />
          <Typography variant="h3" fontWeight={700}>
            GodExam.
          </Typography>
        </Box>
        <Box component="nav" className="flex flex-col gap-2 mt-10">
          {menus.map((menu) => (
            <NavigationItem key={menu.href} {...menu} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNavigation;
