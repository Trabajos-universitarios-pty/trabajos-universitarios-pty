interface ContactCardProps {
    Icon: React.ElementType;
    href: string;
    tooltip: string;
}

const SocialLink: React.FC<ContactCardProps> = ({ Icon, href, tooltip }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={tooltip}
        >
            <Icon />
        </a>
    );
};

export default SocialLink;
