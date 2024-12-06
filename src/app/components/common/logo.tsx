import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <a href="./" className="flex cursor-pointer items-center gap-2 ">
            <Image
                alt="logo-tareas-universitarias"
                src={'./tupty-logo.svg'}
                width={40}
                height={40}
            ></Image>
            <p>Tareas24hpty</p>
        </a>
    );
};

export default Logo;
