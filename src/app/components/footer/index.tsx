import LocationIcon from '../common/icons/location_icon';
import MessageIcon from '../common/icons/message_icon';
import ContactCard from './contact_card';

const Footer = () => {
    return (
        // Todo: Quitar el mt200
        <footer className="mt-[200px] items-center justify-between flex h-[300px]">
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
            <ContactCard
                secondaryText="Ofrecemos un servicio de calidad y excelencia. Nos
                    preocupamos porque alcances los mejores resultados en tu
                    vida académica. ¡Contáctanos YA!."
            />
        </footer>
    );
};

export default Footer;
