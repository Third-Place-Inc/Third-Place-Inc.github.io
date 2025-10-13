import Link from 'next/link'
import { Language } from "@/lib/Language";
import "@styles/var.css";
import "@styles/foundation.css";

const Footer = ({ lang = Language.Japanese }) => {
  switch (lang) {
    case Language.Japanese:
      return (
        <footer>
          <Link className="header" href="/contact">
            <p id="copyright">© 2025 Third Place Inc.</p>
          </Link>
        </footer>
      );
    case Language.EnglishUS:
      return (
        <footer>
          <Link className="header" href="/en/contact">
            <p id="copyright">© 2025 Third Place Inc.</p>
          </Link>
        </footer>
      );
  }
};

export default Footer;