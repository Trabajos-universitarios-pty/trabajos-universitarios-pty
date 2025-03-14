const MathIcon = ({ className = '' }: { className?: string }) => (
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
        <path d="M16 13l4 4m0 -4l-4 4" /> <path d="M20 5h-7l-4 14l-3 -6h-2" />
    </svg>
);

export default MathIcon;
