import CotizaButton from '../common/buttons/cotiza_button';

const HeroTextSection: React.FC = () => {
    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="gap-3">
                <h3 className="text-xl txt-appear-animation">
                    ¿Necesitas ayuda con tus tareas? ¡Te ayudamos!
                </h3>
                <h1 className="text-6xl font-medium txt-appear-animation">
                    Hacemos tu Tesis
                </h1>
                <h2 className="text-3xl txt-appear-animation">
                    Encuentra a los mejores profesionales para hacer tus tareas
                </h2>
            </div>
            <div>
                <CotizaButton />
            </div>
        </div>
    );
};

export default HeroTextSection;
