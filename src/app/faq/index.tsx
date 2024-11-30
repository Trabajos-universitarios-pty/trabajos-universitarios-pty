import { FAQ } from '@/utils/faq_items';

const Faq = () => {
    return (
        <div className="mt-[200px] flex flex-col gap-6" id="faq">
            <p className="text-3xl font-medium text-center">
                Preguntas Frecuentes
            </p>
            <div className="flex flex-col gap-3">
                {FAQ.map(({ description, title }, index) => (
                    <details
                        key={index}
                        className={`p-4 bg-rust-600 text-white rounded shadow `}
                    >
                        <summary className="cursor-pointer text-lg font-semibold text-white">
                            {title}
                        </summary>
                        <div className={` mt-2 animate-fadeIn`}>
                            {description}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default Faq;
