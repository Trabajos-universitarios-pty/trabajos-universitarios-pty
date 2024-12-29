import { Value } from '@/shared/value';

interface ValueCardProps {
    value: Value;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
    return (
        <div className="rounded-xl px-6 py-4 flex flex-col justify-center  items-center gap-1 shadow-lg hover:ease-in-out select-none">
            <div className="rounded-full p-4 bg-rust-600">{value.icon}</div>
            <h3 className="font-semibold text-base md:text-lg text-rust-400">
                {value.title}
            </h3>
            <p className="font-medium text-center text-rust-100 text-sm ">
                {value.description}
            </p>
        </div>
    );
};

export default ValueCard;
