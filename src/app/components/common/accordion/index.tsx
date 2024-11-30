import {
    Accordion,
    AccordionItem,
    AccordionItemProps,
    AccordionProps
} from '@nextui-org/accordion';
import { AccordionItemType } from '../../shared/accordion-item';
import { AnswerIcon, QuestionIcon } from '../icons/accordion_icon';

interface Props {
    accordion_props?: AccordionProps;
    accordion_item_props?: AccordionItemProps;
    items: AccordionItemType[];
}

const AccordionComponent: React.FC<Props> = ({
    items,
    accordion_props,
    accordion_item_props
}) => {
    return (
        <Accordion {...accordion_props}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    indicator={({ isOpen }) =>
                        isOpen ? <AnswerIcon /> : <QuestionIcon />
                    }
                    {...accordion_item_props}
                >
                    <div className="pb-2">{item.description}</div>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionComponent;
