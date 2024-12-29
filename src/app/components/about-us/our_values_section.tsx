import { VALUES } from '@/utils/values';
import ValueCard from './value_card';

const OurValues = () => {
    return (
        <div className="grid sm:grid-cols-2 gap-2 md:gap-5 ">
            {VALUES.map((value, index) => (
                <ValueCard key={index} value={value} />
            ))}
        </div>
    );
};

export default OurValues;
