import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CarouselProps {
    images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setItemsPerSlide(2);
            } else {
                setItemsPerSlide(1);
            }
        };

        handleResize(); // Llamamos a la función inicialmente para establecer el valor inicial
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="relative w-full  overflow-hidden">
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100"
                onClick={prevSlide}
            >
                Anterior
            </button>
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`w-full shrink-0 ${
                            itemsPerSlide === 2 ? 'sm:w-1/2' : ''
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`Imagen ${index}`}
                            width={500}
                            height={300}
                        />
                    </div>
                ))}
            </div>

            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-500 text-white px-4 py-2 rounded-full opacity-75 hover:opacity-100"
                onClick={nextSlide}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Carousel;
