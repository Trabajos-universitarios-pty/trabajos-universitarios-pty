import { VALUES } from '@/utils/values';
import ValueCard from './value_card';

const OurValues = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2 xl:gap-0">
            <h2 className="text-4xl xl:text-center font-semibold lg:w-1/3 text-rust-500">
                Nuestros valores
            </h2>
            <div className="grid sm:grid-cols-2 gap-2 md:gap-5 lg:w-2/3">
                {VALUES.map((value, index) => (
                    <ValueCard key={index} value={value} />
                ))}
            </div>
        </div>
    );
};

export default OurValues;
