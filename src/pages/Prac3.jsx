import { useState } from 'react';
import { students } from '../data';

const Prac3 = () => {
    const [showHelp, setShowHelp] = useState(false);
    const [filterActive, setFilterActive] = useState(false);

    const displayStudents = filterActive
        ? students.filter(student => student.score >= 60)
        : students;

    return (
        <section>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Практична №3: Умовне відображення</h1>

            {/* Оператор && */}
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setShowHelp(!showHelp)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
                    {showHelp ? "Приховати інструкцію" : "Показати інструкцію"}
                </button>
                {showHelp && (
                    <p style={{ padding: '10px', background: '#eef', borderRadius: '5px', marginTop: '10px' }}>
                        Довідка: Використовуйте кнопку нижче для фільтрації успішних студентів.
                    </p>
                )}
            </div>

            {/* Тернарний оператор */}
            <button onClick={() => setFilterActive(!filterActive)} style={{ marginBottom: '15px', padding: '8px 16px', cursor: 'pointer' }}>
                {filterActive ? "Показати всіх" : "Показати тільки успішних"}
            </button>

            {/* Виведення списку з перевіркою на порожнечу та відсутність оцінки */}
            {displayStudents.length === 0 ? (
                <p>За вашим запитом нікого не знайдено</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {displayStudents.map(student => (
                        <li key={student.id} style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
                            <span>{student.name}</span>
                            <div>
                                <span style={{ marginRight: '15px', fontWeight: 'bold' }}>
                                    Бали: {student.score ?? "Оцінка відсутня"}
                                </span>
                                {student.score !== undefined && (
                                    <span style={{ color: student.score >= 60 ? 'green' : 'red' }}>
                                        {student.score >= 60 ? 'Зараховано' : 'Незараховано'}
                                    </span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Prac3;