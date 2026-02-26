import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hassan | Machine Learning & IoT Engineer",
  description:
    "Professional portfolio of Hassan, a Machine Learning Engineer and IoT-focused React.js developer building intelligent systems across AI, embedded devices, and modern web.",
  keywords: [
    "ML Engineer",
    "Machine Learning Engineer",
    "Deep Learning Developer",
    "IoT Developer",
    "IoT Engineer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Hassan Portfolio",
  ],
  metadataBase:
    typeof window === "undefined" ? new URL("https://example.com") : undefined,
  openGraph: {
    title: "Hassan | Machine Learning & IoT Engineer",
    description:
      "Portfolio of Hassan, showcasing projects in AI, Deep Learning, IoT, and modern React/Next.js applications.",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-[#0a0a0a] text-zinc-100 antialiased`}
      >
        <div className="relative min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
