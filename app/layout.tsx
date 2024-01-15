import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import ThemeRegistry from "@/themes/ThemeRegistry";
import { APP_DESCRIPTION, APP_NAME } from "@/constants/appIdentity";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="tailwind-root" className={classNames("", outfit.className)}>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
