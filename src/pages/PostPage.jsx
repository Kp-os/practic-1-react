import { useParams, useNavigate } from 'react-router-dom';
import { postsData } from '../data';

const PostPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const post = postsData.find(p => p.id === Number(postId));

    if (!post) return <div>Пост із ID {postId} не знайдено.</div>;

    return (
        <article style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', cursor: 'pointer', padding: '5px 10px' }}>
                ← Повернутися
            </button>
            <header>
                <h2>Пост от: {post.author}</h2>
                <p style={{ color: '#666' }}>{post.date} | Категория: {post.category}</p>
            </header>
            <div style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
                {post.content}
            </div>
        </article>
    );
};
export default PostPage;