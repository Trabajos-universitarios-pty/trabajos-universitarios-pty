import React from 'react';

interface TitleSecionProps {
    title: string;
    subtitle: string;
}

const TitleSection: React.FC<TitleSecionProps> = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-rust-600 text-center">{subtitle}</p>
            <h1 className="text-3xl font-medium text-center">{title}</h1>
        </div>
    );
};

export default TitleSection;
