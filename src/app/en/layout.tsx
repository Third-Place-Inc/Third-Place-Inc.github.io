import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Language } from "@/lib/Language";
import "@styles/var.css";
import "@styles/foundation.css";

export const metadata: Metadata = {
  title: "Third Place Inc.",
  description:
    "This is the corporate website of Third Place Inc., creating third places through the power of digital technology.",
  abstract:
    "This is the corporate website of Third Place Inc., creating third places through the power of digital technology.",
  applicationName: "Third Place Inc.",
  authors: [
    {
      name: "Keisuke Chinone",
      url: "https://third-place.co.jp",
    },
  ],
  creator: "Keisuke Chinone",
  publisher: "Keisuke Chinone",
  generator: "Next.js",
  keywords: ["Third Place"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://third-place.co.jp/en/",
    languages: {
      ja: "https://third-place.co.jp/",
      en: "https://third-place.co.jp/en/",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://third-place.co.jp/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://third-place.co.jp/apple-touch-icon.png' },
  ],
  openGraph: {
    type: "article",
    url: "https://third-place.co.jp",
    title: "Third Place Inc.",
    description:
      "This is the corporate website of Third Place Inc., creating third places through the power of digital technology.",
    siteName: "Third Place Inc.",
    images: [
      {
        url: 'https://third-place.co.jp/images/出雲大社1080.jpg',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Third Place Inc.",
    statusBarStyle: 'black-translucent'
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const today = new Date();
  const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  return (
    <html lang="en">
      <head prefix="og: https://ogp.me/ns#">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
        <meta name="date" content={formattedDate} />
        <meta name="google" content="nositelinkssearchbox" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="author" content="Keisuke Chinone" />
        <meta name="copyright" content="© 2024 Keisuke Chinone" />
        <meta httpEquiv='x-dns-prefetch-control' content='on' />
        <meta httpEquiv="Expires" content="604800" />
        <link rel="me" href="https://mastodon.social/@Iroiro" />
      </head>
      <body>
        <Header lang={Language.EnglishUS} />
        {children}
        <Footer lang={Language.EnglishUS} />
      </body>
    </html>
  );
}
