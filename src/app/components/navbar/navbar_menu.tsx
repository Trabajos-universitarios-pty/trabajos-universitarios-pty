import Logo from '../common/logo';
import NavbarLinks from './navbar_links';

const NavbarMenu: React.FC = () => {
    return (
        <div className="hidden py-[10px] justify-between md:flex">
            <Logo />

            <NavbarLinks isMobile={false} />
        </div>
    );
};

export default NavbarMenu;
