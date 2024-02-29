import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Namecard",
  description: "own your cool digital namecard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <div className="fixed bottom-0 w-full flex items-center justify-center p-4">
          <p className="text-muted/30 font-light text-xs">
            <span className="font-semibold">namecards</span> by abelramadhan
          </p>
        </div>
      </body>
    </html>
  );
}
