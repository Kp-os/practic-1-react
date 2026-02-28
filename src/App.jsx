import { useState } from 'react';
import Post from './components/molecules/Post/Post';
import SearchBar from './components/molecules/SearchBar/SearchBar';
import { postsData, students } from './data';
import styles from './App.module.css';

function App() {
    // === Стан для Лабораторної №3 ===
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Логіка фільтрації Лабораторної №3
    const filteredPosts = postsData.filter(post => {
        const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    // === Логіка для Практичної №2 ===
    const sortedStudents = [...students].sort((a, b) => b.score - a.score);
    const activeStudents = students.filter(student => student.isActive);
    const averageScore = activeStudents.reduce((acc, curr) => acc + curr.score, 0) / activeStudents.length;

    return (
        <div className={styles.appContainer} style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>

            {/* ================= ЛАБОРАТОРНА РОБОТА №3 ================= */}
            <section style={{ marginBottom: '50px' }}>
                <h1 style={{ textAlign: 'center' }}>Стрічка з фільтрацією</h1>

                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                {/* Кнопки категорій */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    {['All', 'News', 'Updates'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: 'none',
                                cursor: 'pointer',
                                backgroundColor: activeCategory === cat ? '#007bff' : '#e9ecef',
                                color: activeCategory === cat ? 'white' : 'black'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map(post => <Post key={post.id} {...post} />)
                    ) : (
                        <p style={{ textAlign: 'center', color: '#666' }}>Нічого не знайдено за вашим запитом.</p>
                    )}
                </div>
            </section>

            <hr style={{ margin: '40px 0' }} />

            {/* ================= ПРАКТИЧНА РОБОТА №2 ================= */}
            <section>
                <h1 style={{ textAlign: 'center' }}>Практична №2: Трансформація масивів</h1>

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

        </div>
    );
}

export default App;