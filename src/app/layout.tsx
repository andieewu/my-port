import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./anim.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Andika Wisnumurti",
  description:
    "Portfolio of Andika Wisnumurti - Frontend Developer & AI Engineer",
  icons: {
    icon: "/assets/img/favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-neutral-900 text-black dark:text-white`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
