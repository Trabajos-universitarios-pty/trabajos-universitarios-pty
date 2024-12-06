import Image from 'next/image';

const CountryImage: React.FC<{ country: string }> = ({ country }) => {
    return (
        <Image
            src={'/countries/' + country + '.png'}
            alt={country}
            width={30}
            height={20}
            unoptimized
        />
    );
};

export default CountryImage;
