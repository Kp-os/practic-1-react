import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const ProfileOverview = () => <div><h3>Інформація профілю</h3><p>Тут відображається ваша статистика.</p></div>;

const ProfileSettings = () => {
    const navigate = useNavigate();
    const handleSave = () => {
        alert("Налаштування збережено!");
        navigate('/');
    };
    return (
        <div>
            <h3>Налаштування</h3>
            <button onClick={handleSave} style={{ padding: '8px 16px', cursor: 'pointer' }}>Зберегти та вийти</button>
        </div>
    );
};

const Profile = () => {
    return (
        <div style={{ display: 'flex', gap: '20px', minHeight: '400px' }}>
            <aside style={{ width: '200px', borderRight: '1px solid #ccc', paddingRight: '10px' }}>
                <h3>Мій акаунт</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <Link to="" style={{ textDecoration: 'none', color: '#007bff' }}>Інформація</Link>
                    <Link to="settings" style={{ textDecoration: 'none', color: '#007bff' }}>Налаштування</Link>
                </div>
            </aside>
            <div style={{ flex: 1, paddingLeft: '20px' }}>
                <Routes>
                    <Route index element={<ProfileOverview />} />
                    <Route path="settings" element={<ProfileSettings />} />
                </Routes>
            </div>
        </div>
    );
};
export default Profile;