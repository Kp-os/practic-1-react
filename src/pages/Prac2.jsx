import { students } from '../data';

const Prac2 = () => {
    // Тут масив статичний, без useState
    const sortedStudents = [...students].sort((a, b) => b.score - a.score);
    const activeStudents = students.filter(student => student.isActive);
    const averageScore = activeStudents.length > 0
        ? activeStudents.reduce((acc, curr) => acc + curr.score, 0) / activeStudents.length
        : 0;

    return (
        <section>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Практична №2: Трансформація масивів</h1>

            <div style={{ display: 'flex', gap: '40px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                    <h2>Усі студенти (відсортовані)</h2>
                    <ul>
                        {sortedStudents.map(student => (
                            <li
                                key={student.id}
                                style={{
                                    color: student.isActive ? 'black' : 'gray',
                                    textDecoration: student.isActive ? 'none' : 'line-through'
                                }}
                            >
                                {student.name} — {student.score} балів
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>Активні (бал > 60)</h2>
                    <ul>
                        {students
                            .filter(student => student.isActive && student.score > 60)
                            .map(student => (
                                <li key={student.id}>
                                    {student.name} — {student.score} балів
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

            <div style={{ marginTop: '20px', padding: '15px', background: '#e9ecef', borderRadius: '8px' }}>
                <h2>Статистика</h2>
                <p style={{ fontSize: '18px' }}>Середній бал активних студентів: <strong>{averageScore.toFixed(1)}</strong></p>
            </div>
        </section>
    );
};

export default Prac2;