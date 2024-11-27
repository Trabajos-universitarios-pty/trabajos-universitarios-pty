import Image from 'next/image';

const Logo: React.FC = () => {
    return (
        <div className="flex cursor-pointer items-center gap-2 ">
            <Image
                alt="logo-trabajos-universitarios"
                src={'./tupty-logo.svg'}
                width={40}
                height={40}
            ></Image>
            <p>trabajos24hpty</p>
        </div>
    );
};

export default Logo;
