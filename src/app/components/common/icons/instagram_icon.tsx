import React from 'react';

const IgIcon = () => {
    return (
        <svg
            className="h-7 w-7 hover:text-orange-300 transition-colors text-orange-500"
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
            <rect x="4" y="4" width="16" height="16" rx="4" />{' '}
            <circle cx="12" cy="12" r="3" />{' '}
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>
    );
};

export default IgIcon;
