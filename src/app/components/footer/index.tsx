import IgIcon from '../common/icons/instagram_icon';
import LocationIcon from '../common/icons/location_icon';
import MessageIcon from '../common/icons/message_icon';
import WsIcon from '../common/icons/whatsapp_icon';
import ContactCard from './contact_card';
import SocialLink from './social_link';

const Footer = () => {
    return (
        // Todo: Quitar el mt200
        <footer className="mt-[200px] flex-col justify-center flex items-center h-[300px]">
            <div className=" gap-6 h-[100px] justify-center flex">
                <a
                    href="https://mail.google.com/mail/?view=cm&to=loefurbaneja354@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Enviar correo electronico"
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
                <div className="flex flex-col items-start">
                    <ContactCard
                        secondaryText="Ofrecemos un servicio de calidad y excelencia. Nos
                    preocupamos porque alcances los mejores resultados en tu
                    vida académica. ¡Contáctanos YA!."
                    />
                    <div className="flex gap-2">
                        <SocialLink
                            href="https://wa.me/13312436527?text=Hola%20trabajos%20universitarios%20Panama%20City,%20estoy%20interesado%20en%20.."
                            tooltip="Enviamos un mensaje en Whatsapp!"
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
        </footer>
    );
};

export default Footer;
