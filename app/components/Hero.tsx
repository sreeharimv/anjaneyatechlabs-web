import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-16 md:flex-row md:pt-24"
    >
      <div className="flex-1 text-center md:text-left">
        <p className="font-devanagari text-2xl text-gold md:text-3xl">
          उद्धरेदात्मनात्मानम्
        </p>
        <p className="mt-1 text-sm italic text-text-muted">
          Uddhared atmanatmanam
        </p>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-text md:text-5xl">
          Anjaneya Tech Labs
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Software that solves real problems, built in India. 🇮🇳
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block rounded-full bg-cta px-7 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Explore projects
        </a>
      </div>

      <div className="flex-1">
        <Image
          src="/hero.png"
          alt="Anjaneya Tech Labs — Code. Create. Serve."
          width={640}
          height={640}
          priority
          className="mx-auto w-full max-w-md"
        />
      </div>
    </section>
  );
}
