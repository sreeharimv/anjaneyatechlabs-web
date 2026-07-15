import Link from "next/link";
import { GitHubIcon } from "./icons";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b-[0.5px] border-border px-6 py-2 text-[11px] tracking-wide text-text-muted">
        <span className="font-devanagari">उद्धरेदात्मनात्मानम्</span>
        <a
          href="https://github.com/sreeharimv"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-text-muted transition-colors hover:text-gold"
        >
          <GitHubIcon className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="px-6 pb-3 pt-4 text-center sm:pb-4 sm:pt-5">
        <Link
          href="#home"
          className="font-script text-[28px] leading-none text-gold sm:text-[32px]"
        >
          Anjaneya Tech Labs
        </Link>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-4 border-t-[0.5px] border-border px-6 py-3 sm:gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-text-secondary transition-colors hover:text-text"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
