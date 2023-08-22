import React, { useContext } from 'react';
import styles from '../styles/Lobby.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './Container';
import Button from './Button';
import LobbyUserItem from './LobbyUserItem';
import { LobbyStateContext, socket } from '../App';
import { SocketRequestType } from '../type/SocketRequestType';
import {
    faBabyCarriage,
    faCaravan,
    faCarSide,
    faTractor,
    faTrailer,
    faTruck,
    faTruckMonster,
    faTruckMoving,
    faTruckPickup,
} from '@fortawesome/free-solid-svg-icons';
import WinInfo from './WinInfo';

export const CAR_ICONS = [
    faCarSide,
    faTruckMoving,
    faTruck,
    faTruckPickup,
    faCaravan,
    faBabyCarriage,
    faTrailer,
    faTractor,
    faTruckMonster,
];

const Lobby: React.FC = () => {
    const { lobbyId, players } = useContext(LobbyStateContext) ?? { lobbyId: '', players: [] };

    const myCarIndex = players.find(player => player.socketId === socket.id)?.carIndex ?? 0;

    return (
        <main className={styles.lobby}>
            <WinInfo />

            <Container>
                <h1 className={styles.title}>LOBBY</h1>
                <p className={styles.subtitle}>
                    ID: <span>{lobbyId}</span>
                </p>
                <div className={styles.divider} />

                <ul className={styles.users}>
                    {players.map((player, index) => (
                        <LobbyUserItem
                            username={player.username}
                            carIndex={player.carIndex}
                            isReady={player.isReady}
                            key={index}
                        />
                    ))}
                </ul>

                <div className={styles.divider} />
                <Button text={'READY'} onClick={() => socket.emit(SocketRequestType.LOBBY_TOGGLE_READY)} />
            </Container>

            <Container small={true}>
                <div className={styles.cars}>
                    {CAR_ICONS.map((icon, index) => (
                        <div
                            key={index}
                            className={`${styles.car} ${index === myCarIndex ? styles.car__selected : ''}`}
                            onClick={() => socket.emit(SocketRequestType.LOBBY_SWITCH_CAR, index)}
                        >
                            <FontAwesomeIcon icon={icon} />
                        </div>
                    ))}
                </div>
            </Container>
        </main>
    );
};

export default Lobby;
