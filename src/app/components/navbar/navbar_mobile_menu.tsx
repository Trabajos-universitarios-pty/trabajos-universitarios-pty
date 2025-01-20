import NavbarLinks from './navbar_links';

const NavbarMobileMenu: React.FC = () => {
    return (
        <div className="md:hidden bg-white flex flex-col w-full gap-2 min-h-[230px] justify-between p-5 transition-all rounded shadow-md">
            <NavbarLinks isMobile />
        </div>
    );
};

export default NavbarMobileMenu;
