import {
    Accordion,
    AccordionItem,
    AccordionItemProps,
    AccordionProps
} from '@nextui-org/accordion';
import { AccordionItemType } from '../../shared/accordion-item';

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
                    {...accordion_item_props}
                >
                    {item.description}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionComponent;
