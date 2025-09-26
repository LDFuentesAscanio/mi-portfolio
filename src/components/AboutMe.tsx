export default function AboutMe() {
  return (
    <section id="about" className="mt-16 space-y-6">
      <h2 className="text-3xl font-bold border-b pb-2 border-foreground/30">
        Sobre mí
      </h2>
      <p className="text-lg leading-relaxed">
        Soy <strong>Luis Fuentes</strong>, desarrollador fullstack con
        especialización en frontend. Disfruto construir interfaces intuitivas y
        funcionales usando <strong>React</strong>, <strong>Next.js</strong> y{' '}
        <strong>TypeScript</strong>. Vengo de una formación como ingeniero
        químico, lo que me aporta una mentalidad analítica y orientada a la
        mejora continua.
      </p>
      <p>
        Me gradué del bootcamp de Henry en 2025, donde también trabajé como{' '}
        <strong>Teaching Assistant</strong>, apoyando a estudiantes en su
        proceso de aprendizaje. Busco formar parte de un equipo de desarrollo
        donde pueda seguir creciendo, aportando mis habilidades técnicas y
        blandas.
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-800 dark:text-gray-300">
        <li>✅ React</li>
        <li>✅ Next.js</li>
        <li>✅ TypeScript</li>
        <li>✅ HTML & CSS</li>
        <li>✅ Trabajo en equipo</li>
        <li>✅ Gestión del tiempo</li>
      </ul>
    </section>
  );
}
