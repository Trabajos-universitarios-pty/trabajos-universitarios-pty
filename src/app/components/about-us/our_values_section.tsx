import { VALUES } from '@/utils/values';
import ValueCard from './value_card';

const OurValues = () => {
    return (
        <div className="grid grid-cols-2">
            {VALUES.map((value, index) => (
                <ValueCard key={index} value={value} />
            ))}
        </div>
    );
};

export default OurValues;
