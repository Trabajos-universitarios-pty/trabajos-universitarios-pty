'use client';
import { useState, useEffect } from 'react';
import MenuIcon from '../common/icons/menu-icon';
import XIcon from '../common/icons/x_icon';
import Logo from '../common/logo';
import CotizaButton from '../common/buttons/cotiza_button';
import NavbarLinks from './navbar_links';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Agrega el evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpia el evento al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`${
                scrolled ? 'bg-white  shadow-md' : 'bg-transparent'
            } h-[64px] transition-colors w-full top-0 z-50 sticky`}
        >
            <div
                className="transition-all md:hidden items-center p-[10px] flex justify-between rounded-3xl active:opacity-30"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <Logo />
                {!isMenuOpen ? <MenuIcon /> : <XIcon />}
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white flex flex-col w-screen gap-2 min-h-[230px] justify-between p-5 transition-all rounded shadow-md">
                    <NavbarLinks isMobile />
                    <CotizaButton />
                </div>
            )}
            <div className="hidden p-[10px] justify-between md:flex">
                <Logo />

                <NavbarLinks isMobile={false} />

                <CotizaButton />
            </div>
        </nav>
    );
};

export default Navbar;
