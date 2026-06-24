import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
import { SidebarProvider } from "@/components/layout/SidebarContext";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { personalInfo } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description:
    "Full Stack Developer specializing in React, TypeScript, Next.js, and AI-powered SaaS. Building scalable web applications with modern technologies.",
  keywords: [
    "Habib Ur Rehman",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "MERN Stack",
    "Islamabad",
    "Pakistan",
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description:
      "Full Stack Developer building scalable web applications with React, TypeScript, and AI.",
    siteName: personalInfo.name,
    images: [{ url: personalInfo.avatar, width: 800, height: 1000, alt: personalInfo.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description:
      "Full Stack Developer building scalable web applications with React, TypeScript, and AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} font-sans`}>
        <JsonLd />
        <SidebarProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 lg:ml-[300px]">
              <MobileHeader />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
