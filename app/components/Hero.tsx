import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-24 pt-16 text-center md:pt-20"
    >
      <p className="font-devanagari text-2xl text-gold md:text-3xl">
        उद्धरेदात्मनात्मानम्
      </p>
      <p className="mt-1 text-sm italic text-text-muted">
        Uddhared atmanatmanam
      </p>

      <Image
        src="/hero.png"
        alt="Anjaneya Tech Labs — Code. Create. Serve."
        width={640}
        height={640}
        priority
        className="mt-10 w-full max-w-xs md:max-w-sm"
      />

      <h1 className="mt-10 text-3xl font-semibold tracking-tight text-text md:text-4xl">
        Software that solves real problems, built in India. 🇮🇳
      </h1>

      <a
        href="#projects"
        className="mt-8 inline-block rounded-full bg-cta px-7 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        Explore projects
      </a>
    </section>
  );
}
