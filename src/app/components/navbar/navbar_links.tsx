import { NAVBAR_ITEMS } from '@/utils/navbar_items';

interface NavbarLinksProps {
    isMobile: boolean;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ isMobile }) => {
    const listStyle: string = 'active:text-rust-600 transition-colors';

    const unOrderListStyle: string =
        'flex justify-around flex-col gap-5 items-start';

    return (
        <ul
            className={`${isMobile ? unOrderListStyle : 'flex gap-3 items-center'}`}
        >
            {NAVBAR_ITEMS.map(({ id, name }) => (
                <li
                    className={`${isMobile ? listStyle : 'hover:text-rust-600 transition-colors'}`}
                    key={id}
                >
                    <a href={`#${name.toLocaleLowerCase()}`}>{name}</a>
                </li>
            ))}
        </ul>
    );
};

export default NavbarLinks;
