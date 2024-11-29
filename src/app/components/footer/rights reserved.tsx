import React from 'react';

interface RightsReservedProps {
    businessName: string;
    year?: number; // Año opcional, predeterminado al año actual
}

const RightsReserved: React.FC<RightsReservedProps> = ({
    businessName,
    year = new Date().getFullYear()
}) => {
    return (
        <p className="text-[12px] text-gray-400">
            © {year} — {businessName}. Todos los derechos reservados.
        </p>
    );
};

export default RightsReserved;
