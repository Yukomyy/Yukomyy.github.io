import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { PreferencesProvider } from "@/context/PreferencesContext";
import { PROFILE_DATA } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROFILE_DATA.name} — Software & Data Developer Portfolio`,
  description:
    "Information Systems student focused on Software Engineering, Data Analytics, Data Engineering, Data Science, and Web Development. Building software, understanding data, solving real problems.",
  keywords: [
    "Fahmi Irfan",
    "Information Systems",
    "Software Engineer Portfolio",
    "Data Analyst Portfolio",
    "Data Engineer",
    "Web Developer",
    "TypeScript",
    "Python",
    "SQL",
    "Next.js",
  ],
  authors: [{ name: PROFILE_DATA.name }],
  openGraph: {
    title: `${PROFILE_DATA.name} — Software & Data Developer Portfolio`,
    description:
      "Building software. Understanding data. Solving real problems. Information Systems portfolio featuring full-stack engineering and analytical data case studies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE_DATA.name} — Software & Data Developer Portfolio`,
    description:
      "Information Systems student focused on software development, data systems, and practical technology solutions.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-canvas text-ink selection:bg-cobalt selection:text-white">
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
