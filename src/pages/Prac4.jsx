import { useState } from 'react';
import { students as initialStudents } from '../data';
import AddStudentForm from '../components/molecules/AddStudentForm/AddStudentForm';

const Prac4 = () => {
    // Перетворюємо масив на стан для динамічного додавання
    const [studentsList, setStudentsList] = useState(initialStudents);

    // Функція додавання нового студента
    const handleAddStudent = (newStudent) => {
        setStudentsList([...studentsList, newStudent]);
    };

    return (
        <section>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Практична №4: Валідація форм</h1>

            {/* Форма для додавання */}
            <AddStudentForm onAddStudent={handleAddStudent} />

            {/* Динамічний список */}
            <div style={{ marginTop: '30px' }}>
                <h2>Динамічний список студентів</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {studentsList.map(student => (
                        <li
                            key={student.id}
                            style={{
                                padding: '10px',
                                borderBottom: '1px solid #eee',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <span style={{ fontWeight: 'bold' }}>{student.name}</span>
                            <span>Бал: {student.score}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Prac4;