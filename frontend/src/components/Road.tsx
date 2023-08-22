import React from 'react';
import styles from '../styles/Road.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { CAR_ICONS } from './Lobby';

interface Props {
    username: string;
    speed: number;
    progress: number;
    color: string;
    carIndex: number;
}

const Road: React.FC<Props> = ({ username, speed, progress, color, carIndex }: Props) => {
    return (
        <section className={styles.container}>
            <div className={styles.userInfoRow}>
                <p className={styles.lightText}>
                    {`${speed} `}
                    <span className={styles.lighterText}>K/min</span>
                </p>
                <p className={styles.userInfoRowSpacer}>·</p>
                <p className={styles.lightText}>{username}</p>
            </div>
            <div className={styles.roadContainer}>
                <div className={styles.road}>
                    <div className={styles.usableRoad}>
                        <div style={{ marginLeft: `${progress}%`, marginBottom: 10 }} className={styles.carBox}>
                            <FontAwesomeIcon
                                icon={CAR_ICONS[carIndex]}
                                style={{ color: color }}
                                className={styles.carIcon}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faFlagCheckered}
                        style={{ color: progress === 100 ? color : '#505050' }}
                        className={styles.flagIcon}
                    />
                </div>
            </div>
        </section>
    );
};

export default Road;
