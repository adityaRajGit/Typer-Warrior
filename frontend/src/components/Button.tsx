import React from 'react';
import styles from '../styles/Button.module.scss';

interface Props {
    text: string;
    onClick: () => void;
    small?: boolean;
}

const Button: React.FC<Props> = ({ text, onClick, small = false }: Props) => (
    <button className={`${styles.button} ${small ? styles.button__small : ''}`} onClick={onClick}>
        {text}
    </button>
);

export default Button;
