import { useState } from 'react';
import { Link } from 'react-router-dom'; // Додаємо для переходу на сторінку поста
import Post from '../components/molecules/Post/Post';
import SearchBar from '../components/molecules/SearchBar/SearchBar';
import { postsData } from '../data';

const Lab3 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Логіка фільтрації (Лабораторна №3)
    const filteredPosts = postsData.filter((post) => {
        const matchesSearch =
            post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            activeCategory === 'All' || post.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
                Лабораторна №3: Стрічка з фільтрацією
            </h1>

            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

            {/* Кнопки категорій */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                {['All', 'News', 'Updates'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: 'none',
                            cursor: 'pointer',
                            backgroundColor: activeCategory === cat ? '#007bff' : '#e9ecef',
                            color: activeCategory === cat ? 'white' : 'black',
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Список постів */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <div key={post.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
                            <Post {...post} />
                            {/* Посилання на динамічну сторінку (Лабораторна №4) */}
                            <Link
                                to={`/feed/${post.id}`}
                                style={{
                                    display: 'inline-block',
                                    marginTop: '10px',
                                    color: '#007bff',
                                    textDecoration: 'none',
                                    fontWeight: 'bold'
                                }}
                            >
                                Читати повністю →
                            </Link>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#666' }}>
                        Нічого не знайдено за вашим запитом.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Lab3;