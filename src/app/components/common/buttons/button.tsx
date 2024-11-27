import React from 'react';

const Button = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <button
            type="button"
            className="bg-rust-600 hover:bg-rust-700 text-white flex gap-1 items-center p-3 min-w-[180px] transition-all hover:scale-[1.03] rounded-xl "
        >
            {children}
        </button>
    );
};

export default Button;
