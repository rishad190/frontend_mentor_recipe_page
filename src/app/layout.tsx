import type { Metadata } from "next";
import { Inter, Young_Serif } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400", // Young Serif typically only comes in regular weight
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recipe Page",
  description: "First Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={youngSerif.className}>{children}</body>
    </html>
  );
}
