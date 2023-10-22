import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | SQL Joins Simplified",
    default: "SQL Joins", // a default is required when creating a template
  },
  description: "Learn what sql joins are, their types, syntax and use cases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
