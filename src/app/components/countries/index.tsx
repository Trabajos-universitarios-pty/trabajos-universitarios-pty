import { COUNTRIES } from './countries';
import CountryImage from './country_image';

const Countries = () => {
    return (
        <div className="flex justify-between">
            {COUNTRIES.map((country, index) => (
                <CountryImage key={index} country={country} />
            ))}
        </div>
    );
};

export default Countries;
