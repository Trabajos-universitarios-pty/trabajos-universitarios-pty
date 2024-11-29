import FaqAccordion from './faq_accordion';

const Faq: React.FC = () => {
    return (
        <div className="w-full justify-center">
            <h1 className="text-4xl font-medium text-rust-100 mb-8 text-center txt-appear-animation">
                Preguntas frecuentes
            </h1>
            <FaqAccordion />
        </div>
    );
};

export default Faq;
