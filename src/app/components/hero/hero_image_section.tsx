import ExperienceComponent from './experience_component';
import HeroImage from './hero_image';
import SubjectsComponent from './subjects_component';

const HeroImageSection: React.FC = () => {
    return (
        <div className="relative">
            <ExperienceComponent />
            <HeroImage />
            <SubjectsComponent />
        </div>
    );
};

export default HeroImageSection;
