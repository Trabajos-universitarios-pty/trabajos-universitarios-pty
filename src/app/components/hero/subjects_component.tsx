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
    { name: 'Inglés', icon: <EnglishIcon /> },
    { name: 'Y muchas más...', icon: <div></div> }
];

const Subject: React.FC<Subject> = ({ name, icon }) => (
    <div className="flex gap-4 justify-between">
        {icon}
        <p className="txt-appear-animation ">{name}</p>
    </div>
);

const SubjectsComponent = () => {
    const not_hover_styles: string =
        'bg-gradient-to-r from-amber-700 to-carrot_orange-500 ';
    const hover_styles: string =
        'hover:scale-105 transition-transform duration-300 hover:from-rufous-500 hover:to-rufous-600 hover:text-white hover:border-2 hover:border-rufous-700';

    const styles = `${not_hover_styles} ${hover_styles}`;

    return (
        <div
            className={`${styles} absolute -bottom-[75%] sm:-bottom-[110px] right-2 text-lg font-medium rounded-2xl w-fit p-4 shadow-lg shadow-rust-300 `}
        >
            {SUBJECTS.map((subject, index) => (
                <Subject key={index} name={subject.name} icon={subject.icon} />
            ))}
        </div>
    );
};

export default SubjectsComponent;
