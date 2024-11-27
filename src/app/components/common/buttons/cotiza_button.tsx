import React from 'react';
import ArrowRightIcon from '../icons/arrow_right_icon';

const CotizaButton = () => {
    return (
        <button className="bg-rust-600 hover:bg-rust-700 text-white flex gap-1 items-center p-3 min-w-[180px] transition-all hover:scale-[1.03] rounded-xl ">
            <p>Cotiza ahora! </p>
            <ArrowRightIcon />
        </button>
    );
};

export default CotizaButton;
