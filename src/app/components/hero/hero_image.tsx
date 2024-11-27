import Image from 'next/image';

const HeroImage: React.FC = () => {
    return (
        <div className="relative select-none w-fit">
            <div className="w-[250px] h-[180px] sm:w-[380px] sm:h-[300px] absolute bottom-0 right-10 rounded-3xl -z-10 bg-gradient-to-tl from-rust-500 to-rust-600 shadow-lg shadow-carrot_orange-100"></div>
            <Image
                src="/landing-images/hero-img.png"
                alt="girl graduating"
                width={450}
                height={300}
                unoptimized
                className="z-20 "
            />
        </div>
    );
};

export default HeroImage;
