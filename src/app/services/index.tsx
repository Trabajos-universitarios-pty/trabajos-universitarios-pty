import { SERVICES } from '@/utils/services_items';
import React from 'react';
import TitleSection from '../components/common/title_section';

const Services: React.FC = () => {
    return (
        <div id="servicios" className=" flex flex-col gap-10">
            <TitleSection title="Nuestros Servicios" subtitle="SERVICIOS" />

            <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xl:grid-cols-5 grid-cols-1 gap-3">
                {SERVICES.map(({ description, Icon, title }, index) => (
                    <div
                        className="flex border bg-white  cursor-pointer  transition-all rounded-xl h-[270px] p-4 flex-col gap-6"
                        key={index}
                    >
                        <div className="shadow-md bg-rust-900 p-2 w-fit rounded-md ">
                            <Icon color="#e9351d" width={'35px'} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-rust-600 text-[18px]  font-medium">
                                {title}
                            </p>
                            <p className="text-black font-normal">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
