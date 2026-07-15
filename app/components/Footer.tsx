import { EmailIcon, GitHubIcon } from "./icons";

const projectLinks = [
  { label: "Daily Cause List", href: "#projects" },
  { label: "Grabha", href: "https://grabha.in" },
  { label: "digiSeva", href: "#projects" },
  { label: "Kshethradanam", href: "https://kshethradanam.org" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t-[0.5px] border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-script text-2xl text-gold">Anjaneya Tech Labs</p>
            <p className="mt-3 text-sm text-text-secondary">
              Software that solves real problems, built in India.
            </p>

            <div className="mt-5 flex items-center gap-4 text-text-secondary">
              <a
                href="https://github.com/sreeharimv"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-gold"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@anjaneyatechlabs.in"
                aria-label="Email"
                className="hover:text-gold"
              >
                <EmailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text">Projects</h3>
            <ul className="mt-4 space-y-2">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-text-secondary hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-text">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-text">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>
                <a href="mailto:hello@anjaneyatechlabs.in" className="hover:text-text">
                  hello@anjaneyatechlabs.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t-[0.5px] border-border pt-6 text-xs text-text-muted">
          © 2026 Anjaneya Tech Labs · Kochi, Kerala
        </p>
      </div>
    </footer>
  );
}
