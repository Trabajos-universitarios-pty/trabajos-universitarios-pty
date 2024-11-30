import { FAQ } from '@/utils/faq_items';
import VArrowIcon from '../components/common/icons/v_arrow_icon';

const Faq = () => {
    return (
        <div className="mt-[200px] mb-[50px] flex flex-col gap-10" id="faq">
            <p className="text-3xl font-medium text-center">
                Preguntas Frecuentes
            </p>
            <div className="flex flex-col gap-3">
                {FAQ.map(({ description, title }, index) => (
                    <details
                        key={index}
                        className="group p-4 bg-white hover:scale-[1.01] transition-all text-black rounded-lg shadow"
                    >
                        <summary className="cursor-pointer text-rust-600 text-lg font-medium flex items-center justify-between">
                            <span>{title}</span>
                            <span className="transition-transform duration-400 transform group-open:rotate-180">
                                <VArrowIcon />
                            </span>
                        </summary>
                        <div className="mt-3">{description}</div>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default Faq;
