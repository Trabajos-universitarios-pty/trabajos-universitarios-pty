import React from 'react';

const ArrowRightIcon = () => {
    return (
        <svg
            className="h-5 w-5 text-slate-100"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <line x1="5" y1="12" x2="19" y2="12" />{' '}
            <line x1="15" y1="16" x2="19" y2="12" />{' '}
            <line x1="15" y1="8" x2="19" y2="12" />
        </svg>
    );
};

export default ArrowRightIcon;
