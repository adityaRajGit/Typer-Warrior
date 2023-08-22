import React, { useContext } from 'react';
import styles from '../styles/WinInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { GameStateContext } from '../App';
import Container from './Container';

const WinInfo: React.FC = () => {
    const gameState = useContext(GameStateContext);
    if (!gameState) return <></>;

    const ranking = gameState.players.sort((a, b) => (a.finishTime > b.finishTime ? 1 : -1));
    if (ranking.length === 0) return <></>;

    return (
        <Container>
            <div className={styles.top}>
                <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
                <div className={styles.winnerName}>{ranking[0].username}</div>
                <div className={styles.winnerSubtitle}>WON THE GAME</div>
            </div>
            <div className={styles.divider} />
            <div className={styles.table}>
                {ranking.map((player, index) => (
                    <>
                        <div className={styles.playerRank}>#{index + 1}</div>
                        <div className={styles.playerName}>{player.username}</div>
                        <div className={styles.alignRight}>
                            {Math.floor((player.finishTime - (gameState?.gameStartTime ?? 0)) / 1000)}
                            <span className={styles.textLight}>s</span>
                        </div>
                        <div className={styles.alignRight}>
                            {player.typingSpeed} <span className={styles.textLight}>K/min</span>
                        </div>
                    </>
                ))}
            </div>
        </Container>
    );
};

export default WinInfo;
