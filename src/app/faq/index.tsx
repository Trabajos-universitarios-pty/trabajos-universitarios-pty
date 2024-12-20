import { FAQ } from '@/utils/faq_items';
import VArrowIcon from '../components/common/icons/v_arrow_icon';
import TitleSection from '../components/common/title_section';

const Faq = () => {
    return (
        <div className="mb-[50px] " id="faq">
            <div className="justify-center w-full items-center flex flex-col gap-10">
                <TitleSection title="Preguntas Frecuentes" subtitle="FAQ" />

                <div className="flex w-full flex-col gap-3">
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
        </div>
    );
};

export default Faq;
