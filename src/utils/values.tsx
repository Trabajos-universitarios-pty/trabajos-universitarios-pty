import { Value } from '@/shared/value';
import {
    HeartIcon,
    LockClosedIcon,
    ShieldCheckIcon,
    StarIcon
} from '@heroicons/react/24/outline';

export const VALUES: Value[] = [
    {
        icon: (
            <HeartIcon
                width={20}
                height={20}
                className="text-white md:w-6 md:h-6 w-3 h-3"
            />
        ),
        title: 'Servicio al cliente',
        description:
            'Brindamos un servicio de calidad y confianza, nos esforzamos en atenderte de manera rápida y eficiente.'
    },
    {
        icon: (
            <LockClosedIcon
                width={20}
                height={20}
                className="text-white md:w-6 md:h-6 w-3 h-3"
            />
        ),
        title: 'Confidencialidad',
        description:
            'La privacidad de tus datos es nuestra prioridad, garantizamos la confidencialidad de tus trabajos y de tus datos personales.'
    },
    {
        icon: (
            <StarIcon
                width={20}
                height={20}
                className="text-white md:w-6 md:h-6 w-3 h-3"
            />
        ),
        title: 'Calidad',
        description:
            'Nuestro equipo está comprometido en entregar los mejores resultados. Siempre buscamos alcanzar la calificación máxima.'
    },
    {
        icon: (
            <ShieldCheckIcon
                width={20}
                height={20}
                className="text-white md:w-6 md:h-6 w-3 h-3"
            />
        ),
        title: 'Garantía',
        description:
            'La satisfacción del cliente es nuestra prioridad. Garantizamos la entrega en el plazo establecido, tarea original y libre de plagio.'
    }
];
