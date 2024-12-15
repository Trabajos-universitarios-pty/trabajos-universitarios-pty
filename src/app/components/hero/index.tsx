import Countries from '../countries';
import HeroImageSection from './hero_image_section';
import HeroTextSection from './hero_text_section';

const Hero: React.FC = () => {
    return (
        <div className="mt-[0px] sm:mt-[20px]">
            <Countries />
            <div className="lg:h-[70vh] mt-4 h-[980px] sm:h-[850px] flex items-start lg:items-center">
                <section
                    className="flex flex-col lg:flex-row lg:gap-0 gap-40 justify-between items-center w-full "
                    id="inicio"
                >
                    <HeroTextSection />
                    <HeroImageSection />
                </section>
            </div>
        </div>
    );
};

export default Hero;
