import React from 'react';

const Button = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <button className="bg-rust-600 hover:bg-rust-700 text-white flex gap-1 items-center pl-5 pr-5 min-w-[180px] transition-all hover:scale-105 rounded-xl ">
            {children}
        </button>
    );
};

export default Button;
