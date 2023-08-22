import React from 'react';
import styles from '../styles/LobbyUserItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CAR_ICONS } from './Lobby';

interface Props {
    username: string;
    carIndex: number;
    isReady: boolean;
}

const LobbyUserItem: React.FC<Props> = ({ username, carIndex, isReady }: Props) => {
    return (
        <li className={`${styles.container} ${isReady ? styles.container__ready : ''}`}>
            <FontAwesomeIcon icon={CAR_ICONS[carIndex]} className={styles.carIcon} />
            <p className={styles.username}>{username}</p>
            {isReady && <FontAwesomeIcon icon={faCheckCircle} className={styles.readyIcon} />}
        </li>
    );
};

export default LobbyUserItem;
