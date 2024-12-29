import Image from 'next/image';
import EmblaCarousel from './embla_carousel';

interface CarouselProps {
    images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
    return (
        <div className="relative w-full  overflow-hidden">
            <EmblaCarousel
                options={{
                    loop: true
                }}
                slides={images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt="carousel image"
                        width={400}
                        height={250}
                        unoptimized
                        className="rounded-lg"
                    />
                ))}
            />
        </div>
    );
};

export default Carousel;
