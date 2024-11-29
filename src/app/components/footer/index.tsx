import IgIcon from '../common/icons/instagram_icon';
import LocationIcon from '../common/icons/location_icon';
import MessageIcon from '../common/icons/message_icon';
import WsIcon from '../common/icons/whatsapp_icon';
import ContactCard from './contact_card';

const Footer = () => {
    return (
        // Todo: Quitar el mt200
        <footer className="mt-[200px] flex-col justify-center flex items-center h-[300px]">
            <div className="items-center gap-6 justify-center flex">
                <ContactCard
                    primaryText="loefurbaneja354@gmail.com"
                    secondaryText="Escribenos"
                    Icon={MessageIcon}
                />
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
                        <WsIcon />
                        <IgIcon />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
