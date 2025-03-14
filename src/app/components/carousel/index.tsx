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
                        className="rounded-lg cursor-pointer transition transform hover:scale-[1.02] p-2"
                        onClick={() =>
                            window.open(
                                'https://www.instagram.com/tareas24hpty/',
                                '_blank'
                            )
                        }
                    />
                ))}
            />
        </div>
    );
};

export default Carousel;
