import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins'
});

export const metadata: Metadata = {
    title: 'Tareas 24h PTY: Tu aliado académico',
    description:
        'Tareas 24h PTY te ofrece el mejor servicio de elaboración de trabajos universitarios en Panamá y toda Latinoamérica. Desde tesis y monografías hasta informes y proyectos, nuestros expertos te ayudarán a obtener las mejores calificaciones.',
    keywords:
        'tareas universitarias, tesis, monografías, informes, Panamá, Latinoamérica',
    openGraph: {
        title: 'Tareas Universitarias 24h PTY: Tesis, Informes, Monografías y Más',
        description:
            'El mejor servicio de elaboración de trabajos universitarios en Panamá y Latinoamérica.'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} flex flex-col items-center`}>
                <Navbar />
                <div className="w-full container mx-auto px-6 mt-16 md:mt-28">
                    {children}
                </div>
            </body>
        </html>
    );
}
