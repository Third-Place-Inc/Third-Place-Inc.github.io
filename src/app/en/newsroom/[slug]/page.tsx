import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import addClasses from "rehype-class-names";
import { Metadata } from "next";
import "@styles/content.css";

type NewsroomDetailPageProps = {
  params: Promise<{ slug: string; }>;
};

export async function generateMetadata({ params }: NewsroomDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), "content/en/newsroom", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data } = matter(fileContents);

  const defaultAppName = "Third Place Inc.";
  const defaultTitle = "Newsroom";
  const defaultDescription = "Notice Regarding Third Place Inc.";

  return {
    title: data.title || defaultTitle,
    description: data.description || defaultDescription,
    abstract: data.description || defaultDescription,
    applicationName: defaultAppName,
    authors: [
      {
        name: "Keisuke Chinone",
        url: "https://third-place-inc.github.io",
      },
    ],
    creator: "Keisuke Chinone",
    publisher: "Keisuke Chinone",
    generator: "Next.js",
    keywords: data.keywords || [],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://third-place-inc.github.io/en/newsroom/${slug}`,
      languages: {
        ja: `https://third-place-inc.github.io/newsroom/${slug}`,
        en: `https://third-place-inc.github.io/en/newsroom/${slug}`,
      },
    },
    icons: [
      { rel: "icon", url: "https://third-place-inc.github.io/favicon.ico" },
      { rel: "apple-touch-icon", url: "https://third-place-inc.github.io/apple-touch-icon.png" },
    ],
    openGraph: {
      type: "article",
      url: `https://third-place-inc.github.io/en/newsroom/${slug}`,
      title: data.title || defaultTitle,
      description: data.description || defaultDescription,
      siteName: defaultAppName,
      images: [
        {
          url: "https://third-place-inc.github.io/images/出雲大社1080.jpg",
        },
      ],
    },
    appleWebApp: {
      capable: true,
      title: defaultAppName,
      statusBarStyle: "black-translucent",
    },
    itunes: data.appId === undefined ? null : {
      appId: data.appId ?? '',
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

// ページのコンポーネント
export default async function NewsroomDetail({ params }: NewsroomDetailPageProps) {
  const { slug } = await params
  const { content } = await getNewsroom(slug);

  return (
    <main>
      <div id="maincard">
        <div className="card" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  );
}

// Newsのデータを取得
async function getNewsroom(slug: string) {
  const filePath = path.join(process.cwd(), "content/en/newsroom", `${slug}.md`);
  let fileContents = "";

  try {
    fileContents = fs.readFileSync(filePath, "utf-8");
  } catch {
    console.warn(`Markdown file not found for slug: ${slug}`);
    return { content: "" }; // ファイルが見つからない場合は空のコンテンツを返す
  }

  function getRandomString(): string {
    const options = ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'];
  
    const randomIndex = Math.floor(Math.random() * options.length);
  
    return options[randomIndex];
  }

  const { content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .use(addClasses, {
      'div': 'title',
      'h1': getRandomString(),
      'img': 'markdown-image'
    })
    .process(content);

  return {
    content: processedContent.toString(),
  };
}

// 静的パスを生成
export async function generateStaticParams() {
  const newsroomDir = path.join(process.cwd(), "content/en/newsroom");
  let filenames: string[] = [];

  try {
    filenames = fs.readdirSync(newsroomDir);
  } catch {
    return []
  }

  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
}