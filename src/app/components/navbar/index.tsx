'use client';
import { NAVBAR_ITEMS } from '@/utils/navbar_items';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
            } h-[64px] transition-colors w-full flex justify-between top-0 z-50 sticky p-[10px]`}
        >
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
                        className="hover:text-rust-500 transition-colors"
                        key={id}
                    >
                        <a href={`#${name.toLocaleLowerCase()}`}>{name}</a>
                    </li>
                ))}
            </ul>

            <button className="bg-rust-500 text-white pl-5 pr-5 min-w-[200px]  rounded-xl">
                <p>Cotiza ahora! 💲</p>
            </button>
        </nav>
    );
};

export default Navbar;
