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
            'Brindamos un servicio de calidad y confianza, nos esforzamos en atenderte de manera rápida y eficiente.'
    },
    {
        icon: <LockClosedIcon width={24} height={24} className="text-white" />,
        title: 'Confidencialidad',
        description:
            'La privacidad de tus datos es nuestra prioridad, garantizamos la confidencialidad de tus trabajos y de tus datos personales.'
    },
    {
        icon: <StarIcon width={24} height={24} className="text-white" />,
        title: 'Calidad',
        description:
            'Nuestro equipo está comprometido en entregar los mejores resultados. Siempre buscamos alcanzar la calificación máxima.'
    },
    {
        icon: <ShieldCheckIcon width={24} height={24} className="text-white" />,
        title: 'Garantía',
        description:
            'La satisfacción del cliente es nuestra prioridad. Garantizamos la entrega en el plazo establecido, tarea original y libre de plagio.'
    }
];
