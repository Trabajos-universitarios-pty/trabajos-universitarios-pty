import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { AccordionItemType } from '../../shared/accordion-item';

interface AccordionProps {
    items: AccordionItemType[];
}

const AccordionComponent: React.FC<AccordionProps> = ({ items }) => {
    return (
        <Accordion>
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.description}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionComponent;
