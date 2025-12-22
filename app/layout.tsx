import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import { PublicEnvScript } from "next-runtime-env";
import Providers from "@/components/providers/Providers";

const vazir = localFont({
  src: [
    {
      path: "../public/Fonts/Vazir-Thin-FD-WOL.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/Fonts/Vazir-Light-FD-WOL.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Fonts/Vazir-FD-WOL.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Fonts/Vazir-Medium-FD-WOL.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Fonts/Vazir-Bold-FD-WOL.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "دیوار",
  description: "پلتفرم دیوار",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <head>
        <PublicEnvScript />
      </head>
      <body className={`${vazir.className} `}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
