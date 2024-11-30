import { FAQ } from '@/utils/faq';
import AccordionComponent from '../common/accordion';
import { AccordionItemProps, AccordionProps } from '@nextui-org/accordion';

const accordion_props: AccordionProps = {
    children: <></>,
    showDivider: false,
    itemClasses: {
        base: 'py-2',
        title: 'text-lg font-semibold text-rust-500',
        content: 'pb-2',
        indicator: 'text-rust-600 ',
        trigger: 'focus:outline-none focus:ring-0 focus:border-0'
    },
    className: 'focus:outline-none focus:ring-0 focus:border-0'
};

const accordion_item_props: AccordionItemProps = {
    className:
        ' bg-gradient-to-r to-rust-900 from-carrot_orange-900  rounded-2xl px-4 my-3',
    children: <></>
};

const FaqAccordion = ({}) => {
    return (
        <AccordionComponent
            items={FAQ}
            accordion_props={accordion_props}
            accordion_item_props={accordion_item_props}
        />
    );
};

export default FaqAccordion;
