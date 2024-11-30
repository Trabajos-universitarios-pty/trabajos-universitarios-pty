import { SERVICES } from '@/utils/services_items';
import React from 'react';

const Services = () => {
    return (
        <div id="servicios" className="mt-[200px] flex flex-col gap-10">
            <p className="text-3xl font-medium text-center">Servicios</p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                {SERVICES.map(({ description, Icon, title }, index) => (
                    <div
                        className="flex border bg-white  cursor-pointer  transition-all rounded-xl h-[250px] p-4 flex-col gap-6 w-full md:w-1/3 lg:w-1/3 xl:w-1/4"
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
