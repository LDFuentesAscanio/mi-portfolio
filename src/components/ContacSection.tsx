import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contact" className="mt-16 space-y-6">
      <h2 className="text-3xl font-bold border-b pb-2 border-foreground/30">
        Contacto
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <a
          href="https://github.com/LDFuentesAscanio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:underline text-lg"
        >
          <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/luis-daniel-fuentes-ascanio/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:underline text-lg"
        >
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          LinkedIn
        </a>
        <a
          href="mailto:ludafuasca@gmail.com"
          className="flex items-center gap-3 hover:underline text-lg"
        >
          <Image src="/icons/gmail.svg" alt="Email" width={24} height={24} />
          ludafuasca@gmail.com
        </a>
      </div>
    </section>
  );
}
