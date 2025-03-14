import IgIcon from '../common/icons/instagram_icon';
import LocationIcon from '../common/icons/location_icon';
import MessageIcon from '../common/icons/message_icon';
import WsIcon from '../common/icons/whatsapp_icon';
import ContactCard from './contact_card';
import RightsReserved from './rights_reserved';
import SocialLink from './social_link';

const Footer: React.FC = () => {
    return (
        <footer
            id="contáctanos"
            className="bg-orange-50 rounded-xl p-[20px] mb-[40px] gap-3 flex-col justify-center flex items-center min-h-[300px]"
        >
            <div className="lg:flex-row gap-6 justify-center pb-[20px] pt-[20px] flex flex-col border-b-gray-300 border-b-[1px]">
                <a
                    href="https://mail.google.com/mail/?view=cm&to=loefurbaneja354@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Enviar correo electronico"
                    className="hover:opacity-30 transition-opacity"
                >
                    <ContactCard
                        primaryText="loefurbaneja354@gmail.com"
                        secondaryText="Escribenos"
                        Icon={MessageIcon}
                    />
                </a>
                <ContactCard
                    primaryText="Panama, Panama City"
                    secondaryText="Panama"
                    Icon={LocationIcon}
                />
                <div className="flex gap-[30px] flex-col items-start">
                    <ContactCard
                        secondaryText="Ofrecemos un servicio de calidad y excelencia. Nos
                    preocupamos porque alcances los mejores resultados en tu
                    vida académica. ¡Contáctanos YA!."
                    />
                    <div className="flex gap-2">
                        <SocialLink
                            href="https://wa.me/13312436527?text=Hola%20trabajos%20universitarios%20Panama%20City,%20estoy%20interesado%20en%20.."
                            tooltip="Envianos un mensaje en Whatsapp!"
                            Icon={WsIcon}
                        />

                        <SocialLink
                            href="https://www.instagram.com/tareas24hpty/"
                            tooltip="Siguenos en instagram!"
                            Icon={IgIcon}
                        />
                    </div>
                </div>
            </div>
            <span className="w-full">
                <RightsReserved businessName="trabajos-universitarios.pty" />
            </span>
        </footer>
    );
};

export default Footer;
