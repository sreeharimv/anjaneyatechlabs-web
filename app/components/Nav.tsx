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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="font-script text-[26px] leading-none text-gold"
        >
          Anjaneya Tech Labs
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/sreeharimv"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-text-secondary transition-colors hover:text-gold"
        >
          <GitHubIcon className="h-5 w-5" />
        </a>
      </nav>
    </header>
  );
}
