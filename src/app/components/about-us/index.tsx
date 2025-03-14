import { POSTS } from '@/utils/posts';
import Carousel from '../carousel';
import TitleSection from '../common/title_section';
import OurValues from './our_values_section';

const AboutUs = () => {
    return (
        <div id="nosotros" className="">
            <TitleSection title="¿Quiénes somos?" subtitle="NOSOTROS" />
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4  mt-6 items-center bg-rust-900 rounded-lg  p-8">
                <Carousel images={POSTS} />
                <OurValues />
            </div>
        </div>
    );
};
export default AboutUs;
