import { WhatsappButton } from '../common/whatsapp-button';

const HeroTextSection: React.FC = () => {
    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className=" flex flex-col gap-3">
                <h1 className="text-5xl sm:text-6xl font-medium txt-appear-animation">
                    Hacemos tu Tesis y Tareas
                </h1>
                <h2 className="text-3xl txt-appear-animation">
                    Encuentra a los mejores profesionales para hacer tus tareas
                </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <WhatsappButton />
            </div>
        </div>
    );
};

export default HeroTextSection;
