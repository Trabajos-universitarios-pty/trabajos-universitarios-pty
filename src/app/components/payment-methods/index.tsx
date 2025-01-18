import Image from 'next/image';
import TitleSection from '../common/title_section';

const PaymentMethods: React.FC = () => {
    const payment_method_list = [
        { name: 'Visa', logo: '/payment-methods/banesco.png' },
        { name: 'Mastercard', logo: '/payment-methods/zelle.png' },
        {
            name: 'American Express',
            logo: '/payment-methods/paypal.png'
        },
        { name: 'Paypal', logo: '/payment-methods/western.png' },
        { name: 'Paypal', logo: '/payment-methods/binance.png' },
        { name: 'Paypal', logo: '/payment-methods/bancolombia.svg' }
    ];

    return (
        <section className="flex mt-9 flex-col gap-6">
            <TitleSection
                title="Aceptamos tu pago en"
                subtitle="MÉTODOS DE PAGO"
            />
            <div className="py-16 rounded-xl bg-orange-50 container mx-auto px-6 text-center">
                <div className="grid grid-cols-2  sm:grid-cols-3  gap-8">
                    {payment_method_list.map((payment_method, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center transition transform hover:scale-110 hover:shadow-3xl"
                        >
                            <Image
                                src={payment_method.logo}
                                alt={payment_method.name}
                                width={180}
                                height={180}
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
                <h4 className="text-center text-xl md:text-2xl mt-12 font-medium">
                    ¡Manejamos cualquier método de pago en tu país!{' '}
                    <a
                        href="https://wa.me/13312436527?text=Hola%20Tareas%20Universitarias%20Panama%20City,%20estoy%20interesado%20en%20.."
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Contáctanos por Whatsapp"
                        className=" text-rufous-600 underline underline-offset-2"
                    >
                        {' '}
                        Consúltanos al WhatsApp +1 3312436527
                    </a>
                </h4>
            </div>
        </section>
    );
};

export default PaymentMethods;
