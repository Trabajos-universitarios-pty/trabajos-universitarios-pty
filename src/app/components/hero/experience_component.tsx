const ExperienceComponent = () => {
    const not_hover_styles: string =
        'bg-gradient-to-r from-rust-600 to-carrot_orange-500 text-white';
    const hover_styles: string =
        'hover:scale-105 transition-transform duration-300 hover:from-white hover:to-rufous-900 hover:text-black hover:border-2 hover:border-rust-600 ';

    const styles = `${not_hover_styles} ${hover_styles}`;
    return (
        <div
            className={`${styles} absolute z-10 -top-[110px] sm:-top-[86px] left-2 sm:-left-[80px] text-base font-medium  rounded-2xl w-fit p-4  shadow-lg shadow-rust-500 select-none`}
        >
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
