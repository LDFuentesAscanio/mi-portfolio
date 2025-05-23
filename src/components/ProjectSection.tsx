import ProjectCard from '@/components/ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-16 space-y-10">
      <h2 className="text-3xl font-bold border-b pb-2 border-foreground/30">
        Proyectos
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Proyecto 1: Sistema de turnos */}
        <ProjectCard
          title="Sistema de Turnos - Estética Sánchez"
          description="Aplicación para gestión de turnos en un consultorio cosmetológico. Permite registro de pacientes, visualización de agenda y administración de turnos. Desarrollado con React y Vite en el frontend, y Node.js con TypeORM en el backend."
          techs={[
            'React',
            'Vite',
            'CSS',
            'Node.js',
            'TypeORM',
            'PostgreSQL',
            'TypeScript',
          ]}
          githubUrl="https://github.com/LDFuentesAscanio/SanchezEsteticaProject"
        />

        {/* Proyecto 2: E-commerce de productos Apple */}
        <ProjectCard
          title="E-commerce I-Shop"
          description="Frontend de tienda online para productos Apple. Cuenta con diseño responsive, navegación por categorías, detalle de producto y carrito. Proyecto grupal realizado como entrega final del bootcamp. (Frontend desplegado)"
          techs={['React', 'Next.js', 'Tailwind', 'TypeScript', 'Vercel']}
          githubUrl="https://github.com/LDFuentesAscanio/front-e-commerceft57"
          demoUrl="https://front-e-commerceft57.vercel.app/"
        />
      </div>
    </section>
  );
}
