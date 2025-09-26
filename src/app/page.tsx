'use client';

import Image from 'next/image';
import { Briefcase, Code, Sparkles } from 'lucide-react';
import TechCarousel from '@/components/TechCarousel';
import AboutMe from '@/components/AboutMe';
import ProjectsSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContacSection';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [nameText, setNameText] = useState('');
  const [roleText, setRoleText] = useState('');

  const fullName = '¡Hola! Soy Luis Daniel Fuentes';
  const fullRole = 'Desarrollador Fullstack con foco en Frontend';

  useEffect(() => {
    let i = 0;
    const nameInterval = setInterval(() => {
      setNameText(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) {
        clearInterval(nameInterval);
        // empezar a escribir el rol
        let j = 0;
        const roleInterval = setInterval(() => {
          setRoleText(fullRole.slice(0, j + 1));
          j++;
          if (j === fullRole.length) clearInterval(roleInterval);
        }, 50);
      }
    }, 50);
    return () => clearInterval(nameInterval);
  }, []);

  return (
    <>
      {/* Sección de presentación */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-12 bg-white/70 dark:bg-neutral-900/70 rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Imagen con animación */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex-shrink-0"
        >
          <Image
            src="/Profile.jpg"
            alt="Foto de perfil de Luis Daniel Fuentes"
            width={160}
            height={160}
            className="rounded-full border-4 border-foreground shadow-lg"
          />
          <Image
            src="/logo.png"
            alt="Logo personal"
            width={80} // tamaño ajustable
            height={80} // tamaño ajustable
            className="rounded-full border-2 border-purple-500 mt-4 shadow-md"
          />
        </motion.div>

        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Nombre con typing */}
          <h2 className="text-4xl font-bold mb-3 flex items-center gap-2 text-purple-700 dark:text-purple-400">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            {nameText}
            <span className="animate-pulse">|</span>
          </h2>

          {/* Rol con typing */}
          <p className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
            {roleText}
            {roleText.length < fullRole.length && (
              <span className="animate-pulse">|</span>
            )}
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Me especializo en construir interfaces modernas, optimizadas y
            escalables usando tecnologías como{' '}
            <span className="font-semibold">React, Next.js y Tailwind CSS</span>
            . También tengo experiencia integrando{' '}
            <span className="font-semibold">
              APIs, bases de datos y autenticación
            </span>
            para aplicaciones completas de uso real.
          </p>

          <ul className="text-base space-y-1 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-500" />
              Tecnologías favoritas: React, TypeScript, Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-500" />
              Actualmente trabajando en proyectos personales y colaborativos con
              foco en experiencia de usuario y escalabilidad.
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Secciones */}
      <AboutMe />
      <TechCarousel />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
