import OurValues from './our_values_section';
import WhoAreWeSection from './who_are_we_section';

const AboutUs = () => {
    return (
        <div className="flex flex-col gap-4">
            <WhoAreWeSection />
            <OurValues />
        </div>
    );
};
export default AboutUs;
