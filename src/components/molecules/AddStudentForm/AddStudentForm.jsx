import { useState } from 'react';
import Input from '../../atoms/Input/Input';

// Функція валідації
const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
        errors.name = "Ім'я є обов'язковим для заповнення";
    } else if (values.name.trim().length < 2) {
        errors.name = "Ім'я повинно містити принаймні 2 символи";
    }

    if (values.score === "") {
        errors.score = "Будь ласка, введіть бал";
    } else if (isNaN(values.score) || Number(values.score) < 0 || Number(values.score) > 100) {
        errors.score = "Бал повинен бути числом від 0 до 100";
    }

    return errors;
};

function AddStudentForm({ onAddStudent }) {
    const [formData, setFormData] = useState({ name: '', score: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Очищення помилки під час введення
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Виклик валідації перед відправкою
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length === 0) {
            // Якщо помилок немає — додаємо студента
            onAddStudent({
                id: Date.now(),
                name: formData.name.trim(),
                score: Number(formData.score),
                isActive: true
            });
            setFormData({ name: '', score: '' }); // Очищення форми
        } else {
            setErrors(validationErrors); // Відображення помилок
        }
    };

    // Блокування кнопки
    const hasErrors = Object.keys(validate(formData)).length > 0;
    const isFormEmpty = !formData.name || formData.score === '';
    const isButtonDisabled = hasErrors || isFormEmpty;

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0 }}>Додати нового студента</h3>

            <div style={{ marginBottom: '15px' }}>
                <Input
                    label="Прізвище та ім'я:"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введіть ПІБ"
                />
                {errors.name && <p style={{ color: 'red', margin: '5px 0 0', fontSize: '14px' }}>{errors.name}</p>}
            </div>

            <div style={{ marginBottom: '15px' }}>
                <Input
                    label="Бал студента:"
                    name="score"
                    type="number"
                    value={formData.score}
                    onChange={handleChange}
                    placeholder="0-100"
                />
                {errors.score && <p style={{ color: 'red', margin: '5px 0 0', fontSize: '14px' }}>{errors.score}</p>}
            </div>

            <button
                type="submit"
                disabled={isButtonDisabled}
                style={{
                    padding: '10px 20px',
                    backgroundColor: isButtonDisabled ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
                }}
            >
                Додати студента
            </button>
        </form>
    );
}

export default AddStudentForm;