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
        <html className="scroll-smooth " lang="en">
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR35C6FN');`
                    }}
                ></script>
            </head>
            <body className={`${poppins.className} flex flex-col items-center`}>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `
              <iframe  src="https://www.googletagmanager.com/ns.html?id=GTM-PR35C6FN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `
                    }}
                />
                <Navbar />
                <div className="w-full container mx-auto px-6 mt-4 lg:mt-0">
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
