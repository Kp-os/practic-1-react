import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout/MainLayout';
import Home from './pages/Home';
import Lab3 from './pages/Lab3';
import Prac2 from './pages/Prac2';
import Prac3 from './pages/Prac3';
import Prac4 from './pages/Prac4';
import PostPage from './pages/PostPage';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Routes>
            {/* MainLayout оборачивает все эти маршруты */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />

                <Route path="feed" element={<Lab3 />} />
                <Route path="feed/:postId" element={<PostPage />} />

                <Route path="profile/*" element={<Profile />} />

                {/* Отдельные маршруты для практических работ */}
                <Route path="prac2" element={<Prac2 />} />
                <Route path="prac3" element={<Prac3 />} />
                <Route path="prac4" element={<Prac4 />} />

                {/* Обработка неверных ссылок */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;