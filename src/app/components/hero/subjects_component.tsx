import ChemistryIcon from '../common/icons/chemistry_icon';
import EnglishIcon from '../common/icons/english_icon';
import MathIcon from '../common/icons/math_icon';
import PhysicsIcon from '../common/icons/physics_icon';

interface Subject {
    name: string;
    icon: React.ReactNode;
}

const SUBJECTS: Subject[] = [
    { name: 'Matemática', icon: <MathIcon /> },
    { name: 'Química', icon: <ChemistryIcon /> },
    { name: 'Física', icon: <PhysicsIcon /> },
    { name: 'Inglés', icon: <EnglishIcon /> }
];

const Subject: React.FC<Subject> = ({ name, icon }) => (
    <div className="flex gap-4 justify-between">
        {icon}
        <p className="text-w-shadow ">{name}</p>
    </div>
);

const SubjectsComponent = () => {
    return (
        <div className="absolute -bottom-16 right-2 text-lg font-medium bg-gradient-to-r from-amber-700 to-carrot_orange-500 rounded-2xl w-fit p-4 shadow-lg shadow-rust-300 hover:scale-105 transition-transform ">
            {SUBJECTS.map((subject, index) => (
                <Subject key={index} name={subject.name} icon={subject.icon} />
            ))}
        </div>
    );
};

export default SubjectsComponent;
