import { COUNTRIES } from './countries';
import CountryImage from './country_image';

const Countries = () => {
    return (
        <div className="overflow-hidden relative w-full">
            {/* Contenedor de las imágenes duplicadas */}
            <div className="flex animate-marquee">
                {COUNTRIES.concat(COUNTRIES).map((country, index) => (
                    <div key={index} className="flex-shrink-0 w-[15%]">
                        <CountryImage country={country} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countries;
