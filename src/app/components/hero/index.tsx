import HeroImageSection from './hero_image_section';

const Hero: React.FC = () => {
    return (
        <section className="flex justify-between items-center w-full h-[500px] ">
            <div className="w-1/2">
                <h1 className="text-6xl font-medium ">Hacemos tus tareas</h1>
                <h2 className="text-3xl ">
                    Encuentra a los mejores profesionales para hacer tus tareas
                </h2>
                <button className="bg-rust-500 text-lg p-2 rounded-lg text-white">
                    Cotiza
                </button>
            </div>
            <HeroImageSection />
        </section>
    );
};

export default Hero;
