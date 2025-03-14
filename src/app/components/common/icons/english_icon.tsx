const EnglishIcon = ({ className = '' }: { className?: string }) => (
    <svg
        className={`h-8 w-8 ${className}`}
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
        <path d="M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4" />{' '}
        <path d="M11 19l4 -9l4 9m-.9 -2h-6.2" />
    </svg>
);

export default EnglishIcon;
