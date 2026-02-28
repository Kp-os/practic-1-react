import styles from './Input.module.css';

const Input = ({ type = 'text', placeholder, label, name, value, onChange }) => {
    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    );
};

export default Input;