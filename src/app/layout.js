import localFont from "next/font/local";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const avenir = localFont({
  src: "./fonts/AvenirLTStd-Light.otf",
});
const proximaNova = localFont({
  src: "./fonts/proxima-nova-9.otf",
});

export const metadata = {
  title: "Emma Sawyer Art",
  description: "Emma Sawyer's Creative Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white h-screen">
      <link rel="icon" href="/icon?" />
      <title>Emma Sawyer Art</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
