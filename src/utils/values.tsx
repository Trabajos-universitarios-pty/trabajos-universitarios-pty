import { Value } from '@/shared/value';
import {
    HeartIcon,
    LockClosedIcon,
    ShieldCheckIcon,
    StarIcon
} from '@heroicons/react/24/outline';

export const VALUES: Value[] = [
    {
        icon: <HeartIcon width={24} height={24} className="text-white" />,
        title: 'Servicio al cliente',
        description:
            'Estamos comprometidos en brindar un servicio de calidad y confianza, por ello, nos esforzamos en atender tus solicitudes de manera rápida y eficiente.'
    },
    {
        icon: <LockClosedIcon width={24} height={24} className="text-white" />,
        title: 'Confidencialidad',
        description:
            'La privacidad de tus datos es nuestra prioridad, por ello, garantizamos la confidencialidad de tus trabajos y de tus datos personales.'
    },
    {
        icon: <StarIcon width={24} height={24} className="text-white" />,
        title: 'Calidad',
        description:
            'Nuestro equipo está comprometido en entregar los mejores resultados, el objetivo es la excelencia. Siempre buscamos alcanzar la calificación máxima.'
    },
    {
        icon: <ShieldCheckIcon width={24} height={24} className="text-white" />,
        title: 'Garantía',
        description:
            'La satisfacción del cliente es nuestra prioridad. Es por ello que al comprometernos con una tarea, garantizamos la entrega en el plazo establecido, tarea original y libre de plagio.'
    }
];
