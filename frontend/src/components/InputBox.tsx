import React from 'react';
import styles from '../styles/InputBox.module.scss';

interface Props {
    label: string;
    value: string;
    onChange: (value: string) => void;
    autoFocus?: boolean;
    length?: number;
    error?: boolean;
}

const InputBox: React.FC<Props> = ({
    label,
    value,
    onChange,
    autoFocus = false,
    length = 30,
    error = false,
}: Props) => {
    return (
        <div className={styles.box}>
            <div className={`${styles.label} ${error ? styles.label__error : ''}`}>{label}</div>
            <input
                type={'text'}
                className={`${styles.inputBox} ${error ? styles.inputBox__error : ''}`}
                maxLength={length}
                value={value}
                onChange={e => onChange(e.target.value)}
                autoFocus={autoFocus}
            />
        </div>
    );
};

export default InputBox;
