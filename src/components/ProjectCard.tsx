'use client';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  githubUrl: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  techs,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-xl shadow-2xl p-6 flex flex-col justify-between space-y-4"
    >
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 text-sm">
          {techs.map((tech, idx) => (
            <li
              key={idx}
              className="bg-purple-700/80 text-white px-2 py-1 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-black hover:bg-gray-800 transition"
        >
          <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
          Ver en GitHub
        </a>

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-700 hover:bg-green-800 transition"
          >
            <ExternalLink className="w-5 h-5" />
            Ver demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
