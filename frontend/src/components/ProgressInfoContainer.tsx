import React, { useContext } from 'react';
import styles from '../styles/ProgressInfoContainer.module.scss';
import { GameStateContext, socket } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Props {
    currentTextPosition: number;
}

const ProgressInfoContainer: React.FC<Props> = ({ currentTextPosition }: Props) => {
    const gameState = useContext(GameStateContext) ?? { text: '', players: [], gameStartTime: 0 };
    const { text, players, gameStartTime } = gameState;
    const player = players.find(player => player.socketId === socket.id);

    if (!player) return <></>;

    const timePassed = Math.floor(((player.isFinished ? player.finishTime : Date.now()) - gameStartTime) / 1000);

    return (
        <section className={styles.container}>
            {player.isFinished ? (
                <div className={styles.top__finished}>
                    <FontAwesomeIcon icon={faCheck} className={styles.finishedIcon} />
                </div>
            ) : (
                <div className={styles.top}>
                    <div className={styles.table}>
                        <span className={styles.lightText}>
                            <div>{text.substring(0, currentTextPosition)}</div>
                        </span>
                        <span className={styles.text}>{text[currentTextPosition]}</span>
                        <span className={styles.text}>{text.substring(currentTextPosition + 1)}</span>
                    </div>
                </div>
            )}
            <div className={styles.bottom}>
                <div>
                    <span className={styles.text}>{player.typingSpeed}</span>
                    <span className={styles.lightText}> K/min</span>
                </div>
                <div>
                    <span className={styles.text}>{currentTextPosition}</span>
                    <span className={styles.lightText}>/</span>
                    <span className={styles.text}>{text.length}</span>
                    <span className={styles.lightText}> letters typed</span>
                </div>
                <div>
                    <span className={styles.text}>{Math.floor((currentTextPosition * 100) / text.length)}</span>
                    <span className={styles.lightText}>% completed</span>
                </div>
                <div>
                    <span className={styles.text}>{timePassed < 0 ? 0 : timePassed}</span>
                    <span className={styles.lightText}>s passed</span>
                </div>
            </div>
        </section>
    );
};

export default ProgressInfoContainer;
