import Image from 'next/image';

export const WhatsappFAB = () => {
    return (
        <div className="fixed bottom-8 right-8">
            <a
                href="https://wa.me/13312436527?text=Hola%20trabajos%20universitarios%20Panama%20City,%20estoy%20interesado%20en%20.."
                target="_blank"
                rel="noopener noreferrer"
                title="Contáctanos por Whatsapp"
            >
                <Image
                    src="/landing-images/whatsapp.svg"
                    alt="Whatsapp"
                    width={72}
                    height={72}
                    className="rounded-full"
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
            className="button gap-6 py-4 md:py-2 px-4 justify-center"
        >
            <Image
                src="/landing-images/whatsapp.svg"
                alt="Whatsapp"
                width={64}
                height={64}
                className="rounded-full"
            />
            <h2 className="text-2xl font-semibold text-center">
                Contáctanos por Whatsapp
            </h2>
        </a>
    );
};
