import localFont from "next/font/local";
import "./globals.css";
import { getDocuments } from "@/lib/doc";
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

export const metadata = {
  title: "docuCraft - a documentation website",
  description: "A documentation website",
};
 
export default function RootLayout({ children }) {
  const allDocuments = getDocuments()
  console.log(allDocuments)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
