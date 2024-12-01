import { Value } from '@/shared/value';

interface ValueCardProps {
    value: Value;
}

const ValueCard: React.FC<ValueCardProps> = ({ value }) => {
    return (
        <div className="">
            {value.icon}
            <h3>{value.title}</h3>
            <p>{value.description}</p>
        </div>
    );
};

export default ValueCard;
