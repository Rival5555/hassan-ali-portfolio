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
  title: "Hassan Ali | Machine Learning Engineer",
  description:
    "Portfolio of Hassan Ali, showcasing end-to-end AI/ML systems. Experienced in designing deep learning pipelines, optimizing model architectures, and deploying full-stack web applications at scale.",
  keywords: [
    "ML Engineer",
    "Machine Learning Engineer",
    "Deep Learning Developer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Hassan Portfolio",
  ],
  metadataBase: new URL("https://hassan-ali-portfolio-nine.vercel.app"),
  openGraph: {
    title: "Hassan Ali | Machine Learning Engineer",
    description:
      "Portfolio of Hassan Ali, showcasing end-to-end AI/ML systems. Experienced in designing deep learning pipelines, optimizing model architectures, and deploying full-stack web applications at scale.",
    type: "website",
    url: "https://hassan-ali-portfolio-nine.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hassan Ali | Machine Learning Engineer Portfolio Preview",
      },
    ],
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
        className={`${poppins.variable} bg-background text-text antialiased font-sans`}
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
