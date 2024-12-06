import HeroImageSection from './hero_image_section';
import HeroTextSection from './hero_text_section';

const Hero: React.FC = () => {
    return (
        <div className="lg:h-[70vh] h-[980px] sm:h-[850px] flex items-start lg:items-center">
            <section
                className="flex flex-col lg:flex-row lg:gap-0 gap-40 justify-between items-center w-full "
                id="inicio"
            >
                <HeroTextSection />
                <HeroImageSection />
            </section>
        </div>
    );
};

export default Hero;
