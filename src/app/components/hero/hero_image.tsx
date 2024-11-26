import Image from 'next/image';

const HeroImage: React.FC = () => {
    return (
        <div className="relative">
            <div className="">
                <p className=""></p>
            </div>
            <div className="bg-rust-500 w-[400px] h-[300px] absolute rounded-3xl -z-10 "></div>
            <Image
                src="/landing-images/hero-img.png"
                alt="girl graduating"
                width={500}
                height={469}
                unoptimized
                className="z-10"
            />
        </div>
    );
};

export default HeroImage;
