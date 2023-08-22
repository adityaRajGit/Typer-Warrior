import React, { useEffect, useState } from 'react';
import styles from '../styles/JoinLobby.module.scss';
import { socket } from '../App';
import { SocketRequestType } from '../type/SocketRequestType';
import { SocketResponseType } from '../type/SocketResponseType';
import Container from './Container';
import InputBox from './InputBox';
import Button from './Button';

const JoinLobby: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [lobbyId, setLobbyId] = useState<string>('');

    const [incorrectUsername, setIncorrectUsername] = useState<boolean>(false);
    const [lobbyNotFound, setLobbyNotFound] = useState<boolean>(false);
    const [gameOngoing, setGameOngoing] = useState<boolean>(false);

    const submit = () => {
        socket.emit(SocketRequestType.LOBBY_JOIN, username, lobbyId);
        setGameOngoing(false);
    };

    useEffect(() => {
        socket.on(SocketResponseType.LOBBY_ERROR_INCORRECT_USERNAME, () => setIncorrectUsername(true));
        socket.on(SocketResponseType.LOBBY_ERROR_NOT_FOUND, () => setLobbyNotFound(true));
        socket.on(SocketResponseType.LOBBY_ERROR_GAME_ONGOING, () => setGameOngoing(true));
    }, []);

    return (
        <main onKeyDown={e => e.key === 'Enter' && submit()}>
            <Container>
                <InputBox
                    label={'USERNAME'}
                    value={username}
                    onChange={(v: string) => {
                        if (incorrectUsername) setIncorrectUsername(false);
                        setUsername(v);
                    }}
                    autoFocus={true}
                    length={30}
                    error={incorrectUsername}
                />

                <InputBox
                    label={'LOBBY ID (EMPTY FOR NEW LOBBY)'}
                    value={lobbyId}
                    onChange={(v: string) => {
                        if (lobbyNotFound) setLobbyNotFound(false);
                        setLobbyId(v.toUpperCase());
                    }}
                    length={5}
                    error={lobbyNotFound}
                />

                {gameOngoing && (
                    <div className={styles.error}>
                        Sorry, you can't join the lobby while the game is ongoing.
                        <br />
                        Please wait for the race to end and join for the next round!
                    </div>
                )}

                <div className={styles.spacer} />

                <Button text={lobbyId.length === 0 ? 'CREATE LOBBY' : 'JOIN'} onClick={() => submit()} />
            </Container>
        </main>
    );
};

export default JoinLobby;
