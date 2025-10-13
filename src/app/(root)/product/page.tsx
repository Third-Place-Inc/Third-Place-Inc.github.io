import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";
import "@styles/content.css";
import PageCard from "@/components/PageCard";

export const metadata: Metadata = {
  title: "コンテンツ",
  description:
    "Third Place株式会社が関わるプロジェクトの一覧です。",
  abstract:
    "Third Place株式会社が関わるプロジェクトの一覧です。",
  applicationName: 'Third Place株式会社',
  authors: [
    {
      name: '茅根啓介',
      url: 'https://third-place-inc.github.io',
    },
  ],
  creator: "茅根啓介",
  publisher: "茅根啓介",
  generator: 'Next.js',
  keywords: ["コンテンツ"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://third-place-inc.github.io/contact",
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
    url: "https://third-place-inc.github.io/contact",
    title: "コンテンツ",
    description:
      "Third Place株式会社が関わるプロジェクトの一覧です。",
    siteName: 'Third Place株式会社',
    images: [
      {
        url: 'https://third-place-inc.github.io/images/出雲大社1080.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IroIro1234work',
    creator: '@IroIro1234work',
    images: 'https://third-place-inc.github.io/images/出雲大社1080.jpg',
  },
  appleWebApp: {
    capable: true,
    title: 'Third Place株式会社',
    statusBarStyle: 'black-translucent'
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default async function Product() {
  const productList = await getProduct();

  return (
    <main>
    <div id="maincard">
      <div className="card">
      <h1 className="n2">Contents</h1>
    {productList.map((product, index) => (
                <PageCard key={index} title={product.title} description={product.description} date={product.date} genre={product.genre} path={product.path} />
        ))}
      </div>
    </div>
  </main>
  );
}

async function getProduct() {
// 1. Markdownファイルが保存されているディレクトリを指定
  const productDirectory = path.join(process.cwd(), 'content/ja/product');

  // 2. ディレクトリ内の全ファイル名を取得
  const filenames = fs.readdirSync(productDirectory);

  // 3. Markdownファイルを読み込み、必要なデータを抽出
  const productList = filenames
    .filter((filename) => filename.endsWith('.md')) // .mdファイルのみ対象
    .map((filename) => {
      const filePath = path.join(productDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // gray-matterでフロントマターを解析
      const { data } = matter(fileContents);

    return {
        title: data.title || '',
        description: data.description || '',
        genre: data.genre || '',
        date: data.date || '',
        path: path.join('/product', filename.replace(/\.md$/, "")),
      };
    });

  // 必要なデータを配列として返す
  return productList;
}