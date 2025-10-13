import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このページは存在しない",
  description:
    "Third Place株式会社にこのページは存在しない",
  abstract:
    "Third Place株式会社にこのページは存在しない",
  applicationName: "Third Place株式会社",
  authors: [
    {
      name: "茅根啓介",
      url: "https://third-place-inc.github.io",
    },
  ],
  creator: "茅根啓介",
  publisher: "茅根啓介",
  generator: "Next.js",
  keywords: ["404", "存在"],
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://third-place-inc.github.io/404",
    languages: {
      ja: "https://third-place-inc.github.io/404",
      en: "https://third-place-inc.github.io/en/404",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://third-place-inc.github.io/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://third-place-inc.github.io/apple-touch-icon.png' },
  ],
  openGraph: {
    type: "article",
    url: "https://third-place-inc.github.io/404",
    title: "このページは存在しない",
    description:
      "Third Place株式会社にこのページは存在しない",
    siteName: 'Third Place株式会社',
    images: [
      {
        url: "https://third-place-inc.github.io/images/出雲大社1080.jpg",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Third Place株式会社",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function Error404() {
    return (
      <main id="backgroundImage">
        <div id="goal">
          <h1 id="goalTitle">404</h1>
          <p className="goalSubtitle">このページは存在しません。<br />このページは作られていないようです。URLが正しいかどうかを確認してください。</p>
        </div>
        <div id="language">
          言語 : <a id="languageItem" href="./en">English</a>
        </div>
      </main>
    );
  }
  