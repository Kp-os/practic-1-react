import { useState } from 'react';
import Lab3 from './pages/Lab3';
import Prac2 from './pages/Prac2';
import Prac3 from './pages/Prac3';
import Prac4 from './pages/Prac4'; // Імпортуємо нову сторінку
import styles from './App.module.css';

function App() {
    const [activeWork, setActiveWork] = useState('prac4'); // Відразу відкриваємо нову роботу

    const getButtonStyle = (workName) => ({
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: activeWork === workName ? '#007bff' : '#e9ecef',
        color: activeWork === workName ? 'white' : 'black',
        border: 'none',
        borderRadius: '5px',
        fontWeight: activeWork === workName ? 'bold' : 'normal',
        transition: 'all 0.3s ease'
    });

    return (
        <div className={styles.appContainer} style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>

            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Моє портфоліо</h1>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Оберіть роботу для перегляду</p>

            {/* === НАВІГАЦІЙНЕ МЕНЮ === */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginBottom: '30px', borderBottom: '2px solid #ccc', paddingBottom: '20px' }}>
                <button style={getButtonStyle('lab3')} onClick={() => setActiveWork('lab3')}>Лабораторна 3</button>
                <button style={getButtonStyle('prac2')} onClick={() => setActiveWork('prac2')}>Практична 2</button>
                <button style={getButtonStyle('prac3')} onClick={() => setActiveWork('prac3')}>Практична 3</button>
                <button style={getButtonStyle('prac4')} onClick={() => setActiveWork('prac4')}>Практична 4</button>
            </div>

            {/* === КОНТЕНТ === */}
            <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                {activeWork === 'lab3' && <Lab3 />}
                {activeWork === 'prac2' && <Prac2 />}
                {activeWork === 'prac3' && <Prac3 />}
                {activeWork === 'prac4' && <Prac4 />}
            </div>

        </div>
    );
}

export default App;