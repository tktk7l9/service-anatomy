import { GITHUB_URL } from "@/engine/site";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{dict.footer.disclaimer}</p>
        <p>{dict.footer.trademark}</p>
        <p>
          © {new Date().getFullYear()} {dict.meta.siteName} ·{" "}
          <a href={GITHUB_URL} rel="noopener noreferrer" target="_blank">
            {dict.footer.github} ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
