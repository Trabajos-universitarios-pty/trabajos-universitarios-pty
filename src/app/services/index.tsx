import { SERVICES } from '@/utils/services_items';
import React from 'react';
import TitleSection from '../components/common/title_section';

const Services: React.FC = () => {
    return (
        <div
            id="servicios"
            className="min-h-[500px] justify-center flex flex-col gap-10"
        >
            <TitleSection title="Nuestros Servicios" subtitle="SERVICIOS" />

            <div className="grid lg:grid-cols-2  lg:order-last grid-cols-1 place-items-center gap-3">
                <div className="lg:order-1 mt-10 md:mt-0 order-2 grid lg:grid-cols-4  xl:grid-cols-5 sm:grid-cols-5 grid-cols-3 gap-11">
                    {SERVICES.map(({ Icon, title }, index) => (
                        <div
                            key={index}
                            className={`shadow-md flex flex-col items-center justify-center ${index % 3 === 1 ? 'bg-jasper-900 mt-5' : index % 3 === 2 ? 'bg-carrot_orange-900 mt-3' : 'bg-rust-900 mb-7'} h-[80px] w-[80px] rounded-md `}
                        >
                            <Icon color="#e9351d" width={'30px'} />
                            <p className="text-rust-600 text-[12px]  font-medium">
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="lg:order-2 order-1">
                    <p>
                        Somos un equipo apasionado de profesionales y docentes
                        con{' '}
                        <span className="text-rust-600">
                            más de 5 años de experiencia
                        </span>{' '}
                        en el sector académico.
                        <br />
                        <br />
                        <span className="text-rust-600">Tareas 24h PTY</span>
                        , se originó en Panamá, con la finalidad de brindar un
                        servicio de calidad y confianza a estudiantes
                        universitario. Con el paso de los años y debido al
                        rápido crecimiento de este proyecto, nos hemos expandido
                        por toda Latinoamérica, abarcando diversos así países,
                        como lo son: Panamá, Venezuela, Colombia, México, entre
                        otros. <br />
                        <br /> Estamos capacitados con las herramientas
                        necesarias y estándares universales (normas APA,
                        Vancouver, IEEE, entre otras) para brindarte la ayuda
                        que necesitas en tus
                        <span className="text-rust-600">
                            {' '}
                            trabajos universitarios, tesis, proyectos de grado,
                            ensayos, monografías, entre otros.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
