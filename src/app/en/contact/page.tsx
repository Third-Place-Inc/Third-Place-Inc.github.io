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

export const metadata: Metadata = {
  title: "Contact Iroiro",
  description:
    "Information about Third Place Inc., including details and contact information.",
  abstract:
    "Information about Third Place Inc., including details and contact information.",
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
    title: "Contact Iroiro",
    description:
      "Information about Third Place Inc., including details and contact information.",
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

export default async function Contact() {
  const { content } = await getContact();

  return (
    <main>
      <div id="maincard">
      <div className="card" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  );
}

async function getContact() {
  const filePath = path.join(process.cwd(), "content/en/", "contact.md");
  const fileContents = fs.readFileSync(filePath, "utf-8");

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
      'h1': getRandomString()
    })
    .process(content);

  return {
    content: processedContent.toString(),
  };
}