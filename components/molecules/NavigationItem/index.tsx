import useGlobalStateStore from "@/stores/useGlobalStateStore";
import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface NavigationItemProps {
  active: boolean;
  href: Url;
  icon: React.ReactElement;
  title: string;
}

const NavigationItem = ({ active, href, icon, title }: NavigationItemProps) => {
  const { setOpenSidebarNavigation } = useGlobalStateStore();
  return (
    <Link href={href}>
      <Box
        onClick={() => setOpenSidebarNavigation(false)}
        className={classNames(
          "flex items-center w-full gap-3 px-4 py-3 transition-all rounded-2xl",
          {
            "text-neutral-500 hover:text-primary-main hover:bg-primary-main/10":
              !active,
            "text-white hover:bg-primary-dark bg-primary-main": active,
          }
        )}
      >
        {icon}
        <Typography variant="body1" className="font-medium text-inherit">
          {title}
        </Typography>
      </Box>
    </Link>
  );
};

export default NavigationItem;
