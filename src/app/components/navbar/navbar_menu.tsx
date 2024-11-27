import CotizaButton from '../common/buttons/cotiza_button';
import Logo from '../common/logo';
import NavbarLinks from './navbar_links';

const NavbarMenu: React.FC = () => {
    return (
        <div className="hidden p-[10px] justify-between md:flex">
            <Logo />

            <NavbarLinks isMobile={false} />

            <CotizaButton />
        </div>
    );
};

export default NavbarMenu;