import HeroImageSection from './hero_image_section';
import HeroTextSection from './hero_text_section';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row lg:gap-0 gap-40 justify-between items-center w-full h-[500px] ">
            <HeroTextSection />
            <HeroImageSection />
        </section>
    );
};

export default Hero;
