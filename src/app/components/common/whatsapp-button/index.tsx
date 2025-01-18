import Image from 'next/image';

export const WhatsappFAB = () => {
    return (
        <div className="fixed bottom-8 right-8">
            <a
                href="https://wa.me/13312436527?text=Hola%20trabajos%20universitarios%20Panama%20City,%20estoy%20interesado%20en%20.."
                target="_blank"
                rel="noopener noreferrer"
                title="Contáctanos por Whatsapp"
                className="shadow-2xl rounded-full p-2 transition transform hover:scale-110 hover:shadow-3xl"
            >
                <Image
                    src="/landing-images/whatsapp.svg"
                    alt="Whatsapp"
                    width={72}
                    height={72}
                />
            </a>
        </div>
    );
};
export const WhatsappButton = () => {
    return (
        <a
            href="https://wa.me/13312436527?text=Hola%20trabajos%20universitarios%20Panama%20City,%20estoy%20interesado%20en%20.."
            target="_blank"
            rel="noopener noreferrer"
            title="Contáctanos por Whatsapp"
            className="flex items-center px-5 h-16 lg:h-20 gap-4 bg-rust-600 text-white font-medium  hover:scale-[1.02]  transition-all  rounded-xl "
        >
            <div className="flex items-center  justify-center ">
                <Image
                    src="/landing-images/whatsapp.svg"
                    alt="Whatsapp"
                    width={36}
                    height={36}
                    className="w-10 h-10  lg:w-16 lg:h-16"
                />
            </div>
            <h2 className="flex text-lg sm:text-2xl xl:text-4xl">
                Contáctanos +1 3312436527
            </h2>
        </a>
    );
};
