import AccordionComponent from '../common/accordion';

const Faq: React.FC = () => {
    return (
        <div>
            <AccordionComponent
                items={[
                    {
                        title: 'What is Next.js?',
                        description:
                            'Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.'
                    },
                    {
                        title: 'What is NextUI?',
                        description:
                            'NextUI is a React component library that provides a set of components to help you build your applications faster.'
                    },
                    {
                        title: 'How can I contribute to NextUI?',
                        description:
                            'You can contribute to NextUI by submitting a pull request on GitHub.'
                    }
                ]}
            />
        </div>
    );
};

export default Faq;
