import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WishSomeone",
  description: "Celebrate someone's birthday, anniversary, graduation, etc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} bg-primary`}>{children}</body>
    </html>
  );
}
