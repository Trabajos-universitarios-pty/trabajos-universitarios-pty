import React from 'react';

interface ContactCardProps {
    Icon?: React.ElementType;
    primaryText?: string;
    secondaryText?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
    Icon,
    primaryText,
    secondaryText
}) => {
    return (
        <div className="flex h-[60px] min-w-[300px] gap-2">
            {Icon && <Icon />}
            <div>
                <p>{primaryText}</p>
                <p>{secondaryText}</p>
            </div>
        </div>
    );
};

export default ContactCard;
