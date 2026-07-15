type Status = "LIVE" | "DEV" | "BETA";

type Project = {
  name: string;
  status: Status;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const statusStyles: Record<Status, string> = {
  LIVE: "bg-live/15 text-live",
  DEV: "bg-dev/15 text-dev",
  BETA: "bg-beta/15 text-beta",
};

const iconClass = "h-6 w-6 text-gold";

const projects: Project[] = [
  {
    name: "Daily Cause List",
    status: "LIVE",
    description: "Court cause lists on WhatsApp, ₹199/mo.",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    name: "Grabha",
    status: "LIVE",
    description: "Download video and audio, self-hosted.",
    href: "https://grabha.in",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
        <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </svg>
    ),
  },
  {
    name: "digiSeva",
    status: "DEV",
    description: "Subscriptions and bills, never missed.",
    href: "#contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
        <rect x="3.5" y="4.5" width="17" height="16" rx="1.5" />
        <path d="M3.5 9.5h17M8 3v3M16 3v3" />
        <path d="M8 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Kshethradanam",
    status: "LIVE",
    description: "A virtual journey through Kerala's temples.",
    href: "https://kshethradanam.org",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass}>
        <path d="M12 2 8 8h8L12 2Z" />
        <path d="M6 8v12h12V8M9 20v-6h6v6" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-text md:text-3xl">
        Tools for real problems
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border-[0.5px] border-border bg-card p-6"
          >
            <div className="flex items-start justify-between">
              {project.icon}
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-medium text-text">{project.name}</h3>
            <p className="mt-1 text-sm text-text-secondary">{project.description}</p>

            <a
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              className="mt-4 inline-block text-sm text-gold hover:underline"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
