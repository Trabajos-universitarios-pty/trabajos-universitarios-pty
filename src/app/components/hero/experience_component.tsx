const ExperienceComponent = () => {
    return (
        <div className="absolute z-10 -top-[86px] -left-[80px] text-base font-medium bg-gradient-to-r from-rust-600 to-carrot_orange-500 rounded-2xl w-fit p-4 text-white shadow-lg shadow-rust-500 hover:scale-105 transition-transform select-none ">
            <div className="flex items-center">
                <p className="text-w-shadow text-3xl">+5 &nbsp; </p>
                <p className="text-w-shadow"> Años de experiencia</p>
            </div>
            <div className="flex items-center">
                <p className="text-w-shadow">Calificaciones &nbsp;</p>
                <p className="text-w-shadow text-3xl"> 100%</p>
            </div>
            <div className="flex items-center">
                <p className="text-w-shadow text-3xl">🛇 &nbsp; </p>
                <p className="text-w-shadow"> Antiplagio garantizado</p>
            </div>
        </div>
    );
};

export default ExperienceComponent;
