'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const techs = [
  { name: 'React', src: '/tech/react.svg' },
  { name: 'Next.js', src: '/tech/nextjs.svg' },
  { name: 'TypeScript', src: '/tech/typescript.svg' },
  { name: 'JavaScript', src: '/tech/javascript.svg' },
  { name: 'HTML', src: '/tech/html.svg' },
  { name: 'CSS', src: '/tech/css.svg' },
  { name: 'Tailwind', src: '/tech/tailwind.svg' },
  { name: 'Git', src: '/tech/git.svg' },
  { name: 'Node.js', src: '/tech/nodejs.svg' },
  { name: 'Supabase', src: '/tech/supabase.svg' },
];

export default function TechCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth / 2
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Tecnologías que uso
      </h2>
      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap relative"
      >
        <div className="flex w-max animate-none">
          {[...techs, ...techs].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-32 h-24 mx-4 shrink-0"
              title={tech.name}
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
