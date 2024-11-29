import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins'
});

export const metadata: Metadata = {
    title: 'Trabajos universitarios PTY',
    description: 'Hacemos tu tarea'
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
                    <Footer />
                </div>
            </body>
        </html>
    );
}
