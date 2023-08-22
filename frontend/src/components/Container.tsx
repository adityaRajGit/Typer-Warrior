import React from 'react';
import styles from '../styles/Container.module.scss';

interface Props {
    small?: boolean;
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, small = false }: Props) => {
    return <section className={`${styles.container} ${small ? styles.container__small : ''}`}>{children}</section>;
};

export default Container;
