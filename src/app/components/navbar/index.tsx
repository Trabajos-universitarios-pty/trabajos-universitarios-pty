'use client';
import { NAVBAR_ITEMS } from '@/utils/navbar_items';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ArrowRightIcon from '../common/icons/arrow_right_icon';
import MenuIcon from '../common/icons/menu-icon';
import Button from '../common/button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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
                scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            } h-[64px] transition-colors w-full top-0 z-50 sticky p-[10px]`}
        >
            <div className="md:hidden">
                <MenuIcon />
            </div>
            <div className="hidden justify-between md:flex">
                <div className="flex items-center gap-2 ">
                    <Image
                        alt="logo-trabajos-universitarios"
                        src={'./tupty-logo.svg'}
                        width={40}
                        height={40}
                    ></Image>
                    <p>trabajos24hpty</p>
                </div>

                <ul className="flex gap-3 items-center">
                    {NAVBAR_ITEMS.map(({ id, name }) => (
                        <li
                            className="hover:text-rust-600 transition-colors"
                            key={id}
                        >
                            <a href={`#${name.toLocaleLowerCase()}`}>{name}</a>
                        </li>
                    ))}
                </ul>

                <Button>
                    <p>Cotiza ahora! </p>
                    <ArrowRightIcon />
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
