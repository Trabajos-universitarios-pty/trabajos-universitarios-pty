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
            className="flex items-center pr-[20px] max-h-[48px] text-black font-medium  hover:scale-[1.02]  transition-all border rounded-xl "
        >
            <div className="flex items-center  justify-center w-14 h-14 ">
                <Image
                    src="/landing-images/whatsapp.svg"
                    alt="Whatsapp"
                    width={36}
                    height={36}
                />
            </div>
            <h2 className="flex">
                <span className="hidden  sm:block">Contáctanos</span> +1
                3312436527
            </h2>
        </a>
    );
};
