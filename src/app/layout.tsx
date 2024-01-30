import type { Metadata } from "next";
import StyledComponentsRegistry from "@/style/lib/registry";
import { Lalezar } from "next/font/google";

import icon from "../../public/icon.svg";

const lalezar = Lalezar({
  weight: ["400"],
  style: ["normal"],
  subsets: ["arabic", "latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Team Builder",
  description: "YABABABABABu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={icon.src} sizes="32x32" type="image/svg+xml" />
      </head>
      <body className={lalezar.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
