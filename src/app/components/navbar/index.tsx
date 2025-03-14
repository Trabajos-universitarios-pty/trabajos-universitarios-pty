'use client';
import { useState, useEffect } from 'react';
import MenuIcon from '../common/icons/menu-icon';
import XIcon from '../common/icons/x_icon';
import Logo from '../common/logo';
import NavbarMobileMenu from './navbar_mobile_menu';
import NavbarMenu from './navbar_menu';

const Navbar: React.FC = () => {
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
            } h-[64px] transition-colors w-full top-0 z-50 sticky  `}
        >
            <div className="container mx-auto px-6">
                <div
                    className="transition-all md:hidden cursor-pointer items-center py-[10px] flex justify-between rounded-3xl active:opacity-30"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <Logo />
                    {!isMenuOpen ? <MenuIcon /> : <XIcon />}
                </div>

                {isMenuOpen && <NavbarMobileMenu />}

                <NavbarMenu />
            </div>
        </nav>
    );
};

export default Navbar;
