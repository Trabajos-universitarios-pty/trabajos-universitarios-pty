import TitleSection from '../common/title_section';
import OurValues from './our_values_section';
import WhoAreWeSection from './who_are_we_section';

const AboutUs = () => {
    return (
        <div>
            <TitleSection title="¿Quiénes somos?" subtitle="NOSOTROS" />
            <div className="flex flex-col lg:flex-row gap-4 items-center">
                <WhoAreWeSection />
                <OurValues />
            </div>
        </div>
    );
};
export default AboutUs;
