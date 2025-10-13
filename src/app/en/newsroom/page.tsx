import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import "@styles/content.css";
import PageCard from "@/components/PageCard";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Notice Regarding Third Place Inc.",
  abstract:
    "Notice Regarding Third Place Inc.",
  applicationName: "Third Place Inc.",
  authors: [
    {
      name: "Keisuke Chinone",
      url: "https://third-place-inc.github.io",
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
    canonical: "https://third-place-inc.github.io/en/contact",
    languages: {
      ja: "https://third-place-inc.github.io/contact",
      en: "https://third-place-inc.github.io/en/contact",
    },
  },
  icons: [
    { rel: 'icon', url: 'https://third-place-inc.github.io/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://third-place-inc.github.io/apple-touch-icon.png' },
  ],
  openGraph: {
    type: "article",
    url: "https://third-place-inc.github.io/en/contact",
    title: "Newsroom",
    description:
      "Notice Regarding Third Place Inc.",
    siteName: "Third Place Inc.",
    images: [
      {
        url: 'https://third-place-inc.github.io/images/出雲大社1080.jpg',
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

export default async function Newsroom() {
  const newsroomList = await getNewsroom();

  return (
    <main>
    <div id="maincard">
      <div className="card">
      <h1 className="n2">Newsroom</h1>
    {newsroomList.map((newsroom, index) => (
                <PageCard key={index} title={newsroom.title} description={newsroom.description} date={newsroom.date} genre={newsroom.genre} path={newsroom.path} />
        ))}
      </div>
    </div>
  </main>
  );
}

async function getNewsroom() {
// 1. Markdownファイルが保存されているディレクトリを指定
  const newsroomDirectory = path.join(process.cwd(), 'content/en/newsroom');

  // 2. ディレクトリ内の全ファイル名を取得
  const filenames = fs.readdirSync(newsroomDirectory);

  // 3. Markdownファイルを読み込み、必要なデータを抽出
  const newsroomList = filenames
    .filter((filename) => filename.endsWith('.md')) // .mdファイルのみ対象
    .map((filename) => {
      const filePath = path.join(newsroomDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // gray-matterでフロントマターを解析
      const { data } = matter(fileContents);

      return {
        title: data.title || '',
        description: data.description || '',
        genre: data.genre || '',
        date: data.date || '',
        path: path.join('/en/newsroom', filename.replace(/\.md$/, "")),
      };
    });

  // 必要なデータを配列として返す
  return newsroomList;
}