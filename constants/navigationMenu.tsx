import { IconAd2, IconLayoutDashboard } from "@tabler/icons-react";
import { DASHBOARD_PATH, MY_EXAM_PATH } from "./routes";

export const NAVIGATION_MENU: Array<NavigationMenuData> = [
  {
    href: DASHBOARD_PATH,
    icon: <IconLayoutDashboard />,
    title: "Dashboard",
  },
  {
    href: MY_EXAM_PATH,
    icon: <IconAd2 />,
    title: "My Exams",
  },
];
