import type { Metadata } from "next";
import { Geist_Mono, Poppins, Google_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/lib/providers";
import Script from "next/script";


const geistSans = Google_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppIns = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const url = "https://mrp-dev.vercel.app/"
const title = "Muhammad Rakib | Full Stack Developer From Natore, Bangladesh";
const description = "Full Stack Developer specializing in Next.js, TypeScript, MongoDb, and modern web applications."

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Muhammad Rakib" }],
  creator: "Muhammad Rakib",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/open-graph-rakib.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@muhammadrakib',
    images: '/images/open-graph-rakib.png',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
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
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className="scroll-smooth"
    >
      <head>



      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppIns.variable} font-poppins antialiased`}
      >
        <Providers>
          <Header />
          <main className="min-h-[calc(100vh-105px)]">{children}</main>
          <Footer />
        </Providers>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "${GA_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
