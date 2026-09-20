import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "./background";

export const metadata: Metadata = {
  title: "Nanda Kishore Reddy Neelam | Software Engineer",
  description:
    "Portfolio of Nanda Kishore Reddy Neelam, Software Engineer at Amadeus Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}