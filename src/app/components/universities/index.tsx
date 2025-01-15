'use client';
import Image from 'next/image'; // Si estás usando Next.js
import TitleSection from '../common/title_section';

const Universities = () => {
    const universities_list = [
        { name: 'Universidad A', logo: '/universities/aden.png' },
        { name: 'Universidad B', logo: '/universities/tup.png' },
        { name: 'Universidad B', logo: '/universities/uam.png' },
        { name: 'Universidad B', logo: '/universities/uip.png' },
        { name: 'Universidad B', logo: '/universities/universidad-latino.png' },
        { name: 'Universidad B', logo: '/universities/universidad-panama.png' }

        // Añadir más universidades y sus logos aquí
    ];

    return (
        <section className="flex mt-9 flex-col gap-6">
            <TitleSection
                subtitle="Universidades"
                title="Hemos trabajado con"
            />
            <div className="py-16 rounded-xl bg-orange-50 container mx-auto px-6 text-center">
                <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {universities_list.map((uni, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center transition transform hover:scale-110 hover:shadow-3xl"
                        >
                            <Image
                                src={uni.logo}
                                alt={uni.name}
                                width={150} // Ajusta el tamaño según tu necesidad
                                height={150} // Ajusta el tamaño según tu necesidad
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Universities;
