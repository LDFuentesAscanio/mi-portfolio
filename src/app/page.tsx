import Image from 'next/image';
import { Briefcase, Code, Sparkles } from 'lucide-react';
import TechCarousel from '@/components/TechCarousel'; // ⬅️ import nuevo
import AboutMe from '@/components/AboutMe';
import ProjectsSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContacSection';

export default function Home() {
  return (
    <>
      {/* Sección de presentación */}
      <section className="mt-12 bg-white/70 dark:bg-neutral-900/70 rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/Profile.jpg"
            alt="Foto de perfil de Luis Daniel Fuentes"
            width={160}
            height={160}
            className="rounded-full border-4 border-foreground"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-3 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            ¡Hola! Soy Luis Daniel Fuentes
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Desarrollador <span className="font-semibold">fullstack</span> con
            foco en <span className="font-semibold">frontend</span>. Me gusta
            construir interfaces claras, modernas y funcionales. Actualmente
            recién graduado, presento acá algunos proyectos hechos durante mi
            formación.
          </p>
          <ul className="text-base space-y-1 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-500" />
              Tecnologías favoritas: React, TypeScript, Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-500" />
              En búsqueda de mi primera experiencia profesional
            </li>
          </ul>
        </div>
      </section>

      {/* Sobre mí */}
      <AboutMe />

      {/* Carrusel de tecnologías */}
      <TechCarousel />

      {/* Tarjetas de proyectos */}
      <ProjectsSection />

      {/* Informacion de contacto */}
      <ContactSection />
    </>
  );
}
