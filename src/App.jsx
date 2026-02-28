import Post from './components/molecules/Post/Post';
import { postsData, students } from './data';
import styles from './App.module.css';

function App() {
    // Логіка для Практичної №2
    const sortedStudents = [...students].sort((a, b) => b.score - a.score);
    const activeStudents = students.filter(student => student.isActive);
    const averageScore = activeStudents.reduce((acc, curr) => acc + curr.score, 0) / activeStudents.length;

    return (
        <div className={styles.appContainer} style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>

            {/* ================= ЛАБОРАТОРНА РОБОТА №2 ================= */}
            <section style={{ marginBottom: '50px' }}>
                <h1 style={{ textAlign: 'center' }}>Лабораторна №2: Стрічка новин</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {postsData.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            date={post.date}
                            avatar={post.avatar}
                        />
                    ))}
                </div>
            </section>

            <hr style={{ margin: '40px 0' }} />

            {/* ================= ПРАКТИЧНА РОБОТА №2 ================= */}
            <section>
                <h1 style={{ textAlign: 'center' }}>Практична №2: Трансформація масивів</h1>

                <div style={{ display: 'flex', gap: '40px', justifyContent: 'space-between', flexWrap: 'wrap' }}>

                    {/* Усі студенти */}
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

                    {/* Фільтровані студенти */}
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

                {/* Статистика */}
                <div style={{ marginTop: '20px', padding: '15px', background: '#e9ecef', borderRadius: '8px' }}>
                    <h2>Статистика</h2>
                    <p style={{ fontSize: '18px' }}>Середній бал активних студентів: <strong>{averageScore.toFixed(1)}</strong></p>
                </div>
            </section>

        </div>
    );
}

export default App;