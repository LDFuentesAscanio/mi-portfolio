import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mi Portfolio',
  description:
    'Portfolio personal de un desarrollador fullstack enfocado en frontend',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <header className="fixed w-full top-0 left-0 z-50 bg-background text-foreground shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center p-4 md:p-6">
            <h1 className="text-xl font-bold">Mi Portfolio</h1>
            <nav className="space-x-4">
              <a href="#about" className="hover:underline">
                Sobre mí
              </a>
              <a href="#projects" className="hover:underline">
                Proyectos
              </a>
              <a href="#contact" className="hover:underline">
                Contacto
              </a>
            </nav>
          </div>
        </header>

        <main className="max-w-5xl mx-auto p-4 pt-24">{children}</main>

        <footer className="p-4 text-center text-sm text-foreground/70">
          © {new Date().getFullYear()} Luis Daniel Fuentes
        </footer>
      </body>
    </html>
  );
}
