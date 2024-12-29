import { Value } from '@/shared/value';

interface ValueCardProps {
    value: Value;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
    return (
        <div className="bg-slate-50 rounded-xl px-3 py-3 md:px-6 md:py-4 flex flex-col justify-center  items-center gap-1 shadow-lg hover:ease-in-out select-none">
            <div className="flex md:flex-col gap-2 items-center">
                <div className="rounded-full p-2 md:p-4 bg-rust-600">
                    {value.icon}
                </div>
                <h3 className="font-semibold text-sm md:text-lg text-rust-400">
                    {value.title}
                </h3>
            </div>
            <p className="font-medium text-center text-rust-100 text-xs md:text-sm ">
                {value.description}
            </p>
        </div>
    );
};

export default ValueCard;
