import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Game.module.scss';
import { GameStateContext, socket } from '../App';
import { SocketRequestType } from '../type/SocketRequestType';
import ProgressInfoContainer from './ProgressInfoContainer';
import Road from './Road';
import WinInfo from './WinInfo';

const PLAYER_COLORS = ['#74B9FF', '#83A868', '#FCAC6F', '#DF4A70', '#BE9CFC'];

const Game: React.FC = () => {
    const gameState = useContext(GameStateContext);

    const [currentTextPosition, setCurrentTextPosition] = useState<number>(0);
    const [countdown, setCountdown] = useState<number>(-1);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (gameState?.text[currentTextPosition] === e.key && Date.now() >= gameState.gameStartTime) {
                setCurrentTextPosition(currentTextPosition + 1);
                socket.emit(SocketRequestType.GAME_UPDATE, currentTextPosition + 1);
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [currentTextPosition, gameState?.text, gameState?.gameStartTime]);

    useEffect(() => {
        if (!gameState?.gameStartTime || Date.now() >= (gameState.gameStartTime ?? 0)) {
            setCountdown(-1);
            return;
        }

        setCountdown(Math.floor((gameState.gameStartTime - Date.now()) / 1000));

        const interval = setInterval(() => {
            setCountdown(Math.floor((gameState.gameStartTime - Date.now()) / 1000));

            if (Date.now() >= gameState.gameStartTime) {
                setCountdown(-1);
                clearInterval(interval);
            }
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [gameState?.gameStartTime]);

    if (!gameState) return <></>;

    return (
        <main className={styles.game}>
            {countdown >= 0 && (
                <div className={styles.countdownWrapper}>
                    <div className={styles.countdownOverlay} />
                    <div className={styles.countdown}>
                        <h1 key={countdown}>{countdown === 0 ? 'GO' : countdown}</h1>
                    </div>
                </div>
            )}

            <div className={styles.playerSpace}>
                {gameState.players.map((player, index) => (
                    <Road
                        key={player.socketId}
                        username={player.username}
                        speed={player.typingSpeed}
                        progress={Math.floor((player.currentTextPosition * 100) / gameState.text.length)}
                        color={PLAYER_COLORS[index % PLAYER_COLORS.length]}
                        carIndex={player.carIndex}
                    />
                ))}
            </div>

            <div className={styles.typingSpace}>
                <ProgressInfoContainer currentTextPosition={currentTextPosition} />
            </div>

            {gameState.isFinished && <WinInfo />}
        </main>
    );
};

export default Game;
