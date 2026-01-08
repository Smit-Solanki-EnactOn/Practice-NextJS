import { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: {
    default: "Next.js Practice - Tutorial",
    template: "%s | Next.js tutorial"
  },
  description: "Next.js Practice - Tutorial Descripton",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}