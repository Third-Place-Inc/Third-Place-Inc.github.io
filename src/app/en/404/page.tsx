import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "This page does not exist.",
    description:
        "This page does not exist",
    abstract:
        "This page does not exist",
    applicationName: "Third Place Inc.",
    authors: [
        {
            name: "Keisuke Chinone",
            url: "https://iroiro.dev",
        },
    ],
    creator: "Keisuke Chinone",
    publisher: "Keisuke Chinone",
    generator: "Next.js",
    keywords: ["404", "existence", "Third Place"],
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: "https://iroiro.dev/en/404",
        languages: {
            ja: "https://iroiro.dev/404",
            en: "https://iroiro.dev/en/404",
        },
    },
    icons: [
        { rel: 'icon', url: 'https://iroiro.dev/favicon.ico' },
        { rel: 'apple-touch-icon', url: 'https://iroiro.dev/apple-touch-icon.png' },
    ],
    openGraph: {
        type: "article",
        url: "https://iroiro.dev/en/404",
        title: "This page does not exist.",
        description:
            "This page does not exist",
        siteName: "Third Place Inc.",
        images: [
            {
                url: 'https://iroiro.dev/images/出雲大社1080.jpg',
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

export default function Error404() {
    return (
        <main id="backgroundImage">
            <div id="goal">
                <h1 id="goalTitle"><strong>404</strong></h1>
                <p className="goalSubtitle">This page does not exist.<br />This page does not appear to have been created; please check to see if the URL is correct.</p>
            </div>
            <div id="language">
                Language : <a id="languageItem" href="../">日本語</a>
            </div>
        </main>
    );
}
