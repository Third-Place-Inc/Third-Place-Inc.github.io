import Link from 'next/link'
import { Language } from "@/lib/Language";
import "@styles/var.css";
import "@styles/foundation.css";

const Header = ({ lang = Language.Japanese }) => {
      switch (lang) {
            case Language.Japanese:
                  return (
                        <header id="header">
                              <Link className="header" href="/">
                                    <h1 className="header">Third Place</h1>
                              </Link>
                              <ul className="tabContainaer">
                                    <div className="landscape-only">
                                    <li className="tab underline">
                                          <Link className="header" href="/">
                                                ホーム
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/product">
                                                コンテンツ
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/newsroom">
                                          ニュースルーム
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/contact">
                                                問い合わせ
                                          </Link>
                                    </li>
                                    </div>
                                    <div className="portrait-only">
                                    <li className="tab underline">
                                          <Link className="header" href="/">
                                          <span className="material-symbols-outlined">home</span>
                                          <h4 className="iconLabel">ホーム</h4>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/product">
                                          <span className="material-symbols-outlined">apps</span>
                                          <h4 className="iconLabel">コンテンツ</h4>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/newsroom">
                                          <span className="material-symbols-outlined">newspaper</span>
                                          <h4 className="iconLabel">ニュースルーム</h4>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/contact">
                                          <span className="material-symbols-outlined">contact_page</span>
                                          <h4 className="iconLabel">問い合わせ</h4>
                                          </Link>
                                    </li>
                                    </div>
                              </ul>
                        </header>
                  );
            case Language.EnglishUS:
                  return (
                        <header id="header">
                              <Link className="header" href="/en/">
                                    <h1 className="header">Third Place</h1>
                              </Link>
                              <ul className="tabContainaer">
                              <div className="landscape-only">
                                    <li className="tab underline">
                                          <Link className="header" href="/en/">
                                                Home
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/product">
                                                Contents
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/newsroom">
                                                Newsroom
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/contact">
                                                Contact
                                          </Link>
                                    </li>
                                    </div>
                                    <div className="portrait-only">
                                    <li className="tab underline">
                                          <Link className="header" href="/en/">
                                          <span className="material-symbols-outlined">home</span>
                                          <h4 className="iconLabel">Home</h4>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/product">
                                          <span className="material-symbols-outlined">apps</span>
                                          <h4 className="iconLabel">Contents</h4>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/newsroom">
                                          <span className="material-symbols-outlined">newspaper</span>
                                          <h4 className="iconLabel">Newsroom</h4>
                                          </Link>
                                    </li>
                                    <li className="tab underline">
                                          <Link className="header" href="/en/contact">
                                          <span className="material-symbols-outlined">contact_page</span>
                                          <h4 className="iconLabel">Contact</h4>
                                          </Link>
                                    </li>
                                    </div>
                              </ul>
                        </header>
                  );
      }
};

export default Header;