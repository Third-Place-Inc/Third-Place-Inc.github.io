import Image from "next/image";

export default function Home() {
  return (
    <main id="backgroundImage">
      <div id="goal">
        <h1 id="goalTitle">Third Place</h1>
        <p className="goalSubtitle">Creating Third Places<br />with Digital Power</p>
      </div>
      <div id="language">
        Language : <a id="languageItem" href="../">日本語</a>
      </div>
    </main>
  );
}
