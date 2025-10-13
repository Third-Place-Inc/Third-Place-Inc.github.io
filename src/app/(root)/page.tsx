import Image from "next/image";

export default function Home() {
  return (
        <main id="backgroundImage">
      <div id="goal">
        <h1 id="goalTitle">Third Place</h1>
        <p className="goalSubtitle">デジタルの力で<br />第三の場所を創造する</p>
      </div>
      <div id="language">
        言語 : <a id="languageItem" href="./en">English</a>
      </div>
    </main>
  );
}
