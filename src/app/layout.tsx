import { Open_Sans } from "next/font/google";

import type { Metadata } from "next";
import "@/shared/styles/globals.css";

const mono = Open_Sans({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Internet Shop",
  description: "Internet Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  );
}
